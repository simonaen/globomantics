import React from "react";
import House from "../house";

const FeaturedHouse = (props) => {
    if (props.house) return (
        <div>
            <div className='row featuredHouse'>
                <h2 className='col-md-12'>
                    Featured house
                </h2>
            </div>
            <House house={props.house} />
        </div>
    );
    return (<div>No featured house at this time!</div>);

}

export default FeaturedHouse;