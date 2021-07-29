import axios from "axios"
import * as Url from "./url"
export default function api(endpoint, method, body, token) {
    return axios({
        url: `${Url.API_PROJECT}/${endpoint}`,
        method: method,
        data: body,
        header: { "Authorization": `Bearer ${token}` },
    })
}