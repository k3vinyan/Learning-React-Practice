import React, { Component } from 'react'
import ReactDOM from 'react-dom'
//import { StarRating } from './Components/StarRating'
import {v4} from 'uuid'

import './stylesheets/style.css'


const Star = ({selected=false, onClick=f=>f}) => 
    <div className={selected ? 'star selected' : 'star'} onClick={onClick}></div> 


const StarRating = ({totalStars=5, starSelected=0, onRate=f=>f}) =>
    <div className="star-rating">
        {[...Array(totalStars)].map( (n, i) => 
            <Star 
                key={i} 
                selected={i< starSelected}
                onClick={() => onRate(i + 1)}
            />
        )}
        <p className="star-para">{starSelected} of {totalStars}</p>
    </div>


const AddColorForm = ({onNewColor=f=>f}) => {

    let _title, _color

    const submit = e => {
        e.preventDefault()
        onNewColor(_title.value, _color.value)
        _title.value = ''
        _color.value = '#000000'
        _title.focus()
    }

    return (
        <form className="add-color" onSubmit={submit}>
            <input ref={input => _title = input}
                   type="text"
                   placeholder="color title..." required/>
            <input ref={input => _color = input}
                   type="color" required/>
            <button>ADD</button>
        </form>
    )

}

    
const Color = ({color, title="untitled", totalStars = 5, rating = 0, onRate=f=>f}) =>
    <section className="color">
        <h1>{title}</h1>
        <div style={{ background: color, height: '100px'}}>
        </div>
        <StarRating totalStars={totalStars} starSelected={rating} onRate={onRate} />
    </section>


const ColorList = ({colors = [], onRate=f=>f}) => {
    return (
        <section className="color-list">
            {colors.map( color => 
                <Color key={color.id} {...color} onRate={(rating) => onRate(color.id, rating)} />
        )}
        </section>
    )
}
   
    

    
   

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            colors: []
        }

        this.addColor = this.addColor.bind(this)
        this.rateColor = this.rateColor.bind(this)
    }

    addColor(title, color) {
        const colors = [
            ...this.state.colors,
            {
                id: v4(),
                title,
                color,
                rating: 0 
            }
        ]

        this.setState({colors})
    }

    rateColor(id, rating) {
      
        const colors = this.state.colors.map(color => {
            if(color.id === id) {
               color.rating = rating
            }
            return color;
        })
        console.log(colors)
        this.setState({colors})
    }

    render() {
        const { addColor, rateColor } = this
        const { colors } = this.state

        return (
            <div>
                <AddColorForm onNewColor={addColor} />
                <ColorList  
                    colors={colors}
                    onRate={rateColor}
                />
            </div>
        )
    }
       
}


ReactDOM.render(<App />, document.getElementById('app'))