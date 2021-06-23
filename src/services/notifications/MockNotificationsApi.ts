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
        return [
            createNotification("1"),
            createNotification("12"),
            createNotification("123"),
            createNotification("1234"),
            createNotification("12345"),
        ];
    }

    fetchLatest() {
        return this.fetchNotifications(0, this.options.latestLength, {
            order: "desc", read: false,
        });
    }

}
