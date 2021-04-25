import React from 'react';
import {findBusinessesForOwner, createBusiness, updateBusiness, deleteBusiness} from "../../service/BusinessService";
import LocalBusinessListItem from "./LocalBusinessListItem";

class LocalBusinessListComponent extends React.Component {
    componentDidMount() {
        this.findBusinessesForOwner()
    }

    state = {
        businesses: [],
        newBusinessName: '',
        newBusinessType: ''
    }

    findBusinessesForOwner = () => {
        findBusinessesForOwner(this.props.ownerId)
            .then(businesses => this.setState({
                businesses: businesses
            }))
    }

    createNewBusiness = (business) => {
        createBusiness(this.props.ownerId, business).then(actual => {
            return this.findBusinessesForOwner()
        })
    }

    updateBusiness = (business) => {
        updateBusiness(business)
            .then(status => {
                return this.findBusinessesForOwner()
            })
    }

    deleteBusiness = (businessId) => {
        deleteBusiness(businessId)
            .then(status => {
                return this.findBusinessesForOwner()
            })
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-left ml-1" style={{color: '#f05637', fontFamily: 'Oswald', fontWeight: '500'}}>Owned Businesses</h3>
                <div className="container" style={{padding: 10, border: "1px solid #ddd", borderRadius: 5}}>
                    <div className="row">
                        <h6 className="col-4">Name</h6>
                        <h6 className="col-4">Type</h6>
                    </div>
                    {
                        this.props.ownPage &&
                            <div className="row mb-3 ml-3">
                                <input className="col-4" placeholder="Business Name"
                                       onChange={(e) => {
                                           const newName = e.target.value
                                           this.setState({
                                               newBusinessName: newName
                                           })
                                       }
                                       }/>
                                <input className="col-4 ml-1" placeholder="Business Type"
                                       onChange={(e) => {
                                           const newType = e.target.value
                                           this.setState({
                                               newBusinessType: newType
                                           })
                                       }}/>
                                <button className="btn btn-primary col-3 ml-2"
                                        onClick={() => this.createNewBusiness({
                                            name: this.state.newBusinessName,
                                            type: this.state.newBusinessType
                                        })}>Create Business
                                </button>
                            </div>
                    }

                    {this.state.businesses && this.state.businesses.map((business, index) =>
                        <LocalBusinessListItem
                            key={business.id}
                            business={business}
                            ownPage={this.props.ownPage}
                            updateBusiness={this.updateBusiness}
                            deleteBusiness={this.deleteBusiness}/>
                    )
                    }
                </div>
            </div>
        )
    }
}

export default LocalBusinessListComponent
