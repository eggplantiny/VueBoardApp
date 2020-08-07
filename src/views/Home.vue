<template>
    <div class="home">
        <template v-for="(post, index) in posts">
            <div
                :key="`${index}-post`"
            >
                <img :src="post.thumbnail" alt="" />
                <div>{{ post.title }}</div>
                <div>{{ post.userId }}</div>
                <div>{{ post.body }}</div>
            </div>
        </template>
        <infinite-loading spinner="waveDots" @infinite="infiniteHandler" />
    </div>
</template>

<script>

import types from '@/store/types'

export default {
    name: 'Home',
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
