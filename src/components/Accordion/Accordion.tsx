import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: (value: boolean) => void
}

export function Accordion({titleValue, collapsed, onChange}: AccordionPropsType) {
        return <div>
            <AccordionTitle title={titleValue} onChange={() => onChange(!collapsed)}/>
            { !collapsed && <AccordionBody/>}
            </div>
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle({title, onChange}: AccordionTitlePropsType) {
    return <h3 onClick={(event) => onChange()}>{title}</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}