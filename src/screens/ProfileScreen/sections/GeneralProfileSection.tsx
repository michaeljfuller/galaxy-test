import React, {useState, useCallback, InputHTMLAttributes} from "react";
import css from "./GeneralProfileSection.module.scss";
import useUser from "../../../hooks/useUser";

type OnInputChange = Exclude<InputHTMLAttributes<HTMLInputElement>['onChange'], undefined>;

export interface GeneralProfileSectionProps {}

export function GeneralProfileSection(props: GeneralProfileSectionProps) {
    const currentUser = useUser(true);
    const [user, setUser] = useState({...currentUser});

    const changed = JSON.stringify(currentUser) !== JSON.stringify(user); // TODO Lazy, change this

    let submitDisabled = "";
    if (!changed) {
        submitDisabled = "No changes made.";
    }

    const handleFirstName = useCallback<OnInputChange>(event => {
        setUser({...user, givenName: event.target.value});
    }, [user, setUser])
    const handleLastName = useCallback<OnInputChange>(event => {
        setUser({...user, familyName: event.target.value});
    }, [user, setUser]);
    const handleEmail = useCallback<OnInputChange>(event => {
        setUser({...user, email: event.target.value});
    }, [user, setUser]);
    const handlePhone = useCallback<OnInputChange>(event => {
        setUser({...user, phone: event.target.value});
    }, [user, setUser]);

    return <section className={css.root}>
        <h2 className={css.title}>General</h2>
        <p className={css.subtitle}>Click field boxes to edit and then save your changes.</p>

        <div className={css.row}>

            <label className={css.avatar}>
                Avatar
                <div>
                    <img src={user.avatar} alt="avatar" />
                    <button>Upload</button>
                    <button className={css.secondary}>Remove</button>
                </div>
            </label>

        </div>

        <hr />

        <div className={css.row}>

            <label>
                First name
                <input required value={user.givenName} onChange={handleFirstName} />
            </label>
            <label>
                Last name
                <input required value={user.familyName} onChange={handleLastName} />
            </label>

        </div>
        <div className={css.row}>

            <label>
                Email
                <input required type="email" value={user.email} onChange={handleEmail} />
            </label>
            <label>
                Phone number
                <input required type="phone" value={user.phone} onChange={handlePhone} />
            </label>

        </div>

        <hr />

        <div className={css.row}>
            <label className={css.delete}>
                Delete account
                <div>
                    <span>By deleting your account you will lose all of your data.</span>
                    <button disabled>Delete account...</button>
                </div>
            </label>
        </div>

        <hr />

        <input className={css.submit} disabled={!!submitDisabled} type="submit" value="Save Changes" title={submitDisabled||undefined} />

    </section>;
}
export default GeneralProfileSection;
