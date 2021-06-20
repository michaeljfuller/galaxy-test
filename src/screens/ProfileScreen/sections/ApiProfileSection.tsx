import React from "react";
import css from "./ApiProfileSection.module.scss";

export interface ApiProfileSectionProps {}

export function ApiProfileSection(props: ApiProfileSectionProps) {
    return <section className={css.root}>
        <h2 className={css.title}>Access token</h2>
        <p className={css.subtitle}>Generate your unique key to access Galactic Data™.</p>
    </section>;
}
export default ApiProfileSection;