import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import './RegisterForm.css'; // Import custom CSS for styling

const COURSES = ['C#', 'ReactJs', 'Java', 'C++', 'Python'];

class RegisterForm extends Component {
constructor(props) {
    super(props);
    this.state = {
        name: '',
        address: '',
        email: '',
        password: '',
        telephone: '',
        course: 'C#',
        note: '',
    };
}

handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
};

handleReset = () => {
    this.setState({
        name: '',
        address: '',
        email: '',
        password: '',
        telephone: '',
        course: 'C#',
        note: '',
    });
};

handleSubmit = () => {
    const { name, email, password, telephone } = this.state;

    // Validation checks
    if (!name || !email || !password || !telephone) {
        this.showErrorToast('All fields are required.');
        return;
    }

    if (!/^[A-Za-z\s]+$/.test(name)) {
        this.showErrorToast('Name should only contain characters.');
        return;
    }

    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
        this.showErrorToast('Invalid email address.');
        return;
    }

    if (password.length < 6) {
        this.showErrorToast('Password should be at least 6 characters long.');
        return;
    }

    if (!/^\d+$/.test(telephone)) {
        this.showErrorToast('Telephone should contain only numbers.');
        return;
    }

    // If all validations pass
    this.showSuccessToast();
    // Here, you can submit the form data to the server if needed
};

showErrorToast = (message) => {
    this.toast.show({
        severity: 'error',
        summary: 'Validation Error',
        detail: message,
    });
};

showSuccessToast = () => {
    this.toast.show({
        severity: 'success',
        summary: 'Success',
        detail: 'Form submitted successfully!',
    });
};

render() {
    return (
        <div className="register-form-container">
            <h1>REGISTRATION FORM</h1>
        <Toast ref={(el) => (this.toast = el)} />

        <div className="form-field">
            <label htmlFor="name">Name</label>
            <InputText
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
        />
        </div>

        <div className="form-field">
            <label htmlFor="address">Address</label>
            <InputText
            id="address"
            name="address"
            value={this.state.address}
            onChange={this.handleInputChange}
        />
        </div>

        <div className="form-field">
            <label htmlFor="email">Email</label>
            <InputText
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
        />
        </div>

        <div className="form-field">
            <label htmlFor="password">Password</label>
            <InputText
            id="password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange}
        />
        </div>

        <div className="form-field">
            <label htmlFor="telephone">Telephone</label>
            <InputText
            id="telephone"
            name="telephone"
            value={this.state.telephone}
            onChange={this.handleInputChange}
        />
        </div>

        <div className="form-field">
            <label htmlFor="course">Course</label>
            <select
            id="course"
            name="course"
            value={this.state.course}
            onChange={this.handleInputChange}
        >
            {COURSES.map((course) => (
                <option key={course} value={course}>
                    {course}
                </option>
                ))}
            </select>
            </div>

        <div className="form-field">
            <label htmlFor="note">Note</label>
            <InputTextarea
            id="note"
            name="note"
            value={this.state.note}
            onChange={this.handleInputChange}
        />
        </div>

        <div className="form-field">
            <Button label="Reset" onClick={this.handleReset} />
            <Button label="Submit" onClick={this.handleSubmit} />
        </div>
    </div>
    );
}
}

export default RegisterForm;