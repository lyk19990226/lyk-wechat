import hyRequest from "./index"

export function getBanners(){//获取轮播图
  return hyRequest.get("/banner",{type:2})
}

export function getRankings(idx) {//获取歌曲榜单数据
  return hyRequest.get("/top/list", {
    idx
  })
}
