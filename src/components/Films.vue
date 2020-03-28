<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-12 col-sm-6 mb-4" v-for="(item, index) in showData" :key="index">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title"> {{ item.title }}</h5>
            <p class="card-text">
              <span class="text-primary">Opening crawl:</span> {{ item.opening_crawl.slice(0, 50) }}...
            </p>
            <p class="card-text">
              <span class="text-primary">Director:</span> {{ item.director }}
            </p>
            <p class="card-text">
              <span class="text-primary">Producer:</span> {{ item.producer }}
            </p>
            <p class="card-text">
              <span class="text-primary">Release date:</span> {{ item.release_date }}
            </p>
            <a target="_blank" :href="item.url" class="btn btn-primary text-white">More info</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array
    },
    currentTab: {
      type: String
    }
  },
  computed: {
    showData () {
      return this.items
    }
  }
}
</script>