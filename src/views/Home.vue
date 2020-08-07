<template>
  <div class="home">
    Hello World
  </div>
</template>

<script>

import types from '@/store/types'

export default {
    name: 'Home',
    data () {
        return {
            posts: []
        }
    },
    methods: {

    },
    async beforeMount () {
        await this.$store.dispatch(types.posts.actions.fetch)
        await this.$store.dispatch(types.posts.actions.more)
    }
}
</script>
