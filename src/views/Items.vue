<template>
  <div>
    <Navbar :currentTab.sync="currentTab" />
    <div class="container">
      <CustomInput @searchItem="searchItem" />
      <component v-if="loading" :items="items" :currentTab="currentTab" :is="currentTab"></component>
      <div v-else-if="error">
        Some error
      </div>
      <Spinner v-else />
      <div v-if="!items.length && loading" class="text-center">
        Not Results
      </div>
      <Pagination v-show="items.length > 1 && loading" @backPage="backPage" @aheadPage="aheadPage" :nextPage="nextPage" :prevPage="prevPage" />
    </div>
  </div>
</template>

<script>
import Films from '@/components/Films'
import People from '@/components/People'
import Starships from '@/components/Starships'

export default {
  components: {
    Films,
    People,
    Starships
  },
  data() {
    return {
      currentTab: 'films',
      loading: false,
      error: false,
      items: [],
      nextPage: null,
      prevPage: null,
      params: {
        search: '',
        page: 0
      }
    }
  },
  watch: {
    currentTab () {
      this.params.search = ''
      this.params.page = 0
      this.fetchData()
    }
  },
  methods: {
    fetchData () {
      this.loading = false
      this.$http.get(`https://swapi.co/api/${this.currentTab}`, {
        params: this.prepareParams
      })
        .then(res => {
          this.items = res.data.results
          this.nextPage = res.data.next
          this.prevPage = res.data.previous
          this.loading = true
          console.log(res.data)
        })
        .catch(err => {
          this.error = true
          console.log(err)
        })
    },
    searchItem (data) {
      this.params.search = data
      this.params.page = 0
      this.fetchData()
    },
    aheadPage () {
      if (!this.params.page) {
        this.params.page = (this.params.page + 1) + 1
      } else {
        this.params.page = this.params.page + 1
      }
      this.fetchData()
    },
    backPage () {
      if (this.params.page) {
        this.params.page = this.params.page - 1
      }
      this.fetchData()
    }
  },
  computed: {
    prepareParams () {
      for (let key in this.params) {
        if (this.params[key]) {
          let params = {
            [key]: this.params[key]
          }
          return params
        }
      }
    }
  },
  created() {
    this.fetchData()
  }
}
</script>
