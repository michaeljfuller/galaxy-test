import {RouteChildrenProps} from "react-router-dom";
import ScreenWrapper from "./core/ScreenWrapper";

export interface NotificationsScreenProps extends RouteChildrenProps<{
    id?: string;
}>{}

export function NotificationsScreen(props: NotificationsScreenProps) {
    return <ScreenWrapper>
        <h1>Notifications</h1>
        <h2>{props.match?.params.id}</h2>
    </ScreenWrapper>;
}
export default NotificationsScreen;
