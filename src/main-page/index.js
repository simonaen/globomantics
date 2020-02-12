import React, {Component} from 'react';
import './main-page.css';
import Header from "./header";
import FeaturedHouse from "./featured-house";
import HouseFilter from "./house-filter";

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
                console.log(allHouses)
                this.allHouses = allHouses;
                this.determineFeatureHouse();
                this.determineUniqueCountries();
            })
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
        const filteredHouses = this.allHouses.filter((h) => h.country === country);
        this.setState({filteredHouses});
        this.setState({country});
    }

    setActiveHouse = (house) => {
        this.setState({activeHouse: house})
    }

  render(){
      return (
    <div className="container">
      <Header subtitle="Providing houses world wide"/>
      <HouseFilter countries={this.state.countries} filterHouses={this.filterHouses()}/>
      <FeaturedHouse house={this.state.featuredHouse} />
    </div>
  );
  }
}

export default App;
