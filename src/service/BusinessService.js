import {BUSINESSES_API_URL, OWNERS_BUSINESSES_API_URL} from "../common/constants";

export const findBusinessesForOwner = async (ownerId) => {
    let response = await fetch(OWNERS_BUSINESSES_API_URL(ownerId))
    return await response.json()
}

export const createBusiness = async (ownerId, business) => {
    let response = await fetch(OWNERS_BUSINESSES_API_URL(ownerId), {
        method: 'POST',
        body: JSON.stringify(business),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
}

export const updateBusiness = async (business) => {
    let response = await fetch(`${BUSINESSES_API_URL}/${business.id}`, {
        method: 'PUT',
        body: JSON.stringify(business),
        headers: {
            "content-type": "application/json"
        }
    })
    return await response.json()
}

export const deleteBusiness = async (businessId) => {
    let response = await fetch(`${BUSINESSES_API_URL}/${businessId}`, {
        method: 'DELETE'
    })
    return await response.json()
}
