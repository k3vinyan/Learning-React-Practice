import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { v4 } from 'uuid'
import { StarRating } from './StarRating.js'


const AddColorForm = ({ onNewColor=f=>f} ) => {
    let _title, _color
    const sumbit = e => {
        e.preventDefault()
        onNewColor(_title.value, _color.value)
        _title.value = ''
        _color.value = '#000000'
        _title.focus()
    }
    return(
        <form onSubmit={sumbit}>
            <input ref={input => _title = input}
                type="text"
                placeholder="color title...." required     
            />
            <input type="color" ref={input => _color = input} />
            <button>Add</button>
        </form>
    )
}


const ColorList = ({ colors=[] }) => 
    <section className="color-list">
        {(colors.length === 0) ?
            <p>No Colors Listed.  (Add a Color)</p> :
            colors.map( color => 
                <Color key={color.id} {...color} />
            )
        }   
    </section>

const Color = ({ title, color, rating= 0}) =>
    <section>
        <h1>{title}</h1>
        <div className="color"
            style={{ backgroundColor: color }}>
        </div>
        <div>
            <StarRating starsSelected={rating} />
        </div>
    </section>



class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            colors: []
        }
        this.addColor = this.addColor.bind(this)
        this.rateColor = this.rateColor.bind(this)
        this.removeColor = this.removeColor(this)
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
        const colors = this.state.colors.map(color =>
            (color.id !== id) ?
                color :
                {
                    ...color,
                    rating
                }
        )
        console.log(colors)
        this.setState({colors})
    }

    removeColor(id) {
        const colors = this.state.colors.filter(
            color => color.id !== id
        )
        this.setState({colors})
    }

    render() {
       const { addColor, rateColor, removeColor } = this
       console.log(rateColor)
       const { colors } = this.state
       return (
           <div className="app">
               <AddColorForm onNewColor={ addColor } />
               <ColorList   colors={colors}
                            onRate={rateColor}
                            onRemove={removeColor}
               />
           </div>
       )
    }
}




ReactDOM.render(<App />, document.getElementById('app'))