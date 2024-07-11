import xiaomi from "./assets/Xiaomi.mp4";
import one from "./assets/one.jpeg";
import two from "./assets/two.jpeg";
import Navbar from "./Navbar";
import Show from "./Show";
import Last from "./Last";
import Selfie from "./Selfie";
import Pic from "./Pic";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <section className="home-page">
        <div className="landing-page">
          <video muted autoPlay loop>
            <source src={xiaomi} type="video/mp4"></source>
          </video>
        </div>
        <Navbar />
        <div className="content">
          <p>$1120</p>
          <h1>XIAOMI 14 ULTRA</h1>
          <button style={{ backgroundColor: "#ff6900" }}>BUY NOW</button>
          <button style={{ backgroundColor: "#313131" }}>SEE MORE</button>
        </div>
        <div className="collection">
          <img src={one} alt="" draggable="false" />
          <img src={two} alt="" draggable="false" />
        </div>
      </section>
      <Show />
      <Last/>
      <Selfie/>
      <Pic/>
      <Footer/>
    </div>
  );
}

export default App;
