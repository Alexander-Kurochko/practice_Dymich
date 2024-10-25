import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledAccordionTitle} from './components/UncontrolledAccordion/Accordion';

function App() {
    return (
        <div className="App">
{/*            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false}/>*/}
            <UncontrolledAccordionTitle titleValue={'Menu'} />
            <UncontrolledAccordionTitle titleValue={'Users'}/>

            <Rating /*{value={1}}*//>
            <Rating /*{value={1}}*//>
{/*            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}

            <OnOff /*{on={true}}*//>
            <OnOff /*{on={false}}*//>
            <OnOff /*{on={true}}*//>
        </div>
    );
}

export default App;

type AppTitlePropsType = {
    title: string
}

function AppTitle(props: AppTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}

