import React from 'react';

const NotesList = ({t, notes, history, RemoveNotes, addNotes, setAddNotes, AddNotes}) => {
    return (
        <div>
            <div className="row">
                <div className="col s8 offset-s2" style={{paddingTop: "2rem"}}>
                    <div className="input-field">
                        <input placeholder={t('CreateNote')}
                               id="notes" type="text"
                               value={addNotes}
                               onChange={e => setAddNotes(e.target.value)}
                               onKeyPress={(e) => {
                                   AddNotes(e)
                               }}
                        />
                    </div>
                </div>
            </div>
            {notes.length ? <table className="centered">
                <thead>
                <tr>
                    <th>#</th>
                    <th>{t('TheNote')}</th>
                    <th>{t('RemoveNote')}</th>
                    <th>{t('DetailedInformation')}</th>
                </tr>
                </thead>

                <tbody>
                {notes.map((item, index) => {
                    return (
                        <tr key={item._id}>
                            <td>{index + 1}</td>
                            <td>
                                {item.note}
                            </td>
                            <td>
                                <button onClick={() => {
                                    RemoveNotes(item._id)
                                }} type="button" className="waves-effect waves-light btn red lighten-2">
                                    <i className="Small material-icons">delete_forever</i></button>
                            </td>
                            <td>
                                <button onClick={() => {
                                    history.push(`/notes/${item._id}`)
                                }} type="button" className="waves-effect waves-light btn red lighten-2">
                                    <i className="Small material-icons">info_outline</i></button>
                            </td>
                        </tr>)
                })}
                </tbody>
            </table> : <p className="center">{t("ThereAreCurrentlyNoNotes")}</p>}
        </div>
    );
};

export default NotesList;
