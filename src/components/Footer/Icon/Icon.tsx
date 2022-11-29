import React from 'react';
import s from './Icon.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

type IconPropsType = {
    icon: IconProp
}

export const Icon = (props: IconPropsType) => {
    return (
        <FontAwesomeIcon className={s.icon} icon={props.icon}/>
    );
};