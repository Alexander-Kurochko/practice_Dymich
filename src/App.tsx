import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrollRating} from './components/UncontrolledRating/UncontrolledRating';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [onOffActive, setOnOffActive] = useState<boolean>(false)

    return (
        <div className="App">
            <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>

            <OnOff active={onOffActive} onClick={setOnOffActive}/*{on={true}}*//>
            <OnOff active={onOffActive} onClick={setOnOffActive}/*{on={false}}*//>

            <UncontrolledAccordion titleValue={'Users'} />
            <UncontrollRating />

            <UncontrolledOnOff /*{on={true}}*//>
            <UncontrolledOnOff /*{on={false}}*//>
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

