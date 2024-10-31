import React, {useState} from 'react';

type RatingPropsType = {
    value?: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrollRating({value}: RatingPropsType) {

    let [selectedNumber, setSelectedNumber] = useState(0)
    console.log(selectedNumber)

    return (
        <div>
            <Star selected={1 <= selectedNumber} setSelectedNumber={() => setSelectedNumber(1)}/>
            <Star selected={2 <= selectedNumber} setSelectedNumber={() => setSelectedNumber(2)}/>
            <Star selected={3 <= selectedNumber} setSelectedNumber={() => setSelectedNumber(3)}/>
            <Star selected={4 <= selectedNumber} setSelectedNumber={() => setSelectedNumber(4)}/>
            <Star selected={5 <= selectedNumber} setSelectedNumber={() => setSelectedNumber(5)}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setSelectedNumber: () => void
}

function Star({selected, setSelectedNumber}: StarPropsType) {
    /*return selected ? <span><b>star</b> </span> : <span>star </span>*/
    return <span onClick={setSelectedNumber}>
        { selected? <b>star </b> : 'star '}
    </span>
}
