import React from 'react';
import {getRecentEvents} from "../../service/EventService";
import "./Reviews.css";

class EventPillsComponent extends React.Component {
    componentDidMount() {
        getRecentEvents()
            .then(response => {
                this.setState({
                    events: response.events
                })
            })
    }

    state={
        events: []
    }

    render(){
        return (
            <div></div>
        )
    }
}

export default EventPillsComponent
