interface AuthProvider {
    isAuthenticated: boolean;
    email: null | string;
    signin(email: string): Promise<void>;
    signout(): Promise<void>;
}

export const fakeAuthProvider: AuthProvider = {
    isAuthenticated: false,
    email: null,
    async signin(email: string) {
        await new Promise((r) => setTimeout(r, 2000));
        fakeAuthProvider.isAuthenticated = true;
        fakeAuthProvider.email = email;
    },
    async signout() {
        await new Promise((r) => setTimeout(r, 2000));
        fakeAuthProvider.isAuthenticated = false;
        fakeAuthProvider.email = "";
    },
};