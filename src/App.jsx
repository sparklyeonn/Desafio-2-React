import Alert from "./components/Alert";
import Login from "./components/Login";
import { useState } from "react";

function App() {

    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const validateAccess = (user) => {
        const email = 'correo@email.cl';
        const password = '123456';

        if (user.email === email && user.password === password) {
            setAlertMessage('Access - Ok');
            setAlertType('success');
          } else {
            setAlertMessage('Access - No');
            setAlertType('danger');
          }       
    }

    return (
        <div className="App container">
            <Login onSubmit={ validateAccess } />
            <Alert alertMessage = { alertMessage } alertType = { alertType } ></Alert>
        </div>
    );
}

export default App;