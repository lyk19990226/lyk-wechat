import hyRequest from "./index"

export function getTopMV(offset, limit = 10){//请求视频页数据
  return hyRequest.get("/top/mv",{offset,limit})//返回Promise
}
export function getMVURL(id){//请求播放视频地址
  return hyRequest.get("/mv/url",{id})
}

export function getMVDetail(mvid){//MV的详情
  return hyRequest.get("/mv/detail",{mvid})
}

export function getRelatedVideo(id){//推荐的相关视频
  return hyRequest.get("/related/allvideo",{id})
}
