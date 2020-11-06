import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DetailPage from "./pages/Detail/DetailPage";
import NotesPages from "./pages/Notes/NotesPages";

const useRoute = () => {
    return (
        <Switch>
            <Route path="/notes" exact>
                <NotesPages/>
            </Route>
            <Route path="/notes/:id">
                <DetailPage/>
            </Route>
        </Switch>
    );
};

export default useRoute;
