import React, {Component} from "react";

class HouseFilter extends Component {
    state = {}

    /* Sends selected country to App component in order to
        display countries satisfying the filter. */
    onSearchChange = (e) => {
        const country = e.target.value;
        this.props.filterHouses(country);
    }

    render() {
        const search = this.state.search;
        const countries = this.props.countries || [];

        return (
            <div className="form-group row mt-3">
                <div className="offset-lg-4 col-md-4">
                   <p>Look for your dream house in country:</p>
                </div>
                <div className="col-lg-4">
                    <select className="form-control" value={search} onChange={this.onSearchChange}>
                        {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                </div>
            </div>
        );
    }
}

export default HouseFilter;