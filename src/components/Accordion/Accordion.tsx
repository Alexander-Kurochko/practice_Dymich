import React from 'react';
import {string} from 'prop-types';

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: (value: boolean) => void
    items: ItemType[]
    onClick: (value: any) => void
}

export function Accordion({titleValue, collapsed, onChange, items, onClick}: AccordionPropsType) {
    return <div>
        <AccordionTitle title={titleValue} onChange={() => onChange(!collapsed)}/>
        {!collapsed && <AccordionBody items={items} onClick={onClick}/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle({title, onChange}: AccordionTitlePropsType) {
    return <h3 onClick={(event) => onChange()}>{title}</h3>
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody({items, onClick}: AccordionBodyPropsType) {
    return (
        <ul>
            {items.map((i, index) =>
                <li key={index} onClick={() => {onClick(i.value)}}>{i.title}</li>
            )}
        </ul>
    )
}