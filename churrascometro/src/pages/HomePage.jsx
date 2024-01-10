import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [men, setMen] = useState(0);
  const [women, setWomen] = useState(0);
  const [kids, setKids] = useState(0);
  const [totalPeople, setTotalPeople] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const calculateTotalPeople = () => {
    if (men === 0 && women === 0 && kids === 0) {
      alert("Por favor, preencha o formulário antes de calcular.");
      return;
    }

    setTotalPeople(men + women + kids);
  };

  useEffect(() => {
    if (totalPeople > 0) {
      navigate("/form", { state: { totalPeople, men, women, kids } });
    }
  }, [totalPeople, navigate, men, women, kids]);

  return (
    <div className="container">
      <h1>Churrascômetro</h1>
      <div className="calculator">
        <h3>
          Precisa de uma ajudinha com o churrasco? :)
          <br />
          <br />
          Quantas pessoas vão participar?
        </h3>
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
      <div className="theme-container">
        <label id="label-theme-text" htmlFor="input-theme">
          Tema Escuro
        </label>
        <label className="switch">
          <input
            type="checkbox"
            id="input-theme"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span className="slider"></span>
        </label>
      </div>
      <div>
        <h2>Total de pessoas: {totalPeople}</h2>
      </div>
    </div>
  );
};

export default HomePage;
