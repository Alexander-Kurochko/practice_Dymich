import React, {useState} from 'react';

type RatingPropsType = {
    value?: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating({value}: RatingPropsType) {

    let [selectedNumber, setSelectedNumber] = useState(0)
    console.log(selectedNumber)

    return (
        <div>
            <Star selected={1 <= selectedNumber}/>
            <button onClick={() => {
                setSelectedNumber(1)
            }}>1
            </button>
            <Star selected={2 <= selectedNumber}/>
            <button onClick={() => {
                setSelectedNumber(2)
            }}>2
            </button>
            <Star selected={3 <= selectedNumber}/>
            <button onClick={() => {
                setSelectedNumber(3)
            }}>3
            </button>
            <Star selected={4 <= selectedNumber}/>
            <button onClick={() => {
                setSelectedNumber(4)
            }}>4
            </button>
            <Star selected={5 <= selectedNumber}/>
            <button onClick={() => {
                setSelectedNumber(5)
            }}>5
            </button>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star({selected}: StarPropsType) {
    if (selected === true) {
        return <span><b>star</b> </span>
    } else {
        return <span>star </span>
    }

}