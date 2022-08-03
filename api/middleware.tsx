import axios from "axios";

type Props = {
    url: string;
    method: string;
    params?: {} | string | null;
    data?: {} | string | null;
    onSuccess: (_data: any) => void;
    onError: (_error: any) => void;
};

export const status = { startCall: false, calling: false, callEnds: false };

export const runRequest = async ({
    url,
    method,
    params,
    data,
    onSuccess,
    onError,
}: Props) => {
    status.startCall = true;
    status.calling = true;

    try {
        const response = await axios({
            baseURL: "https://jsonplaceholder.typicode.com/",
            url,
            params,
            method,
            data,
        });

        status.startCall = false;
        status.calling = false;
        status.callEnds = true;

        onSuccess(response.data);
    } catch (error) {
        status.startCall = false;
        status.calling = false;
        status.callEnds = true;

        onError(error);
    }
};
