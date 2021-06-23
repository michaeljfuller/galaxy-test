import type {NotificationsService, NotificationFilters} from "../NotificationsService";

export interface NotificationsApiOptions {
    endpoint: string;
    latestLength: number;
}

export default class NotificationsApi implements NotificationsService {
    private options: NotificationsApiOptions = {
        endpoint: "https://mockend.com/biorelate/fe-mock-api/notification",
        latestLength: 10,
    };

    constructor(options?: Partial<NotificationsApiOptions>) {
        Object.assign(this.options, options);
    }

    async fetchNotifications(offset: number, limit: number, filters?: NotificationFilters): Promise<UserNotification[]> {
        let url = this.options.endpoint + `?offset=${offset}&limit=${limit}`;
        if (filters?.order !== undefined) url += "&timestamp_order=" + filters.order;
        if (filters?.read !== undefined) url += "&read_eq=" + (filters.read ? "true" : "false");

        return fetch(url).then(response => response.json());
    }

    fetchLatest() {
        return this.fetchNotifications(0, this.options.latestLength, {
            order: "desc", read: true,
        });
    }

}
