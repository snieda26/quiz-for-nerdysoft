import { Question } from "../../types"

export const setQuestions = (payload: Question[]) => {
    return { type: "SET_QUESTIONS", payload }
}
export const setTotalScore = (payload: number) => {
    return { type: "SET_SCORE", payload }
}
export const setTotalTime = (payload: any) => {
    return { type: "SET_TOTAL_TIME", payload }
}