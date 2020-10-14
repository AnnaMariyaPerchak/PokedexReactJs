import React from "react";
import { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import PokemonCard from "./components/PokemonCard";
import PokemonDetail from "./components/PokemonDetail";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      pokemonDetails: [],
      offset: 0,
      loadNumber: 12,
      pokemon: {},
    };
    this.handleMoreClick = this.handleMoreClick.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  getNextOffset() {
    return this.state.offset + this.state.loadNumber;
  }

  handleMoreClick(event) {
    const newOffset = this.getNextOffset();
    this.setState({ offset: newOffset }, () => {
      console.log("Offset: " + this.state.offset);
      this.getMorePokemon();
    });
  }

  componentDidMount() {
    this.getMorePokemon();
  }

  getMorePokemon() {
    let url =
      "https://pokeapi.co/api/v2/pokemon?offset=" +
      this.state.offset +
      "&limit=" +
      this.state.loadNumber;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          this.setState({ pokemons: data.results });
          this.state.pokemons.map((pokemon) => {
            fetch(pokemon.url)
              .then((response) => response.json())
              .then((data) => {
                if (data) {
                  var temp = this.state.pokemonDetails;
                  temp.push(data);
                  this.setState({ pokemonDetails: temp });
                }
              })
              .catch(console.log);
          });
        }
      })
      .catch(console.log);
  }

  handleOnClick(id) {
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        const pokemon = data;
        this.setState({ pokemon });
        console.log(this.state.pokemon);
      })
      .catch((err) => console.log(err));
    document.getElementById("pokemonDetail").style.visibility = "visible";
  }

  render() {
    const { pokemonDetails } = this.state;
    const renderedPokemonList = pokemonDetails.map((pokemon, index) => {
      return (
        <PokemonCard pokemon={pokemon} handleOnClick={this.handleOnClick} />
      );
    });

    return (
      <div>
        <Header />
        <div style={{ display: "inline-flex" }}>
          <div style={{ width: "80%", marginBottom: "15px" }}>
            <div className="pokemonCardsRow">{renderedPokemonList}</div>
            <div className="buttonLoadMore">
              <button type="button" key="more-button" id="more-button" onClick={this.handleMoreClick}>Load More</button>
            </div>
          </div>
          <div id="pokemonDetail">
            <PokemonDetail pokemon={this.state.pokemon} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
