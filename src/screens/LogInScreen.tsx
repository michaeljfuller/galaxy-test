import React, {useState} from "react";
import {RouteChildrenProps} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import css from "./LogInScreen/LogInScreen.module.scss";
import ScienceBackground, {defaultScienceBackgroundStyle} from "../components/decoration/ScienceBackground";
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
            <div>
                <h1>Log In</h1>
                <LogInForm
                    onSubmit={handleSubmit}
                    error={error?.message || error?.name}
                    disabled={processing}
                />
            </div>
        </div>
        <ScienceBackground style={{ minWidth: defaultScienceBackgroundStyle.width }} />
    </div>;
}
export default LogInScreen;