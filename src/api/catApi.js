import axios from 'axios'

// API호출 코드
export const API_END_POINT = 'https://kdt-frontend.cat-api.programmers.co.kr/'
export const request = async (id) => {
  try {
    const res = await axios.get(`${API_END_POINT}${id}`)
    return res.data
  } catch (e) {
    throw new Error('Error fetching')
  }
}
