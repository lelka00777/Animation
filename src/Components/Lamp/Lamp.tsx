import React, {useState} from 'react';
import s from './Lamp.module.css';

export const Lamp = () => {

    let [lamp, setLamp] = useState(true)

    const onClickHandler = () => {


        setLamp(!lamp ? true : false)
    }


    return (

        <div className={s.js_turnoff_btn}>

            <div className={`${s.lamp_item} ${s.lamp_top}`}></div>
            <div className={`${s.lamp_item} ${s.lamp_middle}`}></div>
            <div onClick={onClickHandler} className={`${s.lamp_item} ${s.lamp_bottom}`}></div>
            {!lamp && <LampOn /> }


        </div>
    );
};


const LampOn = () => {

    return (
        <div className={`${s.lamp_item} ${s.lamp_light}`}>

        </div>

    )


}
