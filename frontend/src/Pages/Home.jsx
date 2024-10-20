import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import Save from "../../Save.jsx";
const Home = () => {
  return (
    <div>
      <section
        className="py-5 text-center container background-image"
        style={{
          height: "200vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <Save />
      </section>
    </div>
  );
};
export default Home;
