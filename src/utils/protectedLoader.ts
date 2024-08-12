import { redirect } from "react-router";
import { fakeAuthProvider } from "./fakeAuth";

const protectedLoader = async () => {
    if (!fakeAuthProvider.isAuthenticated) {
        return redirect('/auth/login')
    }
    return null
}

export default protectedLoader