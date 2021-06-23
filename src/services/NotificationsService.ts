export interface NotificationsService {
    fetchNotifications(offset: number, limit: number, filters?: NotificationFilters): Promise<Notification[]>;
}
export default NotificationsService;

export interface NotificationFilters {
    read?: boolean; // read/unread filter
    order?: 'asc'|'desc'; // timestamp ordering
}
