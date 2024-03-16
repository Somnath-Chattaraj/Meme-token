import UranusCarousel from "./carousel";
import uranus from "./assets/uranus.jpeg";
import Header from "./header";
import Footer from "./footer";

function App() {
  return (
    <>
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <Header />
      <img src={uranus} alt="" className="h-96" />
      <UranusCarousel />
    </div>
    <Footer />
    </>
  );
}

export default App;



