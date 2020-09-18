import { createBrowserHistory } from "history";
import Axios from "axios";


export const submitForm = (values) => {
    const history = createBrowserHistory();
    const axios = Axios.create();
    
    axios.post("https://formspree.io/xbjpredk", {...values})
    .then(response => {
        if (response.status === 200) {
            history.push('/Portfolio/#/profile');
            history.go(0);

            window.location.reload(); // for mobile phone
        }
    })
}