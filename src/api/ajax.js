//使用封装的axios
import service from "@/utils/request";

const DataApi = (params) => {
    return service({
        url: '/sys/login',
        method: 'post',
        data: params
    })
}

export { DataApi }