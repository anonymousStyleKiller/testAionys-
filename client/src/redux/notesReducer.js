import { ADD_NOTES, REMOVE_NOTES, GET_NOTES, CHANGE_NOTES, GET_ONE_NOTES } from '../utils/types';
import { instance } from "../axios/axiosApi";

let initialState = {
    notes: []
}

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NOTES:
            return {...state, notes: action.notes}
        case ADD_NOTES:
            return {
                ...state, notes: [...state.notes, action.obj]
            }
        case REMOVE_NOTES:
            return {
                ...state,
                notes: state.notes.filter(item => item._id !== action.id)
            }
        case GET_ONE_NOTES:
            return {...state, notes: action.obj}
        case CHANGE_NOTES:
            return {
                ...state, notes: action.obj
            }
        default:
            return state
    }
}
export const getNoteActionCreator = (notes) => ({type: GET_NOTES, notes});
export const getOneNoteActionCreator = (obj) => ({type: GET_ONE_NOTES, obj});
export const addNoteActionCreator = (obj) => ({
    type: ADD_NOTES,
    obj
});
export const removeNoteActionCreator = (id) => ({type: REMOVE_NOTES, id});
export const changeNoteActionCreator = (obj) => ({
    type: CHANGE_NOTES,
    obj
});


// all
export const getNotesThunk = () => async (dispatch) => {
    try {
        const response = await instance.get('/notes');
        dispatch(getNoteActionCreator(response.data));
    } catch (e) {
    }
};

// one
export const getOneNotesThunk = (id) => async (dispatch) => {
    try {
        const response = await instance.get(`/notes/${id}`);
        console.log(response)
        dispatch(getOneNoteActionCreator(response.data));
    } catch (e) {
    }
};

export const addNotesThunk = (payload) => async (dispatch) => {
    try {
       const response = await instance.post('/notes/', {
           payload
       });
        dispatch(addNoteActionCreator(response.data.resp));
    } catch (e) {
    }
};

// remove
export const removeNotesThunk = (id) => async (dispatch) => {
    try {
        const response = await instance.delete(`/notes/${id}`);
        dispatch(removeNoteActionCreator(response.data._id));
    } catch (e) {
    }
};

export const changeNotesThunk = (id, text) => async (dispatch) => {
    try {
        const responce =   await instance.put(`/notes/${id}`, {note: text});
        dispatch(changeNoteActionCreator(responce.data));
    } catch (e) {
    }
};


export default notesReducer;