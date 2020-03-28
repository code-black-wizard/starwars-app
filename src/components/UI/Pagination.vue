<template>
  <div>
    <nav>
      <ul class="pagination justify-content-center">
        <li class="page-item"><a :class="!prevPage ? 'disabled-link' : ''" @click.prevent="$emit('backPage')" class="page-link" href="#">Prev</a></li>
        <li class="page-item"><a :class="!nextPage ? 'disabled-link' : ''" @click.prevent="$emit('aheadPage')" class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    nextPage: {
      type: [Object, String]
    },
    prevPage: {
      type: [Object, String]
    }
  }
}
</script>

<style scoped>

  .disabled-link {
    pointer-events: none
  }

</style>
