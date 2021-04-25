export const API_KEY = "3PWKuTnTnZE92jppIUjcD01ksFsnB1HaGV4if1zNpxqGxyFBvZmGM09odFpwOUdY3qMILcrpsH8-H0VD8ebpx6y1EEhbcx2hIsVPWLtsgoQVfNAu6mIZsknoiHGAYHYx";
export const PUBLIC_SERVER_URL = "http://cors-anywhere.herokuapp.com/http://api.yelp.com/v3/"
export const HEROKU_SERVER_URL = "http://localhost:8080"
export const BUSINESSES_API_URL = "http://localhost:8080/api/businesses"
export const OWNERS_BUSINESSES_API_URL = (ownerId) => `http://localhost:8080/api/owners/${ownerId}/businesses`
export const REVIEWS_API_URL = "http://localhost:8080/api/reviews"
export const USERS_REVIEWS_API_URL = (userId) => `http://localhost:8080/api/users/${userId}/reviews`
export const BUSINESSES_REVIEWS_API_URL = (businessId) => `http://localhost:8080/api/businesses/${businessId}/reviews`

