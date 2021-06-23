import { Link } from "react-router-dom";
import useNotifications from "../../../hooks/useNotifications";
import css from "./LatestNotificationsList.module.scss";
import {errorMessage} from "../../../utils/error-utils";
import Badge from "../../ui/Badge";

export function LatestNotificationsList() {
    const {
        latest,
        fetchingLatest,
        fetchLatestError,
    } = useNotifications();

    return <div className={css.root}>

        <ul className={css.list}>
            {latest.map(notification => <Link key={notification.id} to={`/notifications/${notification.id}`}>
                <Badge value="Unread" hidden={notification.read}>
                    <li>{notification.title}</li>
                </Badge>
            </Link>)}
            {latest.length === 0 && !fetchingLatest ? <li>No notifications</li> : null}
        </ul>
        {fetchingLatest ? <p>Loading...</p> : null}
        {fetchLatestError ? <p>{errorMessage(fetchLatestError)}</p> : null}

        <Link to={`/notifications`}>
            <div className={css.seeAll}>See all</div>
        </Link>
    </div>;
}
export default LatestNotificationsList;
