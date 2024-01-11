import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Title } from "../Components/ComponentesGerais/Title";
import Theme from "../Components/ComponentesGerais/Theme";

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { men = 0, women = 0, kids = 0 } = location.state || {};

  const totalPeople = men + women + kids;

  const [isChecked, setIsChecked] = useState(false);

  const handleNewCalculation = () => {
    navigate("/");
  };

  const totalMeat = men * 0.5 + women * 0.3 + kids * 0.15;

  const totalDrink = totalPeople;
  const totalIce = totalPeople * 0.5;
  const totalCoal = totalPeople * 0.5;
  const totalSalt = totalPeople * 0.005; // 5 gramas é igual a 0.005 kg
  const totalGarlicBread = men + women + kids * 0.5;

  return (
    <div className="container">
      <Title />
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
      <Theme />
    </div>
  );
};

export default ResultsPage;
