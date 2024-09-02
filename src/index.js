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
      <ul className="pizzas">
        {/* Here we don't use forEach because here we actually need a JSX and we can do that by creating a new array. So we use map for that since it creates a new array. */}
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} /> //We need to pass a key in react.
        ))}
      </ul>
    </main>
  );
};

function Pizza(props) {
  console.log(props.pizzaObj);
  return (
    <div className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{+props.pizzaObj.price}</span>
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
