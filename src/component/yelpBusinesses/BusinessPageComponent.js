import React from 'react';
import BusinessWidgetComponent from "./BusinessWidgetComponent";

class BusinessPageComponent extends React.Component{
    render () {
        return(
            <div className="row mt-3">
                    {
                        this.props.businesses && this.props.businesses.map((business, i) =>
                            <BusinessWidgetComponent
                                key={i}
                                id={business._id}
                                business={business}/>
                        )
                    }
            </div>
        )
    }
}
export default BusinessPageComponent
