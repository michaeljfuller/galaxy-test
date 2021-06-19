import React, {CSSProperties, FormHTMLAttributes, useState} from "react";
import {Link} from "react-router-dom";

export interface LogInFormProps {
    onSubmit: (email: string, password: string) => void;
    error?: string;
    disabled?: boolean;

    className?: string;
    style?: CSSProperties;
}

export function LogInForm(props: LogInFormProps) {
    const {disabled} = props;
    const [email, setEmail] = useState("test@user");
    const [password, setPassword] = useState("something");

    const handleSubmit: FormHTMLAttributes<HTMLFormElement>['onSubmit'] = async (event) => {
        event.preventDefault();
        if (!props.disabled) props.onSubmit(email, password);
    };

    return <form className={props.className} style={props.style} onSubmit={handleSubmit}>

        <label>
            <span>Email</span>
            <input
                type="email"
                required
                disabled={disabled}
                value={email}
                onChange={event => setEmail(event.target.value)}
                placeholder="ramona@example.com"
            />
        </label>

        <label>
            <span>Password</span>
            <input
                type="password"
                required
                disabled={disabled}
                value={password}
                onChange={event => setPassword(event.target.value)}
                placeholder="•••••••••••••••"
            />
        </label>

        {props.error ? <p>{props.error}</p> : null}

        <input disabled={disabled} type="submit" value="Log In" />

        <p>Don’t have an account yet? <Link to="/sign-up">Sign up</Link></p>

    </form>;
}

export default LogInForm;
