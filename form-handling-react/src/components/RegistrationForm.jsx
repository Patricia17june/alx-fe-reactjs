import { useState } from "react";
const RegistrationForm = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({...prevState, [name]: value}));
    };
     
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.username || !formData.email || !formData.password) {
            alert('Please fill all the fields')
        };
        console.log('Form submitted' ,formData);
    };
    return(
        <form onSubmit={handleSubmit}>
            <div>
        <label>Username:</label>
            <input
            type="Text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            />
            </div>

            <div>
        <label>Email:</label>
            <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            />
            </div>

            <div>
        <label>Password:</label>
            <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            />
            </div>

          <button type ="submit">Register</button>
            </form>
    );
};

export default RegistrationForm;
