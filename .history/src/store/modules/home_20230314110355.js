import { DataApi } from "@/api/ajax.js"
export default {
    state: {
        HomeListData: [],
        list3: [
            { title: "数据总量情况" },
            {

                name: "3月",
                num: "100",
                color: "#81E5FF",
            },
            {

                name: "今日交换数",
                num: "2427万条",
                color: "#81E5FF",
            },
            {

                name: "交换接口数",
                num: "1090万条",
                color: "#FE6C00",
            },
            {

                name: "交换数据量",
                num: "1090万条",
                color: "#FE6C00",
            },
            {

                name: "异常接口数",
                num: "69个",
                color: "#FF0D0D",
            },
        ],
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