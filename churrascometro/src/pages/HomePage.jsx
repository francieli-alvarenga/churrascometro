import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Title } from "../Components/ComponentesGerais/Title";
import { SubTitle } from "../Components/Home/SubTitle";
import Theme from "../Components/ComponentesGerais/Theme";

const HomePage = () => {
  const [men, setMen] = useState(0);
  const [women, setWomen] = useState(0);
  const [kids, setKids] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [totalPeople, setTotalPeople] = useState(0); // Adicione este estado

  const navigate = useNavigate();

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const calculateTotalPeople = () => {
    if (men === 0 && women === 0 && kids === 0) {
      alert("Por favor, preencha o formulário antes de calcular.");
      return;
    }

    const total = men + women + kids;
    setTotalPeople(total); // Atualize o estado aqui
    navigate("/form", { state: { totalPeople: total, men, women, kids } });
  };

  return (
    <div className="container">
      <Title />
      <div className="calculator">
        <SubTitle />
        <div className="row-first">
          <div className="input-group">
            <label htmlFor="men">Homens</label>
            <input
              type="number"
              id="men"
              value={men}
              className="input-valid"
              readOnly
            />
            <div className="button-group">
              <button
                className="input-group__button--small"
                onClick={() => setMen(Math.max(men - 1, 0))}
              >
                -
              </button>
              <button
                className="input-group__button--small"
                onClick={() => setMen(men + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="women">Mulheres</label>
            <input
              type="number"
              id="women"
              value={women}
              className="input-valid"
              readOnly
            />
            <div className="button-group">
              <button
                className="input-group__button--small"
                onClick={() => setWomen(Math.max(women - 1, 0))}
              >
                -
              </button>
              <button
                className="input-group__button--small"
                onClick={() => setWomen(women + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="kid">Crianças</label>
            <input
              type="number"
              id="kid"
              value={kids}
              className="input-valid"
              readOnly
            />
            <div className="button-group">
              <button
                className="input-group__button--small"
                onClick={() => setKids(Math.max(kids - 1, 0))}
              >
                -
              </button>
              <button
                className="input-group__button--small"
                onClick={() => setKids(kids + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div>
            <p id="invalid-input" style={{ visibility: "hidden" }}>
              Por favor, insira somente números!
            </p>
            <p id="no-input" style={{ visibility: "hidden" }}>
              Por favor, selecione a quantidade de pessoas!
            </p>
            <button onClick={calculateTotalPeople} className="default-button">
              Calcular
            </button>
          </div>
        </div>
      </div>
      <Theme />
    </div>
  );
};

export default HomePage;
