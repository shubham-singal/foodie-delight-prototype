import {
    REVIEWS_API_URL, BUSINESSES_REVIEWS_API_URL, USERS_REVIEWS_API_URL
} from "../common/constants";

export const findReviewsForBusiness = async (businessId) => {
    let response = await fetch(BUSINESSES_REVIEWS_API_URL(businessId))
    return await response.json()
}

export const findReviewsForUser = async (userId) => {
    let response = await fetch(USERS_REVIEWS_API_URL(userId))
    return await response.json()
}

export const createReview = async (businessId, review) => {
    let response = await fetch(BUSINESSES_REVIEWS_API_URL(businessId), {
        method: 'POST',
        body: JSON.stringify(review),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
}

export const updateReview = async (review) => {
    let response = await fetch(`${REVIEWS_API_URL}/${review.id}`, {
        method: 'PUT',
        body: JSON.stringify(review),
        headers: {
            "content-type": "application/json"
        }
    })
    return await response.json()
}

export const deleteReview = async (reviewId) => {
    let response = await fetch(`${REVIEWS_API_URL}/${reviewId}`, {
        method: 'DELETE'
    })
    return await response.json()
}

export const getRecentReviews = async () => {
    let response = await fetch(`${REVIEWS_API_URL}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        }
    })
    return response.json()
}

