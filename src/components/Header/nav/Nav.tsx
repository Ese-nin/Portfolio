import React from 'react';
import s from './Nav.module.scss'

export const Nav = () => {
    return (
        <div className={s.nav}>
            <a href="src/components/Header/nav/Nav">Home</a>
            <a href="src/components/Header/nav/Nav">Skills</a>
            <a href="src/components/Header/nav/Nav">Projects</a>
            <a href="src/components/Header/nav/Nav">Contacts</a>
        </div>
    );
};