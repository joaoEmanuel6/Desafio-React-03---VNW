// Crie uma class component 
// Guarde em um state as seguintes propriedades: nome, idade, comida favorita, e uma array com pelo menos 3 músicas.
// Renderize na tela:
// Seu nome em um h1
// Sua idade em um h2
// Sua comida favorita em um h3
// Suas músicas favoritas em uma lista (ul / ol)
import React, { Component } from "react";
class perfil extends Component {
  state = {
    nome: "João",
    idade: 18,
    comidaFav: "Churrasco",
    musicas: ["Êxodo 15", "Epifania", "Braseiro"]
  };
  render() {
    return (
      <div>
        <h1>{this.state.nome}</h1>
        <h2>{this.state.idade}</h2>
        <h3>{this.state.comidaFav}</h3>
        <ul>
          <li>{this.state.musicas[0]}</li>
          <li>{this.state.musicas[1]}</li>
          <li>{this.state.musicas[2]}</li>
        </ul>
      </div>
    );
  }
}
export default perfil;
