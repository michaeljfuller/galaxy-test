import type {NotificationsService, NotificationFilters} from "../NotificationsService";
import {wait, createNotification} from "../../utils/mock-utils";

export interface MockNotificationsApiOptions {
    fetchNotificationsDelay: number;
    latestLength: number;
}

export default class MockNotificationsApi implements NotificationsService {
    private options: MockNotificationsApiOptions = {
        fetchNotificationsDelay: 500,
        latestLength: 10,
    };

    constructor(options?: Partial<MockNotificationsApiOptions>) {
        Object.assign(this.options, options);
    }

    async fetchNotifications(offset: number, limit: number, filters?: NotificationFilters): Promise<UserNotification[]> {
        await wait(this.options.fetchNotificationsDelay);
        let result = [
            createNotification("1"),
            createNotification("12"),
            createNotification("123"),
            createNotification("1234"),
            createNotification("12345"),
        ];
        if (filters?.read === false) {
            result = result.filter(notification => !notification.read);
        }
        if (filters?.order) {
            result = result.sort(filters?.order === "asc" ? sortAsc : sortDesc);
        }
        return result;
    }

    fetchLatest() {
        return this.fetchNotifications(0, this.options.latestLength, {
            order: "desc", read: true,
        });
    }

}

function sortAsc(a: UserNotification, b: UserNotification) {
    return Date.parse(a.timeStamp) > Date.parse(b.timeStamp) ? 1 : -1;
}
function sortDesc(a: UserNotification, b: UserNotification) {
    return Date.parse(a.timeStamp) < Date.parse(b.timeStamp) ? 1 : -1;
}
