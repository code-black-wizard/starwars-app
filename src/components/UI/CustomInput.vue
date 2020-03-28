<template>
  <div class="mb-4">
    <input @blur="searchItem" v-model.trim="val" class="form-control" type="text" placeholder="Search by title">
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: ''
    }
  },
  methods: {
    searchItem () {
      this.$emit('searchItem', this.val)
    }
  }
}
</script>