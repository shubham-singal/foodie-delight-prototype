import React from 'react';
import {findDetailById} from "../../service/YelpClientService";
import {findReviewsForBusiness, createReview} from "../../service/ReviewService";

class BusinessDetailComponent extends React.Component {
    state = {
        details: {},
        reviews: [],
        yourRating: 5,
        yourComment: "No comments"
    }

    componentDidMount() {
        findDetailById(this.props.id)
            .then(response => this.setState({
                details: response
            }))
        this.findReviewsForBusiness()
    }

    findReviewsForBusiness = () => {
        findReviewsForBusiness(this.props.id)
            .then(reviews => this.setState({
                reviews: reviews
            }))
    }

    createNewReview = (review) => {
        createReview(this.props.id, review)
            .then(actual => {
                return this.findReviewsForBusiness()
            })
    }

    gotoProfile = (userId) => {
        if(userId === this.props.currentUser.id)
            this.props.history.push("/profile")
        else
            this.props.history.push('/profile/' + userId)
    }

    render() {
        return (
            <div>
                <div className="row">
                    {
                        this.state.details.photos && this.state.details.photos.map((photo, i) =>
                            <div className="col-4 px-0" key={i}>
                                <img className="img-thumbnail" src={photo} alt="bussinessPhoto"
                                     style={{height: '300px', width: '100%'}}/>
                            </div>
                        )
                    }
                </div>
                <div className="container" style={{paddingBottom: 10}}>
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10">
                            <div className="row mt-3">
                                <div className="col-sm-12 col-md-8">
                                    <h1>{this.state.details.name}</h1>
                                    {this.state.details.isOpen && <h4 style={{color: "green"}}>Open now</h4>}
                                    {!this.state.details.isOpen && <h4 style={{color: "red"}}>Closed now</h4>}
                                    <div className="row mt-3">
                                        <div className="col">
                                            Rating: {this.state.details.rating}
                                        </div>
                                        <div className="col">
                                            Price: {this.state.details.price}
                                        </div>
                                        <div className="col">
                                            Reviews: {this.state.reviews.length}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 my-auto">
                                    <ul className="list-group">
                                        <li className="list-group-item"><i className="fa fa-map-pin mr-2"/>
                                        {this.state.details.address && this.state.details.address}
                                        {!this.state.details.address && 'Address Unknown'}
                                        </li>
                                        <li className="list-group-item"><i className="fa fa-phone mr-2"/>{this.state.details.phone}</li>
                                        <li className="list-group-item">
                                            <a href={this.state.details.url}>
                                                <i className="fa fa-link mr-2"/>{this.state.details.name}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr/>
                            <h4 className="ml-3 text-left" style={{color: "#aa0000"}}>All Reviews</h4>
                            <div className="row m-3">
                                {
                                    this.state.reviews.length === 0 &&
                                        <p className="ml-5">No Review</p>
                                }
                                {
                                    this.state.reviews && this.state.reviews.map((review, i) =>
                                            <div className="col-sm-6 my-3" key={i}>
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h5 className="card-title">
                                                            <span onClick={() => this.gotoProfile(review.userId)} style={{color: '#2394eb', cursor: 'pointer'}}>
                                                            {review.username}
                                                            </span>
                                                        </h5>
                                                        <h6 className="card-subtitle">
                                                            <small className="text-muted">
                                                                Rating: {review.rating}
                                                            </small>
                                                        </h6>
                                                        <p className="card-text text-truncate" style={{textOverflow: 'hidden'}}>{review.content}</p>
                                                    </div>
                                                </div>
                                            </div>
                                    )
                                }
                            </div>
                            <hr/>
                            {
                                this.props.currentUser.role === "CUSTOMER" &&
                                <div className="container mt-3" style={{padding: 1.5 + 'em'}}>
                                    <div className="row mb-2">
                                        <div className="col-lg-2 d-none d-lg block"></div>
                                        <div className="col-sm-12 col-lg-8">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <h6 className="my-auto">Your Rating</h6>
                                                </div>
                                                <select className="custom-select mx-3"
                                                        onChange={(e) => {
                                                            const rating = e.target.value
                                                            this.setState({
                                                                yourRating: rating
                                                            })
                                                        }}>
                                                    <option value={5}>5</option>
                                                    <option value={4}>4</option>
                                                    <option value={3}>3</option>
                                                    <option value={2}>2</option>
                                                    <option value={1}>1</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 d-none d-lg block"/>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-2 d-none d-lg block"/>
                                        <div className="col-sm-12 col-lg-8">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <h6> Comment </h6>
                                                </div>
                                                <textarea className="form-control mx-4"
                                                          maxLength="250"
                                                          placeholder="No more than 250 characters"
                                                          onChange={(e) => {
                                                              const comment = e.target.value
                                                              this.setState({
                                                                  yourComment: comment
                                                              })
                                                          }}/>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-success mt-4"
                                            onClick={() => this.createNewReview({
                                                userId: this.props.currentUser.id,
                                                username: this.props.currentUser.username,
                                                businessTitle: this.state.details.name,
                                                rating: this.state.yourRating,
                                                content: this.state.yourComment,
                                                businessUrl: this.state.details.image_url
                                            })}>Post Review
                                    </button>
                                </div>
                            }
                            {this.props.currentUser.role !== "CUSTOMER" &&
                            <h6 className="form-group row m-3" style={{color: "red"}}>
                                Log in as CUSTOMER to post reviews!</h6>
                            }
                        </div>
                        <div className="col-1"></div>
                    </div>

                </div>
            </div>
        )
    }
}

export default BusinessDetailComponent
