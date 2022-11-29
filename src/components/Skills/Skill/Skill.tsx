import React from 'react';
import s from './Skill.module.scss'

type SkillPropsType = {
    title: string
    description: string
    imageURL: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skillWrapper}>
            <div className={s.iconWrapper}>
                <img className={s.icon} src={props.imageURL} alt='icon'/>
            </div>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
};

