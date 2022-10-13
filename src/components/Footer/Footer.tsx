import React from 'react';
import s from './Footer.module.css'
import {Icon} from "./Icon/Icon";

export const Footer = () => {
    return (
        <div className={s.footer}>
            <span>Vasya Pupkin</span>
            <div className={s.icons}>
                <Icon/>
                <Icon/>
                <Icon/>
                <Icon/>
            </div>
            <p>(c)2122 All right reserved</p>
        </div>
    );
};