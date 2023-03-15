import { DataApi } from "@/api/ajax.js"
export default {
    state: {
        HomeListData: []
    },
    mutations: {
        changeHomeListData(state, data) {
            state.HomeListData = data
        }
    },
    actions: {
        async actChangeHomeListData(context, params) {
            let res = await DataApi(params)
            console.log(res.data.result);
            context.commit('changeHomeListData', res.data.result)
        }
    }
}