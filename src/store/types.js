
export default {
    posts: {
        mutations: {
            items: 'mPostsItems',
            index: 'mPostsIndex'
        },
        actions: {
            fetch: 'aPostsItems',
            more: 'aMoreItems'
        },
        getters: {
            items: 'gPostsItems'
        }
    }
}