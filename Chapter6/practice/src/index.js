import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import createClass from 'create-react-class'
import { Component } from 'react'


const logColor = (title, color) => 
    alert(`New Color: ${title} | ${color}`)



// class AddColor extends Component {
//     constructor(props) {
//         super(props)
//         this.submit = this.submit.bind(this)
//     }

//     submit(e) {
//         const { _title, _color } = this.refs
//         e.preventDefault()
//         console.log(this.props)
//         this.props.onNewColor(_title.value, _color.value)
//         _title.value = ''
//         _color.vlaue = '#000000'
//         _title.focus()
//     }
//     render() {
//         return(
//             <form onSubmit={this.submit}>
//                 <input  ref="_title"
//                         type="text"
//                         placeholder="color title...." required />
//                 <input  ref="_color"
//                         type="color" required />
//                 <button>ADD</button>
//             </form>
//         )
//     }
// }

//{props}
const AddColorForm = ({onNewColor}) => {
    let _title, _color

    const submit = e => {
        e.preventDefault()
        console.log(_title)
        console.log(_color)
        onNewColor(_title.value, _color.value)
        _title.value = ''
        _color.value = '#000000'
        _title.focus()
    }

    return (
        <form onSubmit={submit}>
            <input  ref={input => _title = input}
                    type="text"
                    placeholder="color title..." required />
            <input  ref={input => _color = input}
                    type="color" required />
                <button>ADD</button>
        </form>
    )
}


const Star = ({ selected=false, onClick=f=>f }) => 
    <div className={ selected ? "star selected" : "star"}
        onClick={onClick} >
    </div>

Star.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
}

const StarRating = createClass({
    displayName: 'StarRating',
    propTypes: {
        totalStars: PropTypes.number
    },
    getDefaultProps() {
        return {
            totalStars: 5
        }
    },
    getInitialState() {
        return {
            starsSelected: 0
        }
    },
    change(starsSelected) {
        this.setState({starsSelected})
    },
    render() {
        const { totalStars } = this.props
        const { starsSelected } = this.state
        
        return (
            <div className = "star-rating">
                {[...Array(totalStars)].map( (n, i) =>
                    <Star key={i}
                          selected={i < starsSelected}
                          onClick={ () => this.change(i + 1)}
                    />
                )}
                <p>{starsSelected} of {totalStars} stars</p>
            </div>
        )
    }
})

class StarRating2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            starsSelected: 0
        }
        this.change = this.change.bind(this)
    }

    change(starsSelected) {
        this.setState({starsSelected})
    }

    render() {
        const {totalStars} = this.props
        const {starsSelected} = this.state
        return(
            <div className="star-rating">
                {
                    [...Array(totalStars)].map( (n, i) =>
                        <Star key={i}
                                selected = { i < starsSelected }
                                onClick = { () => this.change( i + 1 )}
                        />
                    )
                }
                <p>{starsSelected} of {totalStars} stars</p>
            </div>
        )
    }
}

StarRating2.propTypes = {
    totalStars: PropTypes.number
}

StarRating2.defaultProps = {
    totalStars: 5
}


 ReactDOM.render(<StarRating2 />, document.getElementById('app'))