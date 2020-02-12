import React, {Component} from "react";
import "./house.css";
import Inquiry from "./inquiry";


class House extends Component {
    state = {
        showInquiry: false
    }

    toggleInquiry = () => {
        this.setState({showInquiry: !this.state.showInquiry});
    }

    render() {
        const house = this.props.house;
        const inquiry = this.state.showInquiry ?
            <Inquiry house={house}/> : null;

        return (
            <div className='wrapper'>
                <div className='row mt-2'>
                    <h5 className='col-md-12 country'>{house.country}</h5>
                </div>
                <div className='row'>
                    <h5 className='col-md-12'>{house.address}</h5>
                </div>
                <div className='row'>
                    <div className='col-md-7'>
                            <img className='picture'
                                 src={`https://images.pexels.com/photos/${house.photo}/pexels-photo-${house.photo}.jpeg?w=600&h=400&auto=compress&cs=tinysrgb`}
                                 alt="House"/>
                    </div>
                    <div className='col-md-5 property-info'>
                        <p className='price'>${house.price}</p>
                        <p>{house.description}</p>
                        <button className="btn btn-block btn-outline-dark" onClick={this.toggleInquiry}>
                            <i className="fa fa-envelope" ></i> Inquiries</button>
                        {inquiry}
                    </div>
                </div>
            </div>
        );
    }
}

export default House;