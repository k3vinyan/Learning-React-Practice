import React from 'react'
import StarRating from './StarRating'

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

export { ColorList, AddColorForm }