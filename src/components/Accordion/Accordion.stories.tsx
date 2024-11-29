import type {Meta, StoryObj} from '@storybook/react'
import {Accordion} from './Accordion'
import React, {memo, useState} from 'react';
import {action} from '@storybook/addon-actions'

export default {
    component: Accordion
}

// const meta: Meta<typeof Accordion> = {
//     component: Accordion
// }
//
// export default meta
//
// type Story = StoryObj<typeof Accordion>;
//
// export const FirstStory: Story = {
//     args: {
//         titleValue: "hello all",
//         collapsed: true,
//         onChange: () => {}
//     },
// }

const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')

export const CollapsedAccordion = () => {
    return <Accordion titleValue={'Collapsed Accordion'}
                      collapsed={true}
                      onChange={callback}
                      items={[]}
                      onClick={onClickCallback}
    />
}
export const CollapsedAccordionMemo = memo(CollapsedAccordion)

export const OpenedAccordion = () => {
    return <Accordion titleValue={'Open Accordion'}
                      collapsed={false}
                      onChange={callback}
                      items={[
                          {title: 'Sasha', value: 1},
                          {title: 'Kristina', value: 2},
                          {title: 'Leonid', value: 3}
                      ]}
                      onClick={onClickCallback}/>
}
export const OpenedAccordionMemo = React.memo(OpenedAccordion)

export const AccordionDemo = () => {

    const [collapsed, setCollapsed] = useState(false)

    return <Accordion titleValue={'Accordion'}
                      collapsed={collapsed}
                      onChange={() => {
                          setCollapsed(!collapsed)
                      }}
                      items={[
                          {title: 'Sasha', value: 1},
                          {title: 'Kristina', value: 2},
                          {title: 'Leonid', value: 3}
                      ]}
                      onClick={onClickCallback}/>
}
export const AccordionDemoMemo = memo(AccordionDemo)