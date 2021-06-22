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

export function createArticle(id: number): Article {
    return {
        id,
        published: new Date,
        title: `Article ${id}`,
        snippet: `Snippet of article ${id}`,
    };
}

export function createNotification(id: string): Notification {
    return {
        id,
        title: `Notification ${id}`,
        message: `Message for notification ${id}`,
        timeStamp: new Date(),
        read: id.length % 2 === 0
    } as Notification;
}
