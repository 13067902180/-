import { DataApi } from "@/api/ajax.js"
export default {
    namespaced: true,
    state: {
        HomeListData: [1],
        list3: [
            { title: "数据总量情况" },
            {
                name: "3月", num: 100,
            },
            {
                name: "4月",
                num: 200,
            },
            {
                name: "5月",
                num: 100,
            },
            {
                name: "6月",
                num: 200,
            },
            {
                name: "7月",
                num: 230,
            },
            {
                name: "8月",
                num: 170,
            },
            {
                name: "9月",
                num: 80,
            },
            {
                name: "10月",
                num: 40,
            },
            {
                name: "11月",
                num: 60,
            },
            {
                name: "12月",
                num: 50,
            },
        ],
        list4: [
            { title: "数据总量情况" },
            {
                name: "3月", num: 100,
            },
            {
                name: "4月",
                num: 200,
            },
            {
                name: "5月",
                num: 100,
            },
            {
                name: "6月",
                num: 200,
            },
            {
                name: "7月",
                num: 230,
            },
            {
                name: "8月",
                num: 170,
            },
            {
                name: "9月",
                num: 80,
            },
            {
                name: "10月",
                num: 40,
            },
            {
                name: "11月",
                num: 60,
            },
            {
                name: "12月",
                num: 50,
            },
        ],
        list5: [
            { title: "数据总量情况" },
            {
                name: "1日", num: 100,
            },
            {
                name: "4日",
                num: 200,
            },
            {
                name: "5日",
                num: 100,
            },
            {
                name: "6月",
                num: 200,
            },
            {
                name: "7月",
                num: 230,
            },
            {
                name: "8月",
                num: 170,
            },
            {
                name: "9月",
                num: 80,
            },
            {
                name: "10月",
                num: 40,
            },
            {
                name: "11月",
                num: 60,
            },
            {
                name: "12月",
                num: 50,
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