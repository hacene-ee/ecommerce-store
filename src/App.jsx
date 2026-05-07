import "./App.css";

function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <h2>MyShop</h2>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Cart 🛒</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <h1>Welcome to MyShop</h1>
        <p>Best products at the best prices</p>
        <button>Shop Now</button>
      </header>

      {/* PRODUCTS */}
      <section className="products">
        <h2>Featured Products</h2>

        <div className="grid">

          <div className="card">
            <h3>Shoes</h3>
            <p>$120</p>
          </div>

          <div className="card">
            <h3>Watch</h3>
            <p>$80</p>
          </div>

          <div className="card">
            <h3>Headphones</h3>
            <p>$60</p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 MyShop. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;