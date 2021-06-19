import React, {useState} from "react";
import {RouteChildrenProps} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import css from "./LogInScreen/LoginScreen.module.scss";
import ScienceBackground from "../components/decoration/ScienceBackground";
import LogInForm, {LogInFormProps} from "./LogInScreen/LogInForm";

export interface LogInScreenProps extends RouteChildrenProps {}

export function LogInScreen(props: LogInScreenProps) {
    const auth = useAuth();
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState<Error|null>(null);

    const handleSubmit: LogInFormProps['onSubmit'] = async (email, password) => {
        try {
            setError(null);
            setProcessing(true);
            await auth.signIn(email, password);
            props.history.push("/");
        } catch(e) {
            setError(e);
            setProcessing(false);
        }
    }

    return <div className={css.root}>
        <div className={css.formContainer}>
            <h1>Log In</h1>
            <LogInForm
                onSubmit={handleSubmit}
                error={error?.message || error?.name}
                disabled={processing}
            />
        </div>
        <ScienceBackground />
    </div>;
}
