import React from 'react';
import s from './Projects.module.scss'
import sContainer from '../../common/styles/Container.module.css'
import {Project} from './Project/Project';
import {Title} from '../../common/components/Title/Title';
import socialNetImage from '../../accets/img/SocialNetwork.jpeg';
import todoImage from '../../accets/img/TodoLisi.jpg';

export const Projects = () => {

    const social = {
        backgroundImage: `url(${socialNetImage})`,
    };
    const todo = {
        backgroundImage: `url(${todoImage})`,
    };

    return (
        <div className={s.wrapper}>
            <div className={`${sContainer.container} ${s.container}`}>
                <Title name={'My projects'}/>
                <div className={s.projects}>
                    <Project style={todo} title='Todo-List' description='What to do?'/>
                    <Project style={social} title='Social Network' description='Find new friends'/>
                </div>
            </div>
        </div>
    );
};