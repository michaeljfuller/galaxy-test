import React, {useEffect, useRef, useState} from "react";
import css from "./ApiProfileSection.module.scss";
import useAuth from "../../../hooks/useAuth";

export interface ApiProfileSectionProps {}

export function ApiProfileSection(props: ApiProfileSectionProps) {
    const keyInput = useRef<HTMLInputElement>(null);
    const [copied, setCopied] = useState(false);
    const currentUser = useAuth().currentUser as User;

    const token = currentUser.token;

    const handleCopyKey = () => {
        if (keyInput.current) {
            keyInput.current.select();
            document.execCommand("copy");
            document.getSelection()?.empty();
            keyInput.current.blur();
            setCopied(true);
        }
    }

    useEffect(() => {
        if (copied) {
            const timeoutId = setTimeout(() => setCopied(false), 3000);
            return () => clearTimeout(timeoutId);
        }
    }, [copied, setCopied]);

    return <section className={css.root}>
        <h2 className={css.title}>Access token</h2>
        <p className={css.subtitle}>Generate your unique key to access Galactic Data™.</p>

        <div className={css.row}>
            <label className={css.key}>
                Your unique key
                <div className={token ? css.checkWrapper : undefined}>
                    <input
                        ref={keyInput}
                        value={token}
                        readOnly
                        disabled={!token}
                    />
                </div>
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

        {copied ? <p className={css.copied}>Copied!</p> : null}

    </section>;
}
export default ApiProfileSection;