import api from "../services/api";

export function handleExpensives() {
    api.get(`/expense/v1/expenses/3`)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
}

export async function handleSignin() {
    api.post(`user/v1/signin`);
}
