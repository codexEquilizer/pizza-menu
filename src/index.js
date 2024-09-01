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
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price="10"
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms, blue cheese"
        photoName="pizzas/funghi.jpg"
        price="12"
      />
    </main>
  );
};

function Pizza(props) {
  console.log(props);
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{+props.price}</span>
      </div>
    </div>
  );
}

const Footer = () => {
  const hours = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hours >= openHour && hours <= closeHour;
  // console.log(isOpen);

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} We're currently{" "}
      {isOpen ? "open" : "closed"}!
    </footer>
  );
  // return React.createElement("footer", null, "We're currently open");
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
