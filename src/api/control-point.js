import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/article/list',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/article/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function addCotrolPoint(params) {
  return request({
    url: '/point/add',
    method: 'post',
    params
  })
}

export function updateArticle(data) {
  return request({
    url: '/article/update',
    method: 'post',
    data
  })
}

export function getControlPoint() {
  return request({
    url: '/point/list',
    method: 'get',
    data: []
  })
}

export function deleteControlPoint(params) {
  return request({
    url: '/point/delete',
    method: 'get',
    params
  })
}
export function updateControlPoint(params) {
  return request({
    url: '/point/update',
    method: 'post',
    params
  })
}

