import "./Menu.css";

function Menu({ show, onClose }) {
  return (
    <>
      <aside className={`sidebar ${show ? "show" : ""}`}>
        <div className="sidebar-menu">

          <a href="#" className="sidebar-item active">
            <i className="bi bi-house-door"></i>
            <span>Dashboard</span>
          </a>

          <a href="#" className="sidebar-item">
            <i className="bi bi-wallet2"></i>
            <span>Finance</span>
          </a>

          <a href="#" className="sidebar-item">
            <i className="bi bi-grid"></i>
            <span>Network</span>
          </a>

          <a href="#" className="sidebar-item">
            <i className="bi bi-bullseye"></i>
            <span>Social</span>
          </a>

          <a href="#" className="sidebar-item">
            <i className="bi bi-box"></i>
            <span>Inventory</span>
          </a>

          <h5 className="sidebar-title">Pages</h5>

          <a href="#" className="sidebar-item">
            <i className="bi bi-person-circle"></i>
            <span>Profile</span>
            <i className="bi bi-chevron-down arrow"></i>
          </a>

          <a href="#" className="sidebar-item">
            <i className="bi bi-building"></i>
            <span>Company</span>
            <i className="bi bi-chevron-down arrow"></i>
          </a>

          <a href="#" className="sidebar-item">
            <i className="bi bi-question-circle"></i>
            <span>Forum</span>
            <i className="bi bi-chevron-down arrow"></i>
          </a>

          <a href="#" className="sidebar-item">
            <i className="bi bi-window"></i>
            <span>Supportive Pages</span>
            <i className="bi bi-chevron-down arrow"></i>
          </a>

          <a href="#" className="sidebar-item">
            <i className="bi bi-palette"></i>
            <span>Personalize</span>
            <span className="heart">♥</span>
          </a>

          <a href="#" className="sidebar-item">
            <i className="bi bi-cpu"></i>
            <span>Components</span>
          </a>

          <a href="#" className="sidebar-item">
            <i className="bi bi-file-earmark-code"></i>
            <span>Documentation</span>
          </a>

          <h5 className="sidebar-title">Applications</h5>

          <a href="#" className="sidebar-item">
            <i className="bi bi-envelope"></i>
            <span>Email</span>
            <small>9+</small>
          </a>

          <a href="#" className="sidebar-item">
            <i className="bi bi-folder"></i>
            <span>Explorer</span>
          </a>

          <a href="#" className="sidebar-item">
            <i className="bi bi-calendar"></i>
            <span>Calendar</span>
          </a>

        </div>
      </aside>

      {show && <div className="sidebar-overlay show" onClick={onClose}></div>}
    </>
  );
}

export default Menu;