import './App.css';
import './component/style.css';
import Navbar from './component/navbar/navbar';
import imageInSrc from "./imageInSrc.jpg";
import Footer from './component/footer/footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
     
      
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

        <h1 class="title black">msr baha-sniper-py</h1>

        <br />
        <img className="pic1" src={imageInSrc} alt="imageInSrc"></img>

        <br />
        <img className="pic2" src="./imageInPublic.jpg" alt="imageInPublic"></img>

        </div>

        <video width="320" height="240" controls>

        <source src="https://img-9gag-fun.9cache.com/photo/aAGwD6R_460svav1.mp4" type="video/mp4" />

        </video>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
