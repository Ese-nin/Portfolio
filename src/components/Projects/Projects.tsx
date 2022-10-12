import React from 'react';
import s from './Projects.module.css'
import sContainer from '../../common/styles/Container.module.css'
import {Project} from "./Project/Project";

export const Projects = () => {
    return (
        <div className={s.wrapper}>
            <div className={`${sContainer.container} ${s.container}`}>
                <h2 className={s.title}>My projects</h2>
                <div className={s.projects}>
                    <Project title='Todo-List' description='What to do?'/>
                    <Project title='Network' description='Find new friends'/>
                </div>
            </div>
        </div>
    );
};