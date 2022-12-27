import React from 'react';
import s from './Home.module.scss'
import sContainer from '../../common/styles/Container.module.scss'
import mainPhoto from '../../accets/img/MainPhoto.jpg'
import {faMailForward, faPhone} from '@fortawesome/free-solid-svg-icons'
import {HomeContact} from "./HomeContact";

export const Home = () => {
    return (
        <div className={s.homeWrapper}>
            <div className={`${sContainer.container} ${s.container}`}>
                <div className={s.image}>
                    <img src={mainPhoto} alt="mainPhoto"/>
                </div>
                <div className={s.description}>
                    <div>
                        <h1 className={s.homeTitle}>
                            Hi, I'm <span className={s.name}>Sergey</span>
                        </h1>
                        <span>I'm a Front-End developer with 0 years of experience</span>
                    </div>
                    <div className={s.homeContacts}>
                        <HomeContact icon={faMailForward} contact={'Lorem ipsum@gmail.com'}/>
                        <HomeContact icon={faPhone} contact={'+1 (23) 456 789'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

