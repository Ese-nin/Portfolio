import React from 'react';
import s from './Project.module.css'

type ProjectPropsType = {
    title: string
    description: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.wrapper}>
            <div className={s.preview}>
                <button>View</button>
            </div>
            <span className={s.title}>{props.title}</span>
            <span className={s.description}>{props.description}</span>
        </div>
    );
};