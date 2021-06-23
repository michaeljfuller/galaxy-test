import type {NotificationsService, NotificationFilters} from "../NotificationsService";
import {wait, createNotification} from "../../utils/mock-utils";

export interface MockNotificationsApiOptions {
    fetchNotificationsDelay: number;
}

export default class MockNotificationsApi implements NotificationsService {
    private options: MockNotificationsApiOptions = {
        fetchNotificationsDelay: 500,
    };

    constructor(options?: Partial<MockNotificationsApiOptions>) {
        Object.assign(this.options, options);
    }

    async fetchNotifications(offset: number, limit: number, filters?: NotificationFilters): Promise<Notification[]> {
        await wait(this.options.fetchNotificationsDelay);
        return [
            createNotification("1"),
            createNotification("12"),
            createNotification("123"),
        ];
    }

}
