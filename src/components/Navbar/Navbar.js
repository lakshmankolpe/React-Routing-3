import "./Navbar.css"

function Navbar() {
  return (
    <>
      <div className="navbar-search-container">
        <a href="/" className="serach-item"> Home</a>
        <a href="/about" className="serach-item"> About</a>
        <a href="./contact" className="serach-item">Contact</a>
      </div>
    </>
  );
}

export default Navbar;
