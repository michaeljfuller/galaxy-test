import React, {useRef} from "react";
import css from "./ApiProfileSection.module.scss";
import useAuth from "../../../hooks/useAuth";

export interface ApiProfileSectionProps {}

export function ApiProfileSection(props: ApiProfileSectionProps) {
    const keyInput = useRef<HTMLInputElement>(null);
    const currentUser = useAuth().currentUser as User;

    const token = currentUser.token;

    const handleCopyKey = () => {
        if (keyInput.current) {
            keyInput.current.select();
            document.execCommand("copy");

            // Can clear selection & focus if wanted
            // document.getSelection()?.empty();
            // keyInput.current.blur();
        }
    }

    return <section className={css.root}>
        <h2 className={css.title}>Access token</h2>
        <p className={css.subtitle}>Generate your unique key to access Galactic Data™.</p>

        <div className={css.row}>
            <label className={css.key}>
                Your unique key
                <input
                    ref={keyInput}
                    value={token}
                    readOnly
                    disabled={!token}
                />
            </label>
        </div>

        <div className={css.row}>{
            token ?
            <>
                <button className={css.ghost} onClick={handleCopyKey}>[ICON] Copy to clipboard</button>
                <button className={css.ghostSecondary}>Generate another</button>
            </> :
            <button>Generate key</button>
        }</div>

    </section>;
}
export default ApiProfileSection;