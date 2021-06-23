import React, {useEffect} from "react";
import {RouteChildrenProps} from "react-router-dom";
import css from "./LogInScreen/LogInScreen.module.scss";
import ScienceBackground, {defaultScienceBackgroundStyle} from "../components/decoration/ScienceBackground";
import LogInForm, {LogInFormProps} from "./LogInScreen/LogInForm";

import {useStoreDispatch, useStoreSelector} from "../hooks/useStore";
import {signIn} from "../store/user/user-actions";

export interface LogInScreenProps extends RouteChildrenProps {}

export function LogInScreen(props: LogInScreenProps) {
    const dispatch = useStoreDispatch();
    const state = useStoreSelector(state => state.user);

    const signedIn = !!state.current;
    const processing = state.signingIn;
    const error = state.signInError;

    const handleSubmit: LogInFormProps['onSubmit'] = async (email, password) => {
        dispatch(signIn({email, password}));
    }

    useEffect(() => {
        if (signedIn) props.history.push("/");
    }, [signedIn, props.history]);

    return <div className={css.root}>
        <div className={css.formContainer}>
            <div>
                <h1>Log In</h1>
                <LogInForm
                    onSubmit={handleSubmit}
                    error={error}
                    disabled={processing}
                />
            </div>
        </div>
        <ScienceBackground style={{ minWidth: defaultScienceBackgroundStyle.width }} />
    </div>;
}
export default LogInScreen;
