import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import PageInfo from "./PageInfo";
import { useTranslation } from "react-i18next";
import { changeNotesThunk, getOneNotesThunk } from "../../redux/notesReducer";
import { connect } from "react-redux";


const DetailPage = ({isNotes, GET_ONE_NOTES, CHANGE_NOTES}) => {
    const [inputField, setInputField] = useState("");
    const [stateInput, setStateInput] = useState(false);
    const { t } = useTranslation();
    const {id} = useParams();


    const ChangeNotes = useCallback( async (e,  id, text) => {
        try {
            await CHANGE_NOTES(id, text)
            alert.show(`${t('OneNoteChanged!')}`, 'warning');
        } catch (e) {
        }
    }, [CHANGE_NOTES])



    useEffect( () => {
     ChangeNotes()
    }, [ChangeNotes])

    useEffect(() => {
         GET_ONE_NOTES(id);
    }, [])

    return (
        <>
            <PageInfo t={t} item={isNotes} stateInput={stateInput} setInputField={setInputField}
                      ChangeNotes={ChangeNotes} setStateInput={setStateInput}
                      inputField={inputField}
            />
        </>
    );
};


let mapDispatchToProps = (dispatch) => {
    return {
        GET_ONE_NOTES: (id) => {
            dispatch(getOneNotesThunk(id));
        },
        CHANGE_NOTES: (id, text) => {
            dispatch(changeNotesThunk(id, text));
        }
    }
};

const mapStateToProps = (state) => ({
    isNotes: state.notesReducer.notes
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);

