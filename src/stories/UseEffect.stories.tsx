import {useEffect, useState} from 'react';

export default {
    title: 'useEffect demo'
}

export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('SetTimeoutExample')

    useEffect(() => {
        setInterval(() => {
            setCounter(prevState => prevState + 1)
        }, 1000)
    }, []);

    return <>
        {/*Hello, counter: {counter}*/}
    </>
}