import {API_KEY, PUBLIC_SERVER_URL} from "../common/constants";

export const getRecentEvents = async () => {
    let response = await fetch(`${PUBLIC_SERVER_URL}/events`, {
        method: 'GET',
        headers: {
            'ContentType': 'application/json',
            'Authorization': `Bearer ${API_KEY}`,
        }
    })
    return response.json();
}
