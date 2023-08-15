import { request } from '../api/catApi.js'
export const catService = {
  // 1. 해당 노드 불러오기 (파일 or 디렉토리)
  async getNodes(id) {
    try {
      const data = await request(id)
      return data
    } catch (e) {
      throw new Error('sorry.. cannot get nodes')
    }
  },
}
