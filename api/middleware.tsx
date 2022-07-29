import axios from "axios";

type Props = {
    url: string;
    method: string;
    params?: {} | string | null;
    data?: {} | string | null;
    onSuccess: (_data: any) => void;
    onError: (_error: any) => void;
};

export const runRequest = async ({
    url,
    method,
    params,
    data,
    onSuccess,
    onError,
}: Props) => {
    let loading = true;

    try {
        const response = await axios({
            baseURL: "https://jsonplaceholder.typicode.com/",
            url,
            params,
            method,
            data,
        });

        onSuccess(response.data);
        loading = false;
    } catch (error) {
        onError(error);
        loading = false;
    }

    return { loading };
};
