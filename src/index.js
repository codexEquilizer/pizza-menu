import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  /* const style = {
    color: "orangered",
    fontSize: "48px",
    textTransform: "uppercase",
  }; */

  return (
    <header className="header">
      <h1>Fast React Pizza CO.</h1>;
    </header>
  );
}

const Menu = function () {
  const pizzas = pizzaData;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {/* Here we don't use forEach because here we actually need a JSX and we can do that by creating a new array. So we use map for that since it creates a new array. */}

      {pizzas.length > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>W're still working on our menu. Please come again later!</p>
      )}
    </main>
  );
};

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  if (pizzaObj.soldOut) return null;

  return (
    <div className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{+pizzaObj.price}</span>
      </div>
    </div>
  );
}

const Footer = () => {
  const hours = new Date().getHours();
  const openHour = 12;
  const closeHour = 23;
  const isOpen = hours >= openHour && hours <= closeHour;
  // console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHours={closeHour} openHours={openHour} />
      ) : (
        <p>
          We're happy to host you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
  // return React.createElement("footer", null, "We're currently open");
};

function Order({ closeHours, openHours }) {
  return (
    <div className="order">
      <p>
        We're open from {openHours}:00 to {closeHours}:00. Come visit us or
        order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
