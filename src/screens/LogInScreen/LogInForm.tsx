import React, {CSSProperties, FormHTMLAttributes, useState} from "react";
import {Link} from "react-router-dom";
import css from "./LogInScreenForm.module.scss";
import {classNames} from "../../utils/component-utils";

export interface LogInFormProps {
    onSubmit: (email: string, password: string) => void;
    error?: string;
    disabled?: boolean;

    className?: string;
    style?: CSSProperties;
}

export function LogInForm(props: LogInFormProps) {
    const {disabled} = props;
    const [email, setEmail] = useState("test@redacted.tech");
    const [password, setPassword] = useState("testPassword123");

    const handleSubmit: FormHTMLAttributes<HTMLFormElement>['onSubmit'] = async (event) => {
        event.preventDefault();
        if (!props.disabled) props.onSubmit(email, password);
    };

    return <form
        className={classNames(css.root, props.className)}
        style={props.style}
        onSubmit={handleSubmit}
    >

        <label className={css.email}>
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

        <label className={css.password}>
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

        {props.error ? <p className={css.error}>{props.error}</p> : null}

        <input disabled={disabled} type="submit" value="Log In" />

        <p>Don’t have an account yet? <Link to="/sign-up">Sign up</Link></p>

    </form>;
}

export default LogInForm;
