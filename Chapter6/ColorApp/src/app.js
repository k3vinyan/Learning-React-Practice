import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import StarRating from './StarRating'

const ColorList = ({ colors=[] }) => 
    <section className="color-list">
        {(colors.length === 0) ?
            <p>No Colors Listed.  (Add a Color)</p> :
            colors.map( color => 
                <Color key={color.id} {...color} />
            )
        }   
    </section>

Color = ({ title, color, rating= 0}) =>
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
    }

    render() {
        const { colors } = this.state
        console.log(this.state)
        return(
            <main>
                {/* <AddColorForm /> */}
                <ColorList colors={colors} />
            </main>
        )
    }
}




ReactDOM.render(<App />, document.getElementById('app'))