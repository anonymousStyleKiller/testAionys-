import React from 'react';
import { BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import useRoute from "./routes";
import { AlertState } from "./utils/alert/AlertState";
import Alert from "./components/Alert";

function App() {
    const routes = useRoute();
    return (
        <AlertState>
            <BrowserRouter>
                <Navbar/>
                <div className="container">
                    <Alert/>
                    {routes}
                </div>
            </BrowserRouter>
        </AlertState>
    );
}


export default App;

