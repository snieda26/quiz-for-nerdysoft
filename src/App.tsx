import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Question } from './types';
import './styles/_all.scss'
import { Home, Quiz, Result } from './pages';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setQuestions } from './redux/actions';

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const randomCategory = Math.floor(Math.random() * (32 - 9 + 1) + 9)

    axios.get(`https://opentdb.com/api.php?amount=10&category=${randomCategory}`)
      .then(res => dispatch(setQuestions(res.data.results)))
  }, [])


  return (
    <>
      <Routes>
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  )
}