import React, {useState} from 'react'
import './TopicTabs2.css'


function TopicTabs2() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="TopicTabs2">

      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          For Beginners
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          For Theists
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          For Hindus
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          For Scholars
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
 
                  <ul>How to escape from sins permanently?</ul>
                  <ul>How can Bad Qualities be Helpful in Spirituality?</ul>
                  <ul>How to manage my mind?</ul>
                  <ul>How to handle money and sex?</ul>
                  <ul>What is my life after death?</ul>
                  <ul>Why did God create Hell and Heaven?</ul>
                  <ul>Why did God create this creation?</ul>
                  <ul>Why did God give freedom to the souls?</ul>
                  <ul>Why does God allow terror attacks in places of worship?</ul>
                  <ul>Why does God come in Human form?</ul>
    
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >


            <ul>What are the different kinds of incarnations of God?</ul>
            <ul>What are the different kinds of devotion?</ul>
            <ul>What are the different kinds of souls?</ul>
            <ul>What are the 3 steps to reach God?</ul>
            <ul>What are the 2 obstacles to reach God?</ul>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >

            <ul>Understanding the Caste System</ul>
            <ul>Understanding Astrology and Karma Chakra</ul>
            <ul>What is the True essence of Gayatri Mantra?</ul>
            <ul>What is the True essence of Yagnam or Homam?</ul>
            <ul>What is the True essence of Upanayanam?</ul>
            <ul>What is the meaning behind Shri Chakra?</ul>
            <ul>What is the status of women in Hinduism?</ul>
            <ul>Who is a True Sanyasi?</ul>
            <ul>Does the sin of father come to his son?</ul>
            <ul>Truth behind Shiva's killing of Ganesha</ul>
          
        </div>

        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >

           <ul>The Four Great Sentences</ul>
           <ul>Who is Brahman?</ul>
           <ul>Understanding the word 'Atman'</ul>
           <ul>Is this world 'real' or 'unreal'?</ul>
           <ul>Why did AdiShankara say, "Soul is God"?</ul>
           <ul>Questions related to Mandukya Upanishad</ul>
           <ul>I in deep Sleep</ul>
           <ul>Maya and Mula Maya</ul>
          
        </div>
      </div>
    </div>
  );
}

export default TopicTabs2



