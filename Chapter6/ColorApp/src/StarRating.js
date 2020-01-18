import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import createClass from 'create-react-class'

import './assets/stylesheets/style.css'


const ColorSelectForm = () =>
    <form>
        <input type="input" placeholder="Color name here..." />
        <input type="color" />
        <input type="submit" value="submit" />
    </form>

 

const Star = ({selected = false, onClick=f=>f}) =>
    <div className={(selected) ? "star selected" : "star"}
        onClick={onClick} >
    
    </div>

Star.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
}

// const StarRating = createClass({
//     display: 'StarRating',
//     propTypes: {
//         totalStars: PropTypes.number
//     },
//     getDefaultProps() {
//         return {
//             totalStars: 5
//         }
//     },
//     getInitialState() {
//         return {
//             starsSelected: 0
//         }
//     },
//     change(starsSelected) {
//         this.setState({starsSelected})
//     },
//     render(){
//         const {totalStars} = this.props
//         const {starsSelected} = this.state
//         return(
//             <div className="star-rating">
//                 {[...Array(totalStars)].map( (n, i) =>
//                     <Star key={i} 
//                         selected={i < starsSelected}
//                         onClick={()=> this.change(i+1)}
//                     />
//                 )}
//             <p>{starsSelected} of {totalStars}</p>
//             </div>
//         )
//     }
// })

//Presentational Component
const StarRating =({starsSelected=0, totalStars=5, onRate=f=>f}) =>
    <div className="star-rating">
        {
            [...Array(totalStars)].map( (n, i) =>
                <Star starsSelected={i < starsSelected} key={i}
                    onClick={ ()=> onRate(i +  1)}
                />
            )
        }
        <p>{starsSelected} of {totalStars}</p>
    </div>


export { StarRating }
// ReactDOM.render(<StarRating />, document.getElementById('app'))