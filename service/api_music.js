import hyRequest from "./index"

export function getBanners(){//获取轮播图
  return hyRequest.get("/banner",{type:2})
}
