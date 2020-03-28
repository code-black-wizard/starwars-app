<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-12 col-sm-6 mb-4" v-for="(item, index) in showData" :key="index">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">
              <span class="text-primary">Heigth:</span> {{ item.height }}
              <span class="text-primary">Weight:</span> {{ item.mass }}
            </p>
            <p class="card-text">
              <span class="text-primary">Hair color:</span> {{ item.hair_color }}
              <span class="text-primary">Skin color:</span> {{ item.skin_color }}
              <span class="text-primary">Eye color:</span> {{ item.eye_color }}
            </p>
            <p class="card-text">
              <span class="text-primary">Gender:</span> {{ item.gender }}
            </p>
            <p class="card-text">
              <span class="text-primary">Birth year:</span> {{ item.birth_year }}
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