import request from '@/utils/request'

export function myShop(params) {
  return request({
    url: 'http://localhost:9000/api/item/page/1/10',
    method: 'get',
    params
  })
}

