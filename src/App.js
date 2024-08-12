import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Pages/Home/Hero";
import Second from "./Pages/Home/Second";
import Section from "./Components/Section/Section";
import img1 from "./Assets/undraw_happy_news_hxmt.png";
import img2 from './Assets/undraw_social_influencer_sgsv.png'
import img3 from './Assets/undraw_mention_6k5d.png'
import Last from "./Pages/Home/Last";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <>
      <Header />
      <Hero />
      <Second />
      
      <Section
        img={img1}
        h1={"Light, Fast & Powerful"}
        para1={
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus "
        }
        para2={
          "mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
        }
      />

      <Section
        img={img2}
        h1={"Light, Fast & Powerful"}
        para1={
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus "
        }
        para2={
          "mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
        }
      />

      <Section
        img={img3}
        h1={"Light, Fast & Powerful"}
        para1={
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus "
        }
        para2={
          "mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
        }
        display={
          "bg-[#091133] shadow-md shadow-blue-950 text-white py-2 px-5 mr-10 hover:scale-110 transition-all"
        }
        btn={"Purchase Now"}
      />

      <Last/>

      <Footer/>
    </>
  );
}

export default App;
