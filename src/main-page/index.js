import React, {Component} from 'react';
import './main-page.css';
import Header from "./header";
import FeaturedHouse from "./featured-house";
import HouseFilter from "./house-filter";
import SearchResults from "../search-results";
import House from "../house";

class App extends Component {
    state = {}

    componentDidMount() {
        this.fetchHouses();
    }

    /* Gets all houses from static .json file. */
    fetchHouses = () => {
        fetch('/houses.json')
            .then(res => res.json())
            .then(allHouses => {
                this.allHouses = allHouses;
                this.determineFeatureHouse();
                this.determineUniqueCountries();
            });
    }

    /* Picks a random house to display as the "Featured House" on the main page. */
    determineFeatureHouse = () => {
        if (this.allHouses) {
            const randomIndex = Math.floor(Math.random() * this.allHouses.length);
            const featuredHouse = this.allHouses[randomIndex];
            this.setState({featuredHouse});
        }
    }

    /* Creates a set of unique values (countries) in order to display them in a dropdown. */
    determineUniqueCountries = () => {
        const countries = this.allHouses
            ? Array.from(new Set(this.allHouses.map(h => h.country)))
            : [];

        countries.unshift(null);
        this.setState({countries});
    }

    /* Filter houses by country. */
    filterHouses = (country) => {
        this.setState({ activeHouse: null });
        const filteredHouses = this.allHouses.filter((h) => h.country === country);
        this.setState({filteredHouses});
        this.setState({country});
    }

    /* Add selected house to state. */
    setActiveHouse = (house) => {
        this.setState({activeHouse: house})
    }

    render() {
        let activeComponent = null;
        if (this.state.country)
            activeComponent = <SearchResults country={this.state.country}
                                             filteredHouses={this.state.filteredHouses} setActiveHouse={this.setActiveHouse} />;
        if (this.state.activeHouse)
            activeComponent = <House house={this.state.activeHouse}/>;

        return (
            <div className="container">
                <Header subtitle="Providing houses world wide"/>
                <HouseFilter countries={this.state.countries} filterHouses={this.filterHouses}/>
                { activeComponent ? activeComponent : <FeaturedHouse house={this.state.featuredHouse} />}
            </div>
        );
    }
}

export default App;
