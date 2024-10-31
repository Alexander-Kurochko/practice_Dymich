import {useState} from 'react';

type Props = {
/*    on: boolean*/
};

export const UncontrolledOnOff = (/*{on}: Props*/) => {

    let [on, setOn] = useState(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'greenyellow' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'orangered'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '8px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: on ? 'greenyellow' : 'orangered'
    }


    return (
        <div>
            <div style={onStyle} onClick={ () => { setOn(true)} }>On</div>
            <div style={offStyle} onClick={ () => { setOn(false)} }>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

/*const [isActive, setIsActive] = useState(props.active)

const handleOnClick = () => {
    setIsActive(true)
}
const handleOffClick = () => {
    setIsActive(false)
}

return (
    <div>
        <button onClick={() => handleOnClick}>On</button>
        <button onClick={() => handleOffClick}>Off</button>
        <span style={circleSpan}></span>
    </div>
);
}
;*/
