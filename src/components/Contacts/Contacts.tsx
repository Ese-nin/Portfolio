import React from 'react';
import s from './Contacts.module.scss'
import sContainer from '../../common/styles/Container.module.css'
import {Title} from "../../common/components/Title/Title";

export const Contacts = () => {
    return (
        <div className={s.wrapper}>
            <div className={`${sContainer.container} ${s.container}`}>
                <Title name={'Contacts'}/>
                <form className={s.form}>
                    <input type='text'/>
                    <input type='text'/>
                    <textarea className={s.textarea}/>
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    );
};