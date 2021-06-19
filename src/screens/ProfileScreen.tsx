import {RouteChildrenProps} from "react-router-dom";

export interface ProfileScreenProps extends RouteChildrenProps {}

export function ProfileScreen(props: ProfileScreenProps) {
    return <h1>ProfileScreen</h1>;
}