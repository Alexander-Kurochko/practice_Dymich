import {Rating, RatingValueType} from './Rating';
import {action} from '@storybook/addon-actions';
import {useState} from 'react';

export default {
    components: Rating
}

const click = action('OnClick change value')

export const ratingOne = () => {
    return <Rating
        value={1}
        onClick={click} />
}
export const ratingTwo = () => {
    return <Rating
        value={2}
        onClick={click} />
}
export const ratingThree = () => {
    return <Rating
        value={3}
        onClick={click} />
}
export const ratingFour = () => {
    return <Rating
        value={4}
        onClick={click} />
}
export const ratingFive = () => {
    return <Rating
        value={5}
        onClick={click} />
}

export const ratingChange = () => {

    const [value, setValue] = useState<RatingValueType>(3)

    return <Rating
        value={value}
        onClick={setValue}/>
}