import React, {useState} from "react";
import styled from "styled-components";
import { PageLayout, Input, PasswordInput, Button} from "../common";

const Form = styled.form`
    width: 100%;
    max-width: 400px;
    background: white;
    border: 1px solid #eee;
    box-sizing: border-box;
    padding: 30px;
    color: black;
    border-radius: 4px;

    .orText{
        text-align: center;
        margin: 10px 0;
        font-weight: bold;
    }
`;
let timeout;

const Login = () => {

    const [formFields, setFormFields] = useState({ username: '', password: '' });
    const [Loading, setLoading] = useState(false);

    const handleInputChange = (event) => {
        setFormFields({...formFields,[event.target.name]:[event.target.value]})
     
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
    }

    return (
    <PageLayout>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
            <Input 
                value={formFields.username}
                onChange={handleInputChange}
                type="text"
                name="username" 
                placeholder="Username" />
             <PasswordInput 
                value={formFields.password}
                onChange={handleInputChange}
                name="password" 
                 />

            <Button large type="submit">
                Login
            </Button>
            <div className="orText">
                or
            </div>
            <Button secondary type="button">
                Register
            </Button>
        </Form>
    </PageLayout>
    );
}

export default Login;