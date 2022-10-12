import React from 'react';
import s from './Contacts.module.css'
import sContainer from '../../common/styles/Container.module.css'

export const Contacts = () => {
    return (
        <div className={s.wrapper}>
            <div className={`${sContainer.container} ${s.container}`}>
                <h2 className={s.title}>Contacts</h2>
                <form className={s.form}>
                    <input />
                    <input />
                    <textarea/>
                </form>
                <button>Send</button>
            </div>
        </div>
    );
};