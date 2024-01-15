import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Title } from "../Components/ComponentesGerais/Title";
import Theme from "../Components/ComponentesGerais/Theme";

const Form = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Obtenha os valores de men, women e kids do objeto state
  const { men, women, kids } = location.state;

  const [totalPeople, setTotalPeople] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleChange = (event) => {
    switch (event.target.id) {
      case "name":
        setName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "postal-code":
        setPostalCode(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleRegister = () => {
    if (name === "" || email === "" || postalCode === "") {
      alert("Por favor, preencha todos os campos do formulário.");
    } else {
      setTotalPeople(men + women + kids);
      navigate("/results", { state: { men, women, kids, totalPeople } });
    }
  };

  return (
    <div className="container">
      <Title />
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
                value={name}
                onChange={handleChange}
              />
              <p id="invalid-name">Por favor, insira um nome válido!</p>
              <input
                type="email"
                id="email"
                placeholder="Digite seu email"
                className="input-form"
                value={email}
                onChange={handleChange}
              />
              <p id="invalid-email">Por favor, insira um e-mail válido!</p>
              <input
                type="number"
                id="postal-code"
                placeholder="Digite seu CEP"
                className="input-form"
                value={postalCode}
                onChange={handleChange}
              />
              <p id="error-postal-code">Por favor, insira um CEP válido!</p>
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
            </form>
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
      <Theme />
    </div>
  );
};

export default Form;
