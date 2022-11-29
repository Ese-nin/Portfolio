import React from 'react';
import s from './Footer.module.scss'
import {Icon} from "./Icon/Icon";
import { faVk } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    return (
        <div className={s.footer}>
            <span>Sergey Niskovskikh</span>
            <div className={s.icons}>
                <Icon icon={faVk}/>
                <Icon icon={faDiscord}/>
                <Icon icon={faInstagram}/>
                <Icon icon={faTelegramPlane}/>
            </div>
            <p>(c)2122 All right reserved</p>
        </div>
    );
};