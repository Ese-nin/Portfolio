import React from 'react';
import s from './Skills.module.css'
import sContainer from '../../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={s.wrapper}>
            <div className={`${sContainer.container} ${s.container}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={"Skill-1"} description={"I will describe my skills later"}/>
                    <Skill title={"Skill-2"} description={"I will describe my skills later"}/>
                    <Skill title={"Skill-3"} description={"I will describe my skills later"}/>
                </div>
            </div>
        </div>
    );
};