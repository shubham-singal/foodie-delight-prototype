import React from 'react';
import RecentReviewsComponent from "./RecentReviewsComponent";
import EventPillsComponent from "./EventPillsComponent";
import "./HomePage.css";

class HomePageComponent extends React.Component {
    componentDidMount() {

    }

    state = {
        keyword: '',
        location: ''
    }

    render() {
        return (
            <div>
                <div style={{
                    backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/5c5c3833840b161566b02a76/1573133725500-Y5PCN0V04I86HDAT8AT0/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/WBC_7095.jpg?format=2500w')`,
                    height: '500px', width: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                }}>
                    <div className="d-flex align-items-center justify-content-center" style={{height: '400px'}}>
                        <div className="col-lg-12">
                            <h1 className="text-center"
                                style={{color: 'white', fontFamily: 'cursive', fontWeight: '800'}}>Foodie's Delight</h1>
                            <hr/>
                            <a href="/search" className="btn btn-success pl-2" style={{color: 'white'}}>
                                Search for restaurants<i className="fa fa-search ml-2"/></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1 d-none d-md-block"></div>
                    <div className="col-sm-12 col-md-10">
                        <div className="row">
                            <div className="col-md-7 col-lg-8">
                                {
                                    this.props.currentUser.id !== '' &&
                                    <RecentReviewsComponent
                                        history={this.props.history}
                                        currentUser={this.props.currentUser}/>
                                }
                                <EventPillsComponent
                                    currentUser={this.props.currentUser}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1 d-none d-md-block"></div>
                </div>
            </div>
        )
    }
}

export default HomePageComponent
