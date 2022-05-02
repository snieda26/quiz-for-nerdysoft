const initialState = {
    questions: [],
    totalScore: 0,
    totalTime: 0
}



export function quizReducer(state = initialState, action: { type: string, payload: any }) {
    switch (action.type) {
        case "SET_QUESTIONS":
            return {
                ...state,
                questions: action.payload
            }
        case "SET_SCORE":
            return {
                ...state,
                totalScore: action.payload
            }
        case "SET_TOTAL_TIME":
            return {
                ...state,
                totalTime: action.payload
            }
        default:
            return state
    }
}