import API from '../../middleware/api'
import appLoading from '../loading'
import loadSuccess from '../load-success'
import loadError from  '../load-error'

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
          dispatch(loadSuccess())
          dispatch(appLoading(false))
        }, 3000)
      })
      .catch((error) => {
        dispatch(loadError(error))
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
