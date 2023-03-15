import { DataApi } from "@/api/ajax.js"
export default {
    namespaced: true,
    state: {
        HomeListData: [1],
        list3: [
            { title: "数据总量情况" },
            {
                name: "3年", num: 100,
            },
            {
                name: "4年",
                num: 200,
            },
            {
                name: "5年",
                num: 100,
            },
            {
                name: "6年",
                num: 200,
            },
            {
                name: "7年",
                num: 230,
            },
            {
                name: "8年",
                num: 170,
            },
            {
                name: "9年",
                num: 80,
            },
            {
                name: "10年",
                num: 40,
            },
            {
                name: "11年",
                num: 60,
            },
            {
                name: "12年",
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
                num: 151,
            },
            {
                name: "6月",
                num: 131,
            },
            {
                name: "7月",
                num: 22,
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
                num: 151,
            },
        ],
        list5: [
            { title: "数据总量情况" },
            {
                name: "1周", num: 100,
            },
            {
                name: "4周",
                num: 200,
            },
            {
                name: "5周",
                num: 23,
            },
            {
                name: "6周",
                num: 200,
            },
            {
                name: "7周",
                num: 230,
            },
            {
                name: "8周",
                num: 213,
            },
            {
                name: "9周",
                num: 80,
            },
            {
                name: "10周",
                num: 40,
            },
            {
                name: "11周",
                num: 60,
            },
            {
                name: "12周",
                num: 50,
            },
        ],
        list6: [
            { title: "数据总量情况" },
            {
                name: "1周", num: 100,
            },
            {
                name: "4周",
                num: 200,
            },
            {
                name: "5周",
                num: 23,
            },
            {
                name: "6周",
                num: 200,
            },
            {
                name: "7周",
                num: 230,
            },
            {
                name: "8周",
                num: 213,
            },
            {
                name: "9周",
                num: 80,
            },
            {
                name: "10周",
                num: 40,
            },
            {
                name: "11周",
                num: 60,
            },
            {
                name: "12周",
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