import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
const Plumber = () => {
  return (
    <div>
      <section
        className="py-5 text-center container background-image"
        style={{
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        
      </section>
      <Footer />
    </div>
  );
};
export default Plumber;
