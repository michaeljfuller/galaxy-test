export interface NotificationsProvider {
    fetchNotifications(offset: number, limit: number, filters?: NotificationFilters): Promise<Notification[]>;
}
export default NotificationsProvider;

export interface NotificationFilters {
    read?: boolean; // read/unread filter
    order?: 'asc'|'desc'; // timestamp ordering
}