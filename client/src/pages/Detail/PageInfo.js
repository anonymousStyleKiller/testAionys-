import React from 'react';
import Loader from "../../components/Loader";

const PageInfo = ({t, item, stateInput, inputField, setInputField, ChangeNotes, setStateInput}) => {
    if(!item){
        return <Loader/>
    }
    return (
            <table className="centered">
                <thead>
                <tr>
                    <th>{t('UniqueNumber')}</th>
                    <th>{t('TheNote')}</th>
                    <th>{t('EditNote')}</th>
                </tr>
                </thead>

                <tbody>
                        <tr key={item._id}>
                            <td>{item._id}</td>
                            <td>
                                {!stateInput ?
                                    item.note :
                                    <input type="text" name={item.note}
                                           className="validate blue-input" value={inputField}
                                           onChange={e => {
                                               setInputField(e.target.value)
                                           }}
                                           onBlur={async (e) => {
                                               await ChangeNotes(e, item._id, e.target.value);
                                               setStateInput(false)
                                           }}/>
                                }
                            </td>
                            <td>
                                <button onClick={() => {
                                    setStateInput(true)
                                }} type="button" className="waves-effect waves-light btn red lighten-2">
                                    <i className="Small material-icons">edit</i>
                                </button>
                            </td>
                        </tr>
                </tbody>
            </table>
    );
};

export default PageInfo;