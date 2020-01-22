import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import { v4 } from 'uuid'
import { AddColorForm, ColorList } from './Components/Color'

import './style.css'

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
        const { colors } = this.state
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