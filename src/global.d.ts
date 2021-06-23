declare interface User {
    email: string;
    givenName: string;
    familyName: string;
    token: string;
    avatar: string;
    phone: string;
}
declare interface UserNotification {
    id: string;
    title: string;
    message: string;
    timeStamp: string;
    read: boolean;
}
declare interface Article {
    id: number;
    title: string;
    snippet: string;
    published: string;
}
