import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { men, women, kids, totalPeople } = location.state;

  // Adicione um estado para controlar o checkbox
  const [isChecked, setIsChecked] = useState(false);

  const handleNewCalculation = () => {
    navigate("/");
  };

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
                <span>0.0 kg</span>
              </li>
              <li>
                <strong>Pão de Alho</strong>
                <span>0 unidades</span>
              </li>
              <li>
                <strong>Refrigerante</strong>
                <span>1 garrafa de 2 L</span>
              </li>
              <li>
                <strong>Água</strong>
                <span>0 garrafa de 1 L</span>
              </li>
              <li>
                <strong>Carvão</strong>
                <span>0 kg</span>
              </li>
              <li>
                <strong>Sal</strong>
                <span>0.00 kg</span>
              </li>
              <li>
                <strong>Gelo</strong>
                <span>0.0 kg</span>
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
