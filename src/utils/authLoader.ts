import { redirect } from "react-router";
import { fakeAuthProvider } from "./fakeAuth";

const authLoader = async () => {
    if (fakeAuthProvider.isAuthenticated) {
        return redirect('/')
    }
    return null
}

export default authLoader