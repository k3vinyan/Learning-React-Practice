import React from 'react'

const Star = ({ selected=false, onClick=f=>f }) =>
    <div className={selected ? "star selected" : "star"} 
        onClick={onClick}
    >
    </div>

const  StarRating = ({totalStar=5, starSelected=0, onRate}) => 
    <div>
        {[...Array(totalStar)].map( (n, i) => 
            <Star key={i} 
                    selected={i<starSelected}
                    onClick={()=> onRate(i + 1)}
            />
        )}
        <p>{starSelected} of {totalStar}</p>
    </div>

export default StarRating


