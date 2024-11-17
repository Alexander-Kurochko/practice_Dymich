import {UncontrolledOnOff} from './UncontrolledOnOff';
import {useState} from 'react';
import {action} from '@storybook/addon-actions';

export default {
    component: UncontrolledOnOff
}

const onChange = action('Change active')

export const defaultOn = () => {
    return <UncontrolledOnOff defaulOn={true} onChange={onChange}/>
}

export const defaultOff = () => {
    return <UncontrolledOnOff defaulOn={false} onChange={onChange}/>
}