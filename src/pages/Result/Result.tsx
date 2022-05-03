import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../redux/store'
import './Results.scss'

const Result: FC = () => {
    const { totalScore, totalTime } = useSelector((state: RootState) => state.quiz)

    let min = Math.floor(totalTime / 60);
    let sec = totalTime - min * 60;

    return (
        <>
            <div className="results">
                <div className="results__body">
                    <div className="results__text">
                        <p className="results__sentence">Results:</p>
                        <p className="results__sentence">correct answers: {totalScore}</p>
                        <p className="results__sentence">total time: {min} min {sec} sec</p>
                    </div>
                </div>
                <Link to="/">
                    <button className='results__btn'>Back to home</button>
                </Link>

                <a className='contact__btn' target="_blank" href="https://t.me/Petr_site">
                    contact with me
                </a>
            </div>
        </>
    )
}

export default Result