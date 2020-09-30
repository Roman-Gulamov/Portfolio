import { createBrowserHistory } from "history";

export const goHome = () => {
    const history = createBrowserHistory();

    setTimeout(() => {
        history.push('/Portfolio/#/profile');
        history.go(0);

        window.location.reload(); // for mobile phone
    }, 2000);
}