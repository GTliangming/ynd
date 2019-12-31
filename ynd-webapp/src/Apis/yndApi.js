import { BASEURL } from '../common/config'
const MQURL = `${BASEURL}/market/market_list/`

export default {
    /**
     * 获取全国行情的信息
     */
    getMQInfoByUserId(cb){
        fetch(MQURL).then(res=>{
            res.json().then(cb)
        })
    }

}