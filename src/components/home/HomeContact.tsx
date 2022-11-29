import React from 'react';
import s from './Home.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

type HomeContactPropsType = {
    icon: IconProp
    contact: string
}

export const HomeContact = (props: HomeContactPropsType) => {
    return (
        <div>
            <FontAwesomeIcon className={s.contactIcon} icon={props.icon}/>
            <span> {props.contact}</span>
        </div>
    );
};