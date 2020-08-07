import types from '@/store/types'
import asyncUtil from '@/utils/asyncUtil'
import $axios from '@/plugins/axios'

const state = {
    items: [],
    lastIndex: 0,
    size: 10
}

const mutations = {
    [types.posts.mutations.items] (state, items) {
        state.items = items
        state.lastIndex = 0
    },
    [types.posts.mutations.index] (state, { lastIndex, size = 10 }) {
        state.lastIndex = lastIndex
        state.size = size
    }
}

const actions = {
    async [types.posts.actions.fetch] ({ commit }) {
        let res

        try {
            res = await $axios.get('/posts')
            commit(types.posts.mutations.items, res.data)
        } catch (e) {
            console.error(e)
        }

        return res
    },
    async [types.posts.actions.more] ({ commit, state }, { lastIndex, size = 10 }) {
        await asyncUtil.delay(1000)
        const allSize = state.items.length
        if (allSize > lastIndex) {
            lastIndex += size

            if (allSize > lastIndex) {
                lastIndex = allSize
            }

            commit(types.posts.mutations.index, { lastIndex, size })
        }
    }
}

const getters = {
    [types.posts.getters.items]: state => {
        const { lastIndex, size, items } = state
        return items.slice(lastIndex, size)
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
