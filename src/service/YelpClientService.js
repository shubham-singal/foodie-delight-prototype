import {API_KEY, PUBLIC_SERVER_URL} from '../common/constants'

export const searchBusinesses = async (term, location) => {
    let response = await fetch(`${PUBLIC_SERVER_URL}/businesses/search?term=${term}&location=${location}`, {
        method: 'GET',
        headers: {
            'ContentType': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${API_KEY}`,
        }
        ,
        params: {
            'location': location,
            'term': term
        }
    })
    return response.json();
};

export const findDetailById = async (id) => {
    let response = await fetch(`${PUBLIC_SERVER_URL}/businesses/${id}`, {
        method: 'GET',
        headers: {
            'ContentType': 'application/json',
            'Authorization': `Bearer ${API_KEY}`,
        }
    })
    return response.json();
}
