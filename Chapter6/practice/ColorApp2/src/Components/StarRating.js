import React from 'react'

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

export { StarRating }