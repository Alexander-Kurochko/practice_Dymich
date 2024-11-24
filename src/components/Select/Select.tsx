import styles from './Select.module.css'
import {useState} from 'react';

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select({value, onChange, items}: SelectPropsType) {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(value)

    const selectedItem = items.find(i => i.value === value)
    const hoveredItem = items.find(i => i.value === hoveredElementValue)

    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        onChange(value)
        toggleItems()
    }

    return (
        <div>
            <div className={styles.select} tabIndex={0} onKeyDown={() => console.log('asd')}>
                <span className={styles.main} onClick={toggleItems}>
                    {selectedItem && selectedItem.title}
                </span>
                {
                    active &&
                    <div className={styles.items}>
                        {items.map(i =>
                            <div key={i.value}
                                 onClick={() => onItemClick(i.value)}
                                 className={styles.item + ' ' + (hoveredItem === i ? styles.selected : '')}
                                 onMouseEnter={() => {setHoveredElementValue(i.value)}}
                            >
                                {i.title}
                            </div>)}
                    </div>
                }
            </div>
        </div>
    )
}