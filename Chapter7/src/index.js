import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import { v4 } from 'uuid'
import './style.css'


const Star = ({ selected=false, onClick=f=>f }) =>
    <div className={selected ? "star selected" : "star"} 
        onClick={onClick}
    >
    </div>

const  StarRating = ({totalStar=5, starSelected=0, onRate=f=>f}) => {

    return(
        <div>
            {[...Array(totalStar)].map( (n, i) => 
                <Star key={i} 
                      selected={i<starSelected}
                      onClick={()=> onRate(i + 1)}
                />
            )}
            <p>{starSelected} of {totalStar}</p>
        </div>)
}

const Color = ({ title, color, rating=0, onRate }) =>
    <section>
        <h1>{title}</h1>
        <div className="color" style={{background: color, width: '100px', height: '100px'}}>
        </div>
        <div>
            <StarRating starSelected={rating} onRate={onRate} />
        </div>
    </section>

const ColorList = ({ colors=[], onRate=f=>f }) =>
    (colors.length === 0) ?
        <p>No Color Added</p>    
    :
        <div>
            {colors.map( (color) =>
                <Color key={color.id} {...color} onRate={ (rating) => onRate(color.id, rating) }/>
            )}
        </div>
       
    
const AddColorForm = ({onNewColor=f=>f}) => {
   let _title, _color
    const onSubmit = e => {
        e.preventDefault()
        onNewColor(_title.value, _color.value)
        _title.focus()
    }

    return(
        <form onSubmit={onSubmit} >
            <input type="text" ref={input => _title = input} placeholder="color here..." />
            <input type="color" ref={input => _color = input} /> 
            <button>Add</button>
        </form>
    )
}
    


class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            colors: []
        }

        this.rateColor = this.rateColor.bind(this)
        this.addColor = this.addColor.bind(this)
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
        console.log("id: ", id)
        console.log("rating: ", rating)
        const { colors } = this.state
        console.log(colors)
        colors.map( (color) =>
            (color.id === id) ? color.rating = rating : null
        )
        
        this.setState({colors})
    }

    render() {
        const { rateColor, addColor } = this
        const { colors } = this.state
        

        return(
            <div>
                <AddColorForm onNewColor={addColor} />
                <ColorList colors={colors} onRate={rateColor} />
            </div>
            
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))