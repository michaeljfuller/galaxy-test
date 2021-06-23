export function wait(ms: number) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

export function createUser(email: string): User {
    return {
        email,
        givenName: email.split('@')[0] || '',
        familyName: email.split('@')[1] || '',
        token: Math.random().toString().split('.').pop() || '',
        avatar: "/avatar.jpg",
        phone: Math.random().toString().split('.')[1].slice(0, 10),
    };
}

let articleCount = 0;
export function createArticle(id: number): Article {
    const count = articleCount++;
    return {
        id,
        published: new Date(2020, 0, 1, 0, 0, 0, count).toISOString(),
        title: `Article ${id}`,
        snippet: `Snippet of article ${id}`,
    };
}

let notificationCount = 0;
export function createNotification(id: string): UserNotification {
    const count = notificationCount++;
    return {
        id,
        title: `Notification ${id}`,
        message: `Message for notification ${id}`,
        timeStamp: new Date(2020, 0, 1, 0, 0, 0, count).toISOString(),
        read: count % 2 === 0
    };
}
