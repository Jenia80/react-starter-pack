import React, { Component } from 'react';
import { DrinkBuy } from '../../components/DrinkBuy/DrinkBuy';
import './home-page.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      drinks: [],
    };
  }

  componentDidMount() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            drinks: result.drinks,
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  render() {
    const { error, isLoaded, drinks } = this.state;

    if (error) {
      return <p> Error </p>;
    }

    if (!isLoaded) {
      return <p> Loading... </p>;
    }

    return (
      <div className="wrapper">
        {drinks.map(drink => (
          <div className="drinkCard">
            <div drinkCard__pic>
              <img
                src={drink.strDrinkThumb}
                alt="pic"
                className="drinkCard__img"
              />
            </div>

            <div className="drinkCard__name">
              {drink.strDrink}
            </div>

            <DrinkBuy drink={drink} onClick={this.addToOrder} />
          </div>
        ))}
      </div>

    );
  }
}

export default Home;
