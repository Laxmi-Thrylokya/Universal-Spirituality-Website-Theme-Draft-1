import Loginbar from "./components/LoginBar/Loginbar";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import IntroText from "./components/IntroText/IntroText";
import ExclusiveWorks from "./components/ExclusiveWorks/ExclusiveWorks";
import Messages from "./components/Messages/Messages"
import Importance from "./components/Importance/Importance";
import Books from "./components/Books/Books";
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import TopicTabs1 from "./components/TopicTabs1/TopicTabs1";
import TopicTabs2 from "./components/TopicTabs2/TopicTabs2";

import './App.css';


function App() {
  return (
    <div className="App">
      <Loginbar/>
      <Navbar/>
      <Intro/>
      <IntroText/>
      <ExclusiveWorks/>
      <Messages/>
      <Importance/>
      <Books/>
      <TopicTabs1/>
      <TopicTabs2/>
      <Contact/> 
      <Footer/>
    </div>
  );
}

export default App;
