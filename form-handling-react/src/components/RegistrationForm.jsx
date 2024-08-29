import { useState } from "react";
const RegistrationForm = () => {
    const [FormData, setFormData] = useState({ username: '', email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({...prevState, [name]: value}));
    };
     
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!FormData.username || !FormData.email || !FormData.password) {
            alert('Please fill all the fields')
        };
        console.log('Form submitted' ,FormData);
    };
    return(
        <form onSubmit={handleSubmit}>
            <div>
        <label>Username:</label>
            <input
            type="Text"
            name="username"
            value={FormData.username}
            onChange={handleChange}
            />
            </div>

            <div>
        <label>Email:</label>
            <input
            type="text"
            name="email"
            value={FormData.email}
            onChange={handleChange}
            />
            </div>

            <div>
        <label>Password:</label>
            <input
            type="password"
            name="password"
            value={FormData.password}
            onChange={handleChange}
            />
            </div>

          <button type ="submit">Register</button>
            </form>
    );
};

export default RegistrationForm;
