export function getAuthHeader() {
    const token = localStorage.getItem('token') as string;

    if (token) return 'Bearer ' + token;
    return;
}

export function getLocalUser() {
    const user = JSON.parse(localStorage.getItem('user') || '');

    if (user) {
        return { user: user };
    } else {
        return {};
    }
}
