import { friedChickenRecipe } from './recipes/friedChicken.js'

//https://www.foodnetwork.com/recipes/fried-chicken-recipe10-3381583

const headerH2 = (title) => 
    React.createElement('h2', {className: title + '-header2'}, title)

const section = (title, list) =>
    React.createElement('div', {className: title.toLowerCase() + '-section'},
        headerH2(title),
        list
    )

const wrapper = (...elements) => 
    React.createElement('div', {className: 'wrapper'}, 
        elements.map( (el) => 
            el
        ) 
    )


    
const recipeImage = ({image}) =>
    React.createElement('img', {className: 'recipe-image', src: image}, null)

const recipeIngredients = ({ingredients}) => 
    React.createElement('ul', {className: 'recipe-list-ingredients'}, 
        ingredients.map( (ingredient, i) => 
            React.createElement('li', { className: 'ingredient-item', key: i }, ingredient)
        )
    )

const recipeName = ({name}) =>
    React.createElement('h1', {className: 'recipe-name'}, name)

const recipeSteps = ({steps}) =>
    React.createElement('ol', {className: 'recipe-list-step'}, 
        steps.map( (step, i) => 
            React.createElement('li', { className: 'step-item', key: i}, step)
        )
    )
const RecipeComponent = (recipe) => 
    React.createElement('div', {className: 'recipe-container'}, 
        recipeImage(recipe),
        recipeName(recipe),
        wrapper(
            section('Ingredients', recipeIngredients(recipe)),
            section('Steps', recipeSteps(recipe))
        )
        
    )

const chickenComponent = RecipeComponent(friedChickenRecipe)

ReactDOM.render(chickenComponent, document.getElementById('app'))