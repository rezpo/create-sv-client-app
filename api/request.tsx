import { runRequest, status } from "./middleware";

export const getUsers = async () => {
    let data;
    let errors;

    await runRequest({
        url: "/users",
        method: "GET",
        onSuccess: (response: any) => {
            data = response;
        },
        onError: (error: any) => {
            errors = error;
        },
    });

    return { data, errors, status };
};
