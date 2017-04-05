// src/reducers/recipes.js
import { SEED_RECIPES } from '../actions/recipes/seed'
import { TOGGLE_LIKE } from '../actions/recipes/toggleLike'
import { CREATE_RECIPE } from '../actions/recipes/create'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case SEED_RECIPES :
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
