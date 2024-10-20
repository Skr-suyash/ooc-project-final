import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

const Nopage =()=> {
  return (
    <div className="main">
      <Navbar />
      <div style={{ height: "100vh" }}>
        <div>
          <h1
            style={{
              fontSize: "5rem",
              textAlign: "center",
              color: "aqua",
              marginTop: "4em",
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "black",
            }}
          >
            Error 404! Page Not Found
          </h1>
          <p
            style={{
              fontSize: "3rem",
              textAlign: "center",
              color: "aqua",
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "black",
            }}
          >
            The page you are looking for does not exist.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Nopage;
