import React from 'react';

class LocalBusinessListItem extends React.Component {

    state = {
        business: this.props.business,
        editing: false
    }

    editBusiness = () => {
        this.setState({
            editing: true
        })
    }

    saveBusiness = () => {
        this.props.updateBusiness(this.state.business)
        this.setState({
            editing: false
        })
    }

    deleteBusiness = () => {
        this.props.deleteBusiness(this.props.business.id)
        this.setState({
            editing: false
        })
    }


    render() {
        return (
            <div className="row mt-1">
                {!this.state.editing &&
                <div className="col-4">{this.props.business.name}</div>
                }
                {this.state.editing &&
                <input value={this.state.business.name}
                       className="col-4"
                       onChange={(e) => {
                           const newName = e.target.value
                           this.setState(prevState => ({
                               business: {
                                   ...prevState.business,
                                   name: newName
                               }
                           }))
                       }}/>
                }

                {!this.state.editing &&
                <div className="col-4">{this.props.business.type}</div>
                }
                {this.state.editing &&
                <input value={this.state.business.type}
                       className="col-4 ml-1"
                       onChange={(e) => {
                           const newType = e.target.value
                           this.setState(prevState => ({
                               business: {
                                   ...prevState.business,
                                   type: newType
                               }
                           }))
                       }}/>
                }

                {!this.state.editing && this.props.ownPage &&
                <div className="col-3">
                    <button className="btn btn-outline-info"
                            onClick={this.editBusiness}>Edit
                    </button>
                </div>
                }
                {this.state.editing &&
                <span>
                    <button className="btn btn-outline-success ml-3"
                            onClick={this.saveBusiness}>Save</button>
                    <button className="btn btn-outline-danger ml-1"
                            onClick={this.deleteBusiness}>Delete</button>
                </span>
                }
            </div>
        )
    }
}

export default LocalBusinessListItem
