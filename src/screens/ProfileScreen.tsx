import {RouteChildrenProps} from "react-router-dom";
import NavBar from "../components/navigation/NavBar";
import css from "./ProfileScreen/ProfileScreen.module.scss";

export interface ProfileScreenProps extends RouteChildrenProps {}

export function ProfileScreen(props: ProfileScreenProps) {
    return <div className={css.root}>
        <NavBar />
        <h1>ProfileScreen</h1>
    </div>;
}
export default ProfileScreen;