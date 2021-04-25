import React from 'react';
import {Link} from "react-router-dom";
class BusinessWidgetComponent extends React.Component{
    render () {
        return(
            <div className="col-lg-4 col-md-6 my-2">
                <div className="card m-1 p-3">
                    <Link to={`/details/${this.props.business.id}`}>
                    <img className="card-img-top" src={this.props.business.image_url} alt="businessImg" style={{height: '200px'}}/>
                    </Link>
                    <div className="card-body p-1">
                        <div className="row">
                            <h5 className="card-title d-block text-truncate">
                                <Link to={`/details/${this.props.business.id}`} className="col-sm-6 col-md-4 col-lg-4">
                                    {this.props.business.name}
                                </Link>
                            </h5>
                        </div>
                        <div className="row">
                            <p className="px-3 text-truncate" style={{color: 'gray'}}>
                                {this.props.business.location.address1}  |  {this.props.business.display_phone}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default BusinessWidgetComponent
