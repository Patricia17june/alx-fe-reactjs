import { useState } from "react";

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    /*const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };*/

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.username || !formData.email || !formData.password) {
            alert('Please fill all the fields');
            return;
        }
        console.log('Form submitted', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <div>
                <label>Email:</label>
                <input
                    type="text"
                    name="email"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
