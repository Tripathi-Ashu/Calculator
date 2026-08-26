import "./Header.css";

function Header({ onMenuClick }) {
  return (
    <header className="top-header">
      <div className="header-left">
        <button className="menu-btn" onClick={onMenuClick}>
          <i className="bi bi-list"></i>
        </button>

        <div className="brand">
          <div className="brand-logo">G</div>
          <div>
            <h2>GoTRI</h2>
            <span>Best HTML template</span>
          </div>
        </div>
      </div>

      <div className="search-box">
        <i className="bi bi-search"></i>
        <input type="text" placeholder="Search here..." />
      </div>

      <nav className="nav-links">
        <a href="#" className="active">Pages</a>
        <a href="#">Components</a>
        <a href="#">Supportive</a>
      </nav>

      <div className="header-right">
        <button className="icon-btn">
          <i className="bi bi-sun"></i>
        </button>

        <button className="icon-btn">
          <i className="bi bi-grid-3x3-gap"></i>
        </button>

        <button className="icon-btn notification">
          <i className="bi bi-bell"></i>
          <span>9+</span>
        </button>

        <div className="profile">
          <img src="https://i.pravatar.cc/40?img=47" alt="Profile" />
        </div>
      </div>
    </header>
  );
}

export default Header;