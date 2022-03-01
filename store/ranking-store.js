import { HYEventStore } from 'hy-event-store'
import { getRankings } from '../service/api_music'

const rankingStore = new HYEventStore({
  state: {
    hotRanking: {}, // 1: 热门
  },
  actions: {
    getRankingDataAction(ctx) {
      // 0: 新歌榜 1: 热门榜 2: 原创榜 3: 飙升榜
      getRankings(1).then(res =>{ 
        ctx.hotRanking = res.playlist
      })
    }
  }
})

export {
  rankingStore
}