import React from "react";
import css from "./GeneralProfileSection.module.scss";

export interface GeneralProfileSectionProps {}

export function GeneralProfileSection(props: GeneralProfileSectionProps) {
    return <section className={css.root}>
        <h2 className={css.title}>General</h2>
        <p className={css.subtitle}>Click field boxes to edit and then save your changes.</p>
    </section>;
}
export default GeneralProfileSection;