const API_END_POINT = 'https://kdt-frontend.cat-api.programmers.co.kr/'
export const request = async (id) => {
  try {
    const res = await fetch(`${API_END_POINT}${id}`)
    if (res.ok) {
      const data = await res.json()
      return data
    }
  } catch (e) {
    throw new Error('Error fetching')
  }
}
