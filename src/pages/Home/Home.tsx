import axios from 'axios'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setQuestions } from '../../redux/actions'
import { RootState } from '../../redux/store'
import { Question } from '../../types'

const Home: FC = () => {

    const { questions } = useSelector((state: RootState) => state.quiz)
    const [showList, setShowList] = useState<boolean>(false)

    const dispatch = useDispatch()

    // function to generate a random category
    const getRandomCategory = () => {
        // random number from 9 to 32
        const randomCategory = Math.floor(Math.random() * (32 - 9 + 1) + 9)
        axios.get(`https://opentdb.com/api.php?amount=10&category=${randomCategory}`)
            .then(res => dispatch(setQuestions(res.data.results)))
    }

    const toggleShowList = () => {
        setShowList(!showList)
    }

    return (
        <>
            <div className="home">
                <div className="home__body">
                    <div className="home__text">
                        <p className="home__sentence">Welcome to Quiz!</p>
                        <p className="home__sentence">{questions.length} questions</p>
                        <p className="home__sentence">{questions.length && questions[0].category}</p>
                    </div>
                    <div className='home__questions'>
                        {
                            showList && questions.map((question: Question, ind: number) => {
                                return <p key={question.correct_answer + ind} className='home__question'>{ind + 1}. {question.question}</p>
                            })
                        }
                    </div>
                    <div className="home__buttons">
                        <Link to="/quiz">
                            <button className="home__btn">Play</button>
                        </Link>
                        <button className="home__btn show-list" onClick={toggleShowList}>{showList ? "Hide" : "Show"} List</button>

                        {/* click the button below to generate random category */}
                        <button className="home__btn lucky" onClick={getRandomCategory}>I am lucky</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home