import React, {useState} from 'react'
import './TopicTabs1.css'


function TopicTabs1() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="TopicTabs1">

      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Why?
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          What?
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          How?
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Who?
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
 
            <ul>Why did Lord Rama leave Sita in forest?</ul>
            <ul>Why did Lord Krishna romance with Gopikas?</ul>
            <ul>Why did Lord Jesus make three different statements?</ul>
            <ul>Why did Lord Mohammad conceal His true identity?</ul>
            <ul>Why did Buddha keep silent about God?</ul>

        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >


            <ul>What is the significance of miracles?</ul>
            <ul>What is the aim of Human Life?</ul>
            <ul>What is the true essence of Yoga?</ul>
            <ul>What is real Salvation?</ul>
            <ul>What is karma Yoga which is mentioned in Gita?</ul>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >

            <ul>How to correlate all the World Religions?</ul>
            <ul>How to correlate Science and Spirituality?</ul>
            <ul>How to correlate the 3 Vedantic Philosophies?</ul>
            <ul>How to identify the God in Human Form?</ul>
            <ul> How to serve God?</ul>
          
        </div>

        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >

            <ul>Who is Lord Datta?</ul>
            <ul>Who is Anagha?</ul>
            <ul>Who is a true Sanyasi?</ul>
            <ul>Who is the real Brahmachari?</ul>
            <ul>Who is the true devotee of God?</ul>
          
        </div>
      </div>
    </div>
  );
}

export default TopicTabs1



