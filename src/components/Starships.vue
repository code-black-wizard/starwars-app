<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-12 col-sm-6 mb-4" v-for="(item, index) in showData" :key="index">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">
              <span class="text-primary">Model:</span> {{ item.model }}
            </p>
            <p class="card-text">
              <span class="text-primary">Manufacturer:</span> {{ item.manufacturer }}
            </p>
            <p class="card-text">
              <span class="text-primary">Crew:</span> {{ item.crew }}
            </p>
            <p class="card-text">
              <span class="text-primary">passengers:</span> {{ item.passengers }}
            </p>
            <p class="card-text">
              <span class="text-primary">Starship class:</span> {{ item.starship_class }}
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
    }
  },
  computed: {
    showData () {
      return this.items
    }
  }
}
</script>