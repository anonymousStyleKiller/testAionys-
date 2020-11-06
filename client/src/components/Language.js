import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

const Language = () => {
    const [myLang, setMyLang] = useState('en');
    const { i18n } = useTranslation();
    const handleChangeLocal = (lang) =>{
        setMyLang(lang);
        i18n.changeLanguage(lang);
    }
    return (
        <select  value={myLang} onChange={e => handleChangeLocal(e.target.value)}>
            <option value="en">En</option>
            <option value="ru">Ru</option>
        </select>
    );
};

export default Language;
