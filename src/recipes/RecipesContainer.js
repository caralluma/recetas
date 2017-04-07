import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetchRecipes from '../actions/recipes/fetch'
import Title from '../components/Title'
import RecipeItem from './RecipeItem'
import RecipeEditor from './RecipeEditor'

export class RecipesContainer extends PureComponent {
  static propTypes = {
    recipes: PropTypes.array.isRequired,
    fetchRecipes: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.fetchRecipes()
  }


  renderRecipe(recipe, index) {
    return <RecipeItem key={index} { ...recipe } />
  }

  render() {
    return (
      <div className="recipes wrapper">
        <header>
          <Title content="Recipes" />
        </header>
        <RecipeEditor title={''} summary={''} vegan={false} pescatarian={false} vegetarian={false} photo={''}/>
        <main>
          { this.props.loading ? 'We are loading your data!': null }
          { this.props.recipes.map(this.renderRecipe.bind(this)) }
          { this.props.loadError != null ? ' oh no how terrible :(' : null }
        </main>

      </div>
    )
  }
}

const mapStateToProps = ({ recipes, loading, loadError }) => ({ recipes, loading, loadError })

export default connect(mapStateToProps, { fetchRecipes })(RecipesContainer)
