import React, { useCallback, useContext, useEffect, useState } from 'react';
import NotesList from "./NotesList";
import Loader from "../../components/Loader";
import { useHistory } from "react-router-dom";
import { AlertContext } from "../../utils/alert/AlertContext";
import { useTranslation } from 'react-i18next';
import { connect } from "react-redux";
import { addNotesThunk, getNotesThunk, removeNotesThunk, } from "../../redux/notesReducer";

const NotesPages = ({isNotes, GET_NOTES, ADD_NOTES, REMOVE_NOTES}) => {
    const alert = useContext(AlertContext);
    const history = useHistory();
    const [addNotes, setAddNotes] = useState('');
    const {t} = useTranslation();

    const fetching = useCallback(async () => {
        await GET_NOTES(isNotes)
    }, [GET_NOTES, isNotes]);

    const AddNotes = async e => {
        if (e.key === "Enter") {
            await ADD_NOTES(addNotes);
            setAddNotes('');
            alert.show(`${t("AddedNewNote")}`, 'success');
        }
    };

    const RemoveNotes = async id => {
        await REMOVE_NOTES(id);
        alert.show(`${t("DeletedNote")}`, 'danger');
    };

    useEffect(() => {
        fetching()
    }, []);

    if (!isNotes) {
        return <Loader/>
    }
    return (
        <>
            {isNotes && <NotesList t={t} addNotes={addNotes} setAddNotes={setAddNotes} AddNotes={AddNotes}
                                   notes={isNotes} history={history} RemoveNotes={RemoveNotes}/>}
        </>
    );
};

let mapDispatchToProps = (dispatch) => {
    return {
        GET_NOTES: (isNotes) => {
            dispatch(getNotesThunk(isNotes));
        },
        ADD_NOTES: (addNotes) => {
            dispatch(addNotesThunk(addNotes));
        },
        REMOVE_NOTES: (id) => {
            dispatch(removeNotesThunk(id));
        }
    }
};

const mapStateToProps = (state) => ({
    isNotes: state.notesReducer.notes
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesPages);
