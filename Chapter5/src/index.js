import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'

import { Recipes } from '../data/recipes.json.js'

//need to fix broken image!!!!

const Recipe = function({image, name, description, ingredient, step}) {
    return (
        <article className="article-recipe" id={name}>
            <section className="section-a-recipe">
                <img src={image} />
            </section>
            <section className="section-b-recipe">
                <section>
                    <div className="section-b-recipe-info">
                        <h2>{name}</h2>
                        <p>{description}</p>
                    </div>
                    
                    <h2>Ingredient</h2>
                    <ul className="list-ingredient">
                        {ingredient.map( (ingredient, i) => 
                            <li key={i}>
                                <p>{ingredient.amount} {ingredient.unit} {ingredient.name}</p>
                            </li>
                        )}
                    </ul>
                </section>
                <section>
                    <h2>Instructions</h2>
                    <ol className="list-step">
                        {step.map( (step, i) => 
                                <li key={i}>
                                    <p>{step.description}</p>
                                </li>
                        )}
                    </ol>
                </section>       
            </section>
        </article>
    )
}
    

const Menu = ({title, recipe}) =>
    <main className="main-menu">
        {/* <header>
            <h1>{title}</h1>
        </header> */}
        <div className="container-recipe">
            {recipe.recipe.map( (recipe, i) =>
                <Recipe key={i}
                    {...recipe}
                />
            )}
        </div>
    </main>

const myMenu = <Menu title="Kevin's Delicious Food" recipe={Recipes} />
ReactDOM.render(myMenu, document.getElementById('app'))










































// const Recipe = (props) =>
//     <div>
//         <p>{props.name}</p>
//         {props.ingredients.map( (ingredient, i) =>
//             <div key={i}>
//                 <p>{ingredient.name}</p>
//                 <p>{ingredient.amount}</p>
//                 <p>{ingredient.measurement}</p>
//             </div>
//         )}
//     </div>

// const Menu = ({ title, recipes }) => 
//     <article>
//         <header>
//             <h1>{title}</h1>
//             <div className="recipes">
//                {recipes.map( (recipe, i) =>
//                 <Recipe key={i} {...recipe} />
//                )}
//             </div>
//         </header>
//     </article>


// ReactDOM.render(
//     <Menu title="Delicious Recipes" />,
//     document.getElementById('app')
//)