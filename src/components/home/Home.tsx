import React from 'react';
import s from './Home.module.css'
import sContainer from '../../common/styles/Container.module.css'

export const Home = () => {
    return (
        <div className={s.homeWrapper}>
            <div className={sContainer.container}>
                <div className={s.description}>
                    <span>Hi!</span>
                    <h1>My name is Vasya Pupkin.</h1>
                    <span>I'm a Front-End developer with 20 years of experience</span>
                </div>
                <div className={s.image}></div>
            </div>
        </div>
    );
};

