<template>
  <div class="container">
    <v-card>
      <v-card-title>
        Hello World
      </v-card-title>
      <v-card-content>
        Hello Good World!
      </v-card-content>
    </v-card>
  </div>
</template>

<script>
import VCard from '@/components/molecules/VCard/index'
import VCardTitle from '@/components/molecules/VCard/VCardTitle/Index'
import VCardContent from '@/components/molecules/VCard/VCardContent/index'
export default {
  name: 'Playground',
  components: {VCardContent, VCardTitle, VCard},
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">

</style>
