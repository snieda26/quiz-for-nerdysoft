import React, { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setTotalTime } from '../../redux/actions'
import './Stopwatch.scss'

interface StopwatchProps {
    timeOn: boolean
}

const Stopwatch: FC<StopwatchProps> = ({ timeOn }) => {

    const dispatch = useDispatch()
    const [seconds, setSeconds] = useState<number>(0)
    let seoo = 0

    useEffect(() => {
        const interval = setInterval(() => {
            seoo = seoo + 1
            setSeconds(prev => prev + 1)
        }, 1000)

        return () => {
            clearInterval(interval)
            dispatch(setTotalTime(seoo))

            console.log('stopwatch unmount')
        }
    }, [timeOn])


    var min = Math.floor(seconds / 60);
    var sec = seconds - min * 60;
    return (
        <div className='stopwatch'>{min}:{sec}</div>
    )
}

export default Stopwatch