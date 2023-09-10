import bg1 from "./images/bg1.png";
import './App.css';

function App() {
  return (
   <div>
      <body>
    <header>
        <nav className="navbar">
            <div className="logo">
                <a href="/">Your Logo</a>
            </div>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/cart">Cart</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </header>
</body>
<img src= {bg1} alt="Image Description"></img>

   </div>
  );
}

export default App;
