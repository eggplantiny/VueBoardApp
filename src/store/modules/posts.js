import types from '@/store/types'
import asyncUtil from '@/utils/asyncUtil'
import $axios from '@/plugins/axios'
import random from '@/utils/random'

const thumbnails = [
    'https://via.placeholder.com/150/771796',
    'https://via.placeholder.com/150/92c952',
    'https://via.placeholder.com/150/56a8c0'
]

const state = {
    items: [],
    lastIndex: 0,
    size: 8
}

const mutations = {
    [types.posts.mutations.items] (state, items) {
        state.items = items
        state.lastIndex = 0
    },
    [types.posts.mutations.index] (state, { lastIndex, size = 8 }) {
        state.lastIndex = lastIndex
        state.size = size
    }
}

const actions = {
    async [types.posts.actions.fetch] ({ commit }) {
        let res

        try {
            res = await $axios.get('/posts')
            const data = res.data.map(item => {
                item.thumbnail = thumbnails[random.getRandomInt(0, 2)]
                return item
            })
            commit(types.posts.mutations.items, data)
        } catch (e) {
            console.error(e)
        }

        return res
    },
    async [types.posts.actions.more] ({ commit, state }) {
        await asyncUtil.delay(1000)
        const allSize = state.items.length
        let more = true

        let { lastIndex, size } = state

        if (allSize > lastIndex) {
            lastIndex += size

            if (allSize < lastIndex) {
                lastIndex = allSize
                more = false
            }

            commit(types.posts.mutations.index, { lastIndex, size })
        } else {
            more = false
        }
        return more
    }
}

const getters = {
    [types.posts.getters.items]: state => {
        const { lastIndex, size, items } = state
        return JSON.parse(JSON.stringify(items)).splice(0, lastIndex + size)
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
