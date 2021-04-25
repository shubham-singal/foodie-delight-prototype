import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import HomePageComponent from "../component/homepage/HomePageComponent"
import YelpClientComponent from "../component/yelpBusinesses/YelpClientComponent";
import BusinessDetailComponent from "../component/yelpBusinesses/BusinessDetailComponent";


class FoodieDelightContainer extends React.Component {
    state = {
        currentUser: {
            id: '',
            username: '',
            email: '',
            firstName: '',
            lastName: '',
            role: ''
        }
    }

        



    render() {
        return (
            <Router>
                <div className="App m-0 p-0" style={{width: '100%', height: '100%', overflowX: 'hidden'}}>
                    <Route path="/" exact={true} render={(props) =>
                        <HomePageComponent
                            {...props}
                            currentUser={this.state.currentUser}/>}/>
                    <Route path="/search" render={(props) =>
                        <YelpClientComponent
                            {...props}
                            keyword={props.match.params.keyword === undefined ? '': props.match.params.keyword}
                            location={props.match.params.location === undefined ? '': props.match.params.location}/>}/>
                    <Route path="/details/:id" exact={true} render={(props) =>
                        <BusinessDetailComponent
                            {...props}
                            currentUser={this.state.currentUser}
                            id={props.match.params.id}
                        />}/>

                </div>
            </Router>
        )
    }
}

export default FoodieDelightContainer
