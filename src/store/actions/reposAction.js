import axios from 'axios'
const URL = 'https://api.github.com/users'

export const getUserRepos = (user) => {
  return async (dispatch) => {
    try {

      const { data } = await axios.get(URL + `/${user}/repos`)

      dispatch({
        type: 'UPDATE_REPOS',
        payload: data
      })

    } catch (err) {
      console.log(err)
    }
  }
}