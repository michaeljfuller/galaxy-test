import {RouteChildrenProps} from "react-router-dom";
import NavBar from "../components/navigation/NavBar";
import css from "./ProfileScreen/ProfileScreen.module.scss";
import SideNavigator from "../navigation/SideNavigator";
import GeneralProfileSection from "./ProfileScreen/sections/GeneralProfileSection";
import ApiProfileSection from "./ProfileScreen/sections/ApiProfileSection";

export interface ProfileScreenProps extends RouteChildrenProps {}

export function ProfileScreen(props: ProfileScreenProps) {
    return <div className={css.root}>
        <NavBar />
        <h1>Account settings</h1>
        <SideNavigator links={[
            {title: "General", path: '', exact: true, component: GeneralProfileSection},
            {title: "Plan", path: '/plan', component: null},
            {title: "API", path: '/api', component: ApiProfileSection},
            {title: "Security", path: '/security', component: null},
            {title: "Notifications", path: '/notifications', component: null},
            {title: "Billing History", path: '/billing-history', component: null},
            {title: "Legal", path: '/legal', component: null},
        ]} />
    </div>;
}
export default ProfileScreen;