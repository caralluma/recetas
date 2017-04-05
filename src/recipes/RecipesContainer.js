import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import Title from '../components/Title'
import RecipeItem from './RecipeItem'
import seedRecipes from '../actions/recipes/seed'
import RecipeEditor from './RecipeEditor'

export class RecipesContainer extends PureComponent {
  static propTypes = {
    recipes: PropTypes.array.isRequired,
    seedRecipes: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.seedRecipes()
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
          { this.props.recipes.map(this.renderRecipe.bind(this)) }
        </main>

      </div>
    )
  }
}

const mapStateToProps = ({ recipes }) => ({ recipes })

export default connect(mapStateToProps, { seedRecipes })(RecipesContainer)
