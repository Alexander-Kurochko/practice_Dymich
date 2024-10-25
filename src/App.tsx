import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {
    UncontrolledAccordion
} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrollRating} from './components/UncontrolledRating/UncontrolledRating';

function App() {
    return (
        <div className="App">
            <Accordion titleValue={'Menu'} collapsed={false}/>
            <Rating value={1}/>

            <OnOff /*{on={true}}*//>
            <OnOff /*{on={false}}*//>

            <UncontrolledAccordion titleValue={'Users'} />
            <UncontrollRating />
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

