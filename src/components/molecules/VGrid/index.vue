<template>
  <div
      class="v-grid"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VGrid',
  props: {
    mode: {
      type: String,
      default: 'list',
      validator (value) {
        return ['list', 'grid'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    classes () {
      const { mode } = this
      const result = {}
      if (mode === 'list') {
        result['v-grid-list'] = true
      } else {
        result['v-grid-grid'] = true
      }
      return result
    }
  }
}
</script>

<style scoped lang="scss">
  .v-grid {
    width: 100%;
    &-list {

    }

    &-grid {
      display: grid;
      grid-gap: 10px;
      grid-auto-columns: 30%;
    }
  }
</style>
