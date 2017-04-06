// src/reducers/recipes.js
import { TOGGLE_LIKE } from '../actions/recipes/toggleLike'
import { FETCHED_RECIPES } from '../actions/recipes/fetch'
import { CREATE_RECIPE } from '../actions/recipes/create'


export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCHED_RECIPES :
      return [].concat(payload)

    case TOGGLE_LIKE :
      return state.map((recipe) => {
        if (recipe._id === payload) {
          return { ...recipe, liked: !recipe.liked }
        }
        return recipe
      })

      case CREATE_RECIPE :
        return [Object.assign({}, payload)].concat(state)

    default :
      return state
  }
}
