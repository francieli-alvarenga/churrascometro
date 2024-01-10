import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { men = 0, women = 0, kids = 0 } = location.state || {};

  // Calcular o total de pessoas
  const totalPeople = men + women + kids;

  // Adicione um estado para controlar o checkbox
  const [isChecked, setIsChecked] = useState(false);

  const handleNewCalculation = () => {
    navigate("/");
  };

  // Calcular a quantidade total de carne
  const totalMeat = men * 0.5 + women * 0.3 + kids * 0.15;

  // Calcular a quantidade total de refrigerante e água
  const totalDrink = totalPeople;

  // Calcular a quantidade total de gelo e carvão
  const totalIce = totalPeople * 0.5;
  const totalCoal = totalPeople * 0.5;

  // Calcular a quantidade total de sal
  const totalSalt = totalPeople * 0.005; // 5 gramas é igual a 0.005 kg

  // Calcular a quantidade total de pão de alho
  const totalGarlicBread = men + women + kids * 0.5;

  return (
    <div className="container">
      <h1>Churrascômetro</h1>
      <div className="calculator">
        <div>
          <div className="result-total-guest">
            <p>Confira a lista para o seu churrasco!</p>
            <p id="total-guest">{totalPeople} convidado(s)</p>
            <span className="guest-list">{men} homem(ns)</span>
            <span className="guest-list">{women} mulher(es)</span>
            <span className="guest-list">{kids} criança(s)</span>
          </div>
          <div className="input-group-result">
            <div id="header-result">
              <p>ITEM</p>
              <p>QUANTIDADE</p>
            </div>
            <ul className="results">
              <li>
                <strong>Carne</strong>
                <span>{totalMeat.toFixed(1)} kg</span>
              </li>
              <li>
                <strong>Pão de Alho</strong>
                <span>{totalGarlicBread.toFixed(1)} unidades</span>
              </li>
              <li>
                <strong>Refrigerante</strong>
                <span>{totalDrink} L</span>
              </li>
              <li>
                <strong>Água</strong>
                <span>{totalDrink} L</span>
              </li>
              <li>
                <strong>Carvão</strong>
                <span>{totalCoal.toFixed(1)} kg</span>
              </li>
              <li>
                <strong>Sal</strong>
                <span>{totalSalt.toFixed(3)} kg</span>
              </li>
              <li>
                <strong>Gelo</strong>
                <span>{totalIce.toFixed(1)} kg</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div>
            <button className="default-button" onClick={handleNewCalculation}>
              Novo cálculo
            </button>
          </div>
        </div>
      </div>
      <div className="theme-container">
        <label id="label-theme-text" htmlFor="input-theme">
          Tema Escuro
        </label>
        <label className="switch">
          <input
            type="checkbox"
            id="input-theme"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};

export default ResultsPage;
