<template>
    <div class="v-card">
      <slot />
    </div>
</template>

<script>
export default {
  name: 'VCard'
}
</script>

<style scoped lang="scss">
  .v-card {
    color: black;
    padding: 20px;
    border: #2c3e50 solid 1px;
    border-radius: 10px;
  }
</style>
