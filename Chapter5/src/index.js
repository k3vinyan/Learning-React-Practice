import React from 'react'
import ReactDOM from 'react-dom'

import { Recipes } from '../data/recipes.json.js'

const Recipe = ({image, name, description, ingredient, step}) => 
    <article>
        <section>
            <img src={image} />
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </section>
        <section>
            <div>
                <h2>Ingredient</h2>
                <ul>
                    {ingredient.map( (ingredient, i) => 
                        <li key={i}>
                            <p>{ingredient.amount} {ingredient.unit} {ingredient.name}</p>
                        </li>
                    )}
                </ul>
            </div>
            <div>
               <h2>Instruction</h2>
               <ol>
                   {step.map( (step, i) => 
                        <li key={i}>
                            <p>{step.description}</p>
                        </li>
                   )}
               </ol>
            </div>
        </section>
    </article>


const Menu = ({title, recipe}) =>
    <main>
        <header>
            <h1>{title}</h1>
        </header>
        <div className="recipes">
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