<template>
  <div class="v-card-content">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VCardContent'
}
</script>

<style scoped lang="scss">
  .v-card-content {
    font-size: 1em;
    color: $text;
    padding: 10px 0;
    text-align: left;
  }
</style>
