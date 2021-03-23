const initialState = {
  repos: []
}

const reposReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_REPOS': return {
      ...state,
      repos: JSON.parse(JSON.stringify(action.payload))
    }
    default: return state
  }
}

export default reposReducer