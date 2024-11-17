import {OnOff} from './OnOff';
import {action} from '@storybook/addon-actions';
import {useState} from 'react';

export default {
    component: OnOff
}

const change = action('onChange')

export const OnIndication = () => {
    return <OnOff
        on={true}
        onChange={change}
    />
}

export const OffIndication = () => {
    return <OnOff
        on={false}
        onChange={change}
    />
}

export const OnOffChange = () => {
    const [indication, setIndication] = useState(false)
    return <OnOff
        on={indication}
        onChange={setIndication}
    />
}