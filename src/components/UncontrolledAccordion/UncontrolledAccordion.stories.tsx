import {UncontrolledAccordion} from './UncontrolledAccordion';
import {action} from '@storybook/addon-actions';

export default {
    component: UncontrolledAccordion
}

export const ModeChanging = () => {
    return <UncontrolledAccordion titleValue={'Accordion'}/>
}