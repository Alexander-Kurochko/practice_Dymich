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
    const [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className="App">
            <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} onChange={setAccordionCollapsed}
            items={[{title: 'hi', value: 1}, {title: 'hello', value: 2}]}
                       onClick={() => {}}
            />
            <Rating value={ratingValue} onClick={setRatingValue}/>

            <OnOff on={switchOn} onChange={setSwitchOn}/>

            <UncontrolledAccordion titleValue={'Users'} />
            <UncontrollRating />

            <UncontrolledOnOff onChange={setSwitchOn}/*{on={true}}*//>
            <UncontrolledOnOff onChange={setSwitchOn}/*{on={false}}*//>
            {switchOn.toString()}
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

