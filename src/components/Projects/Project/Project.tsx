import React from 'react';
import s from './Project.module.scss'

type ProjectPropsType = {
    title: string
    description: string
    style: { backgroundImage: string }
}

export const Project: React.FC<ProjectPropsType> = ({title, description, style}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.preview} style={style}>
                <button className={s.viewBtn}>View</button>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.projectTitle}>{title}</h3>
                <p className={s.description}>{description}</p>
            </div>
        </div>
    );
};