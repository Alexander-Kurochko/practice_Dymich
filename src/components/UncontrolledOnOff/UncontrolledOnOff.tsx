import {useState} from 'react';

type Props = {
    onChange: (on: boolean) => void
};

export const UncontrolledOnOff = ({onChange}: Props) => {

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

    const onClicked = () => {
        setOn(true)
        onChange(true)
    }

    const offClicked = () => {
        setOn(false)
        onChange(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
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
