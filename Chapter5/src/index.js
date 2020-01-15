import React from 'react'
import ReactDOM from 'react-dom'

import { Recipes } from '../data/recipes.json.js'

const recipe = (props) => 
    <article>
        <section>
            <img src={props.image} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>
        </section>
        <section>
            <h2>ingredient</h2>
            <ul>
                {props.ingredient.map( (ingred, i) => 
                    <li key={i}>
                        {ingred.amount} {ingred.unit} {ingred.name}
                    </li>
                )}
            </ul>
        </section>
    </article>


const Menu = (props) =>
    <main>
        <header>
            <h1>{props.title}</h1>
        </header>
        <div className="recipes">

        </div>
    </main>

const test = recipe(Recipes.recipe[0])
console.log(test)

ReactDOM.render(test, document.getElementById('app'))









































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