import { runRequest } from "./middleware";

export const getUsers = async () => {
    let data;
    let errors;

    const { loading } = await runRequest({
        url: "/users",
        method: "GET",
        onSuccess: (response: any) => {
            console.log(response);
            data = response.data;
        },
        onError: (error: any) => {
            errors = error;
        },
    });

    return { loading, data, errors };
};
