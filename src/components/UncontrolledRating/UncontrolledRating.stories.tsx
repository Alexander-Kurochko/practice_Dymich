import {UncontrollRating} from './UncontrolledRating';
import {action} from '@storybook/addon-actions';

export default {
    component: UncontrollRating
}

export const UncontrolledRating = () => {
    return <UncontrollRating value={2}/>
}