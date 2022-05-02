import React, { FC } from 'react'
import './AnswerButton.scss'

export interface ButtonProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
    children: React.ReactNode
}
const AnswerButton: FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <button className='answer_btn' onClick={onClick}>{children}</button>
    )
}

export default AnswerButton