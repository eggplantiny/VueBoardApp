<template>
  <div class="container">
    <v-grid mode="grid">
      <template v-for="(post, index) in posts">
        <v-card
            :key="`${index}-post`"
            class="mb-4"
        >
          <img :src="post.thumbnail" alt="" />
          <v-card-title>
            {{ post.title }}
          </v-card-title>
          <v-card-content>
            {{ post.body }}
          </v-card-content>
        </v-card>
      </template>
    </v-grid>
    <infinite-loading spinner="waveDots" @infinite="infiniteHandler" />
  </div>
</template>

<script>

import types from '@/store/types'
import VCard from '@/components/molecules/VCard/index'
import VCardTitle from '@/components/molecules/VCard/VCardTitle/Index'
import VCardContent from '@/components/molecules/VCard/VCardContent/index'
import VGrid from '@/components/molecules/VGrid/index'

export default {
  name: 'Home',
  components: { VGrid, VCardContent, VCardTitle, VCard },
  computed: {
        posts () {
            return this.$store.getters[types.posts.getters.items]
        }
    },
    methods: {
        async infiniteHandler ($state) {
            const more = await this.$store.dispatch(types.posts.actions.more)

            if (more) {
                return $state.loaded()
            }

            return $state.complete()
        }
    },
    async beforeMount () {
        await this.$store.dispatch(types.posts.actions.fetch)
    }
}
</script>

<style scoped lang="scss">
</style>
