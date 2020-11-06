import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        translation: {
            "AddedNewNote": "Added a new note!",
            "DeletedNote": "Deleted note!",
            "ThereAreCurrentlyNoNotes": "There are currently no notes!",
            "TheNote": "The note",
            "RemoveNote": "Remove note",
            "DetailedInformation": "Detailed information",
            "Test": "Test",
            "CreateNote": "Create Note",
            "UniqueNumber": "Unique number",
            "EditNote": "Edit Note"
        }
    },
    ru: {
        translation: {
            "AddedNewNote": "Добавлено заметку",
            "DeletedNote": "Удалена заметка",
            "ThereAreCurrentlyNoNotes": "На данный момент заметок нет!",
            "TheNote": "Заметка",
            "RemoveNote": "Удалить заметку",
            "DetailedInformation": "Детальная информация",
            "Test": "Тест",
            "CreateNote": "Создать заметку",
            "OneNoteChanged": "Изменина одна заметка!",
            "UniqueNumber": "Идентификатор",
            "EditNote": "Редактировать заметку"
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;