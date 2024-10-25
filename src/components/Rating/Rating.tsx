import React, {useState} from 'react';

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating({value}: RatingPropsType) {

    return (
        <div>
            <Star selected={value >= 1}/>
            <Star selected={value >= 2}/>
            <Star selected={value >= 3}/>
            <Star selected={value >= 4}/>
            <Star selected={value >= 5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star({selected}: StarPropsType) {
    return selected ? <span><b>star</b> </span> : <span>star </span>
}
