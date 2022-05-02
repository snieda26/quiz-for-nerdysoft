import React, { FC, useEffect, useState } from 'react';
import { AnswerButton } from '../../components';
import { shuffleAnswers } from '../../utils';
import { Stopwatch } from '../../components/Stopwatch';
import './Quiz.scss'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setTotalScore } from '../../redux/actions';
import { Link, Navigate } from 'react-router-dom';

const Quiz: FC = () => {

    const { questions, totalScore } = useSelector((state: RootState) => state.quiz)
    const [currentQuestion, setCurrentQuestion] = useState<number>(0)
    const [showScore, setShowScore] = useState<boolean>(false)
    const dispatch = useDispatch()

    const onChooseAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

        const target = e.target as HTMLButtonElement;
        const nextQuestion = currentQuestion + 1

        if (nextQuestion < questions.length) {
            if (questions[currentQuestion].correct_answer === target.innerText) dispatch(setTotalScore(totalScore + 1))
            setCurrentQuestion(nextQuestion)
        } else {
            setShowScore(true)
        }
    }

    const onCancelQuiz = () => {
        dispatch(setTotalScore(0))
    }

    return (
        <>
            <div className='quiz'>
                {showScore ? (
                    <Navigate to="/result" />
                ) : (
                    <>
                        <div className='question'>
                            <div className='question__count'>
                                <span>Question {currentQuestion + 1}</span>/{questions && questions.length}
                            </div>
                            <div className='question__text'>{questions.length && questions[currentQuestion].question}</div>
                        </div>
                        <div className='answer__section'>
                            {
                                questions.length && shuffleAnswers(
                                    [...questions[currentQuestion].incorrect_answers, questions[currentQuestion].correct_answer]).map((answer: string, ind: number) => {

                                        return <AnswerButton onClick={onChooseAnswer} key={answer + ind}>{answer}</AnswerButton>
                                    })
                            }



                            <Link to="/">
                                <button className="cancel__btn" onClick={onCancelQuiz}>cancel quiz</button>
                            </Link>
                        </div>

                    </>
                )}

            </div>
            <div className='quiz__bottom'>
                <Stopwatch timeOn={true} />
            </div>

        </>
    );
}

export default Quiz