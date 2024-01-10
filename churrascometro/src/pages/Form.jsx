import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Obtenha os valores de men, women e kids do objeto state
  const { men, women, kids } = location.state;

  const [totalPeople, setTotalPeople] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  const handleRegister = () => {
    setTotalPeople(men + women + kids);
    navigate("/results", { state: { men, women, kids, totalPeople } });
  };

  return (
    <div className="container">
      <h1>Churrascômetro</h1>
      <div className="calculator">
        <div className="row">
          <div className="input-form-group">
            <p id="header-form">
              Fique por dentro de todas as novidades. Cadastre seu e-mail e
              receba promoções especiais!
            </p>
            <form>
              <input
                type="text"
                id="name"
                placeholder="Digite seu nome"
                className="input-form"
              />
              <p id="invalid-name">Por favor, insira um nome válido!</p>
              <input
                type="email"
                id="email"
                placeholder="Digite seu email"
                className="input-form"
              />
              <p id="invalid-email">Por favor, insira um e-mail válido!</p>
              <input
                type="number"
                id="postal-code"
                placeholder="Digite seu CEP"
                className="input-form"
              />
              <p id="error-postal-code">Por favor, insira um CEP válido!</p>
            </form>
            <div id="consent-input">
              <input
                type="checkbox"
                id="consent-checkbox"
                name="consentInput"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <label htmlFor="consent-checkbox" id="consent-label">
                Concordo em receber comunicações e ofertas personalizadas de
                acordo com meus interesses.
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div>
            <button className="default-button" onClick={handleRegister}>
              Cadastrar
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

export default Form;
