import { combineReducers } from 'redux'
const initialState = {
    current:[],
    all_subjects:['Spain', 'English', 'Croatia', 'Belgium', 'Ghana', 
    'Cameroon', 'Argentina', 'Peru']
}

const subjectReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SELECT_NATION':
            const { current, all_subjects } = state

            const addSubject = all_subjects.splice(action.payload, 1)

            current.push(addSubject)
            const newState = { current, all_subjects}
            return newState
        default:
            return state
    }
}

export default combineReducers({
    subjects:subjectReducer
})