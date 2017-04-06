import API from '../../middleware/api'
import appLoading from '../loading'

export const FETCHED_RECIPES = 'FETCHED_RECIPES'

const api = new API()
const recipes = api.service('recipes')

export default () => {
  return (dispatch) => {
    console.log('Fetching recipes...')
    dispatch(appLoading(true))
    recipes.find()
      .then((result) => {
        setTimeout(function() {
          console.log('Results are in!', result)
          dispatch(fetchedRecipes(result))
          dispatch(appLoading(false))
        }, 3000)
         setTimeout( callback, time)
      })
  }
}

const fetchedRecipes = (result) => {
  console.log('dispatching fetchedRecipes')
  return {
    type: FETCHED_RECIPES,
    payload: [].concat(result.data)
  }
}
