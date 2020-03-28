<template>
  <div class="mb-4">
    <nav class="navbar navbar-expand navbar-dark bg-primary">
      <div>
        <ul class="navbar-nav">
          <li v-for="(link, index) in links" :key="index" class="nav-item">
            <a @click.prevent="$emit('update:currentTab', link)" class="nav-link" :class="currentTab === link ? 'active' : ''" href="#">{{ link }}</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    currentTab: {
      type: String
    }
  },
  data() {
    return {
      links: ['films', 'people', 'starships']
    }
  }
}
</script>