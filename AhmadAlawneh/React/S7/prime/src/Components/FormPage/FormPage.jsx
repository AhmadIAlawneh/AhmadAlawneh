import React from 'react';
import RegisterForm from '../RegisterForm/RegisterForm';


class FormPage extends React.Component {
render() {
    return (
    <div className="form-page">
        <h1>Form Page</h1>
        <div className="form-container">
            <RegisterForm />
        </div>
    </div>
    );
}
}

export default FormPage;