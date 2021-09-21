import request from '../utils/request'

// 搜索结果
export const getSearchResult = (kw = '', start = 0) =>
  request.get('/search/result', {
    params: {
      kw,
      start,
    },
  })

// 首页
export const getHome = () => request.get('/home')

// 首页推荐
export const getRecommend = (params) => request.get('/recommend', { params })
