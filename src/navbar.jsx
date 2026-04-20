export default function Navbar() {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
      <div className="container">
        <a className="navbar-brand" href="#">
        Pizzería Mamma Mia!
        </a>
        <div className="navbar-nav me-auto">
          <button className="btn btn-sm btn-outline-light me-2">🍕 Home</button>
          {token ? (
            <>
              <button className="btn btn-sm btn-outline-light me-2">
                🔓 Profile
              </button>
              <button className="btn btn-sm btn-outline-light me-2">
                🔒 Logout
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-sm btn-outline-light me-2">
                🔐 Login 
              </button>
              <button className="btn btn-sm btn-outline-light me-2">
                🔐 Register
              </button>
            </>
          )}
        </div>
        <div className="navbar-nav ms-auto">
          <button className="btn btn-outline-info">
            🛒 Total: ${total.toLocaleString("es-CL")}
          </button>
        </div>
      </div>
    </nav>
  );
}