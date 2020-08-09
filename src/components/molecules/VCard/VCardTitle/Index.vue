<template>
  <div class="v-card-title">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VCardTitle'
}
</script>

<style scoped lang="scss">
  .v-card-title {
    font-size: 1.25em;
    padding-bottom: 10px;
    color: $title;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
</style>
