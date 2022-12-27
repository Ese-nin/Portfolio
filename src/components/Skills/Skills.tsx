import React from 'react';
import s from './Skills.module.scss'
import sContainer from '../../common/styles/Container.module.scss'
import {Skill} from "./Skill/Skill";
import {Title} from "../../common/components/Title/Title";
import reactIcon from '../../accets/img/React.jpg'
import reduxIcon from '../../accets/img/Redux.jpg'
import TSIcon from '../../accets/img/TypeScript.png'

export const Skills = () => {

    return (
        <div className={s.wrapper}>
            <div className={`${sContainer.container} ${s.container}`}>
                <Title name={'Skills'}/>
                <div className={s.skills}>
                    <Skill title={"TypeScript"} imageURL={TSIcon} description={"\n" +
                        "It's very difficult to understand, but it's very easy to use"}/>
                    <Skill title={"React"} imageURL={reactIcon} description={"The best library for SPA"}/>
                    <Skill title={"Redux"} imageURL={reduxIcon} description={"Beautiful manager of my state"}/>
                </div>
            </div>
        </div>
    );
};