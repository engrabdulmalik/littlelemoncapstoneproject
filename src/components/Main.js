import menu from "../assets/images/menu.jpg";
import reserve from "../assets/images/reservetable.jpeg";
import opening from "../assets/images/openinghours.jpeg";
import bannerimage from "../assets/images/restauranfood.jpg";

import "../assets/css/main.css";
const Main = () => {
  return (
    <main className="container">
      <section class="banner">
        <article></article>
        <article className="article1">
          <h1 className="trans">Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a Family Owned Mediterranean restaurant, focused on
            traditional recipes with a Modern Twist
          </p>
          <button>Reserve a Table</button>
        </article>
        <article>
          <img className="bannerimage" src={bannerimage} alt="here" />
        </article>
        <article></article>
      </section>
      <section class="parent">
        <article class="card">
          <h1>Our New Menu</h1>
          <br />
          <img src={menu} alt="" class="img" />
          <br />
          <p>
            Based in Chicago, Illinois, Little Lemon is a family-owned
            Mediterranean restaurant, focused on traditional recipes served with
            a modern twist. The chefs draw inspiration from Italian, Greek, and
            Turkish culture and have a menu of 12-15 items that they rotate
            seasonally.
          </p>
        </article>
        <article class="card">
          <h1>Book a Table</h1>
          <br />
          <img src={reserve} alt="" class="img" />
          <br />
          <p>
            Based in Chicago, Illinois, Little Lemon is a family-owned
            Mediterranean restaurant, focused on traditional recipes served with
            a modern twist. The chefs draw inspiration from Italian, Greek, and
            Turkish culture and have a menu of 12-15 items that they rotate
            seasonally.
          </p>
        </article>
        <article class="card">
          <h1>Opening Hours</h1>
          <br />
          <img src={opening} alt="" class="img" />
          <br />
          <p>
            Based in Chicago, Illinois, Little Lemon is a family-owned
            Mediterranean restaurant, focused on traditional recipes served with
            a modern twist. The chefs draw inspiration from Italian, Greek, and
            Turkish culture and have a menu of 12-15 items that they rotate
            seasonally.
          </p>
        </article>
      </section>
    </main>
  );
};

export default Main;
