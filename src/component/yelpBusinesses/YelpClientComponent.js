import React from 'react';
import {searchBusinesses} from "../../service/YelpClientService"
import BusinessPageComponent from "./BusinessPageComponent";


class YelpClientComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        keyword: this.props.keyword,
        location: this.props.location,
        recommend: [],
        businesses: []
    }

    componentDidMount() {
    }

    keywordChanged = (event) => {
        this.setState(
            {keyword: event.target.value}
        );
    };

    locationChanged = (event) => {
        this.setState(
            {location: event.target.value}
        );
    };

    searchBusiness = () => {
        let term = this.state.keyword;
        let location = this.state.location;
        if (!location) {
            alert('Please enter the location.')
            return
        }
        searchBusinesses(term, location)
            .then(response => {
                this.renderBusinesses(response)
            })
    };

    renderBusinesses = (response) => {
        if (response.total === 0) {
            alert('Nothing found!')
            this.setState({
                keyword: '',
                location: '',
                businesses: []
            })
            this.props.history.push("/search")
        }
        else{
            this.props.history.push(`/search/keyword=${this.state.keyword}&location=${this.state.location}`)
            this.setState({
                businesses: response.businesses
            })
        }
    };

    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-12">
                        <div className="px-3 my-1">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Find</span>
                                </div>
                                <input className="form-control" value={this.state.keyword}
                                       onChange={this.keywordChanged} placeholder="Restaurants, sushi, delivery..."/>
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Near</span>
                                </div>
                                <input className="form-control" value={this.state.location}
                                       onChange={this.locationChanged} placeholder="Location (Required)"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary" id="searchBtn"
                                            onClick={this.searchBusiness}>Search
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <BusinessPageComponent businesses={this.state.businesses}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default YelpClientComponent
