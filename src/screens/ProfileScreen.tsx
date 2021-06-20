import {RouteChildrenProps} from "react-router-dom";
import NavBar from "../components/navigation/NavBar";
import css from "./ProfileScreen/ProfileScreen.module.scss";
import SideNavigator from "../navigation/SideNavigator";

export interface ProfileScreenProps extends RouteChildrenProps {}

export function ProfileScreen(props: ProfileScreenProps) {
    return <div className={css.root}>
        <NavBar />
        <h1>ProfileScreen</h1>
        <SideNavigator links={[
            {title: "General", path: '', exact: true, component: () => <h1>General</h1>},
            {title: "Plan", path: '/plan', component: () => <h1>Plan</h1>},
            {title: "API", path: '/api', component: () => <h1>API</h1>},
            {title: "Security", path: '/security', component: () => <h1>Security</h1>},
            {title: "Notifications", path: '/notifications', component: () => <h1>Notifications</h1>},
            {title: "Billing History", path: '/billing-history', component: () => <h1>Billing History</h1>},
            {title: "Legal", path: '/legal', component: () => <h1>Legal</h1>},
        ]} />
    </div>;
}
export default ProfileScreen;