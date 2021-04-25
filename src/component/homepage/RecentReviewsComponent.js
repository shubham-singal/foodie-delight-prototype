import React from 'react';
import {Link} from "react-router-dom";
import {getRecentReviews} from '../../service/ReviewService'
import "./Reviews.css";

class RecentReviewsComponent extends React.Component {
    componentDidMount() {
        getRecentReviews().then(reviews => {
            this.setState({
                reviews: reviews
            })
        })
    }

    state = {
        reviews: []
    };

    showProfile = (userId) => {
        if (userId === this.props.currentUser.id)
            this.props.history.push('/profile')
        else
            this.props.history.push('/profile/' + userId)
    };

    showBusiness = (businessId) => {
        this.props.history.push('/details/' + businessId)
    };

    render() {
        return (
            <div className="container mt-2 mb-5">
                <h4 class="Reviews">Reviews</h4>
                <hr/>
                <div className="row">
                    {
                        this.state.reviews && this.state.reviews.map((review, i) =>
                            <div className="col-md-12 col-lg-6 mt-1 mb-2" key={i}>
                                <div className="card">
                                    <div className="row p-2">
                                        <div className="col-md-4">
                                            <Link to={`details/${review.businessId}`}>
                                                <img className="rounded" src={review.businessUrl}
                                                     style={{width: '100%', height: '8rem'}} alt="default-pic"/>
                                            </Link>
                                        </div>
                                        <div className="col-md-8 px-0">
                                            <div className="card-body p-0 pl-3">
                                                <Link to={`details/${review.businessId}`}>
                                                    <h5 className="card-title text-truncate text-left mb-0 mr-0"
                                                        style={{color: '#1989e3', fontFamily: 'Oswald', fontWeight: '200'}}>
                                                        <span style={{cursor: 'pointer'}}>
                                                            {review.businessTitle}
                                                        </span>
                                                    </h5>
                                                </Link>
                                                <p className="card-text text-left mb-0">
                                                    <small className="text-muted">
                                                        <span>rating: {review.rating}</span>
                                                    </small>
                                                </p>
                                                <p className="card-text text-left mb-1"
                                                   style={{height: '3rem', overflow: 'hidden'}}>{review.content}</p>
                                                <p className="card-text">
                                                    <small className="text-muted">
                                                        <span style={{cursor: 'pointer'}}
                                                              onClick={() => this.showProfile(review.userId)}>By {review.username}</span>
                                                    </small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default RecentReviewsComponent
