import React from "react";
import css from "./ApiProfileSection.module.scss";
import useAuth from "../../../hooks/useAuth";

export interface ApiProfileSectionProps {}

export function ApiProfileSection(props: ApiProfileSectionProps) {
    const user = useAuth().currentUser as User;

    return <section className={css.root}>
        <h2 className={css.title}>Access token</h2>
        <p className={css.subtitle}>Generate your unique key to access Galactic Data™.</p>

        <div className={css.row}>
            <label className={css.key}>
                Your unique key
                <input readOnly disabled value={user.token} />
            </label>
        </div>

        <button>Generate key</button>

    </section>;
}
export default ApiProfileSection;