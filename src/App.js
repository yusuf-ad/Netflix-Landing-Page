import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Table from "./components/Table/Table";

import DoorIcon from "./icons/DoorIcon";
import TagsIcon from "./icons/TagsIcon";
import TabletIcon from "./icons/TabletIcon";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Tabs />
      <Footer />
    </div>
  );
}

function Tabs() {
  const [activeTab, setActiveTab] = useState("1");

  const handleSelect = (e) => {
    const selectedTab = e.target.closest(".tab");

    setActiveTab(selectedTab.id);
  };

  return (
    <section className="tabs">
      <div className="tabs__list">
        <Tab onSelection={handleSelect} activeTab={activeTab} id="1">
          <DoorIcon />
          <p>Cancel at any time</p>
        </Tab>
        <Tab onSelection={handleSelect} activeTab={activeTab} id="2">
          <TabletIcon />
          <p>Watch anywhere</p>
        </Tab>
        <Tab onSelection={handleSelect} activeTab={activeTab} id="3">
          <TagsIcon />
          <p>Pick your price</p>
        </Tab>
      </div>
      <div className="tabs__content">
        <Content activeTab={activeTab} />
      </div>
    </section>
  );
}

function Tab({ onSelection, id, activeTab, children }) {
  return (
    <div
      className={`tab ${activeTab === id ? "active" : ""}`}
      onClick={onSelection}
      id={id}
    >
      {children}
    </div>
  );
}

function Content({ activeTab }) {
  if (activeTab === "1")
    return (
      <div className="content content--1">
        <div>
          <p className="text">
            If you decide Netflix isn't for you - no problem. No commitment.
            Cancel online anytime.
          </p>
          <button className="btn btn--md">Watch free for 30 days</button>
        </div>
        <img
          src="https://i.ibb.co/J2xDJV7/tab-content-1.png"
          alt="cancel your account
        "
        />
      </div>
    );
  if (activeTab === "2")
    return (
      <div className="content content--2">
        <div className="content__header">
          <p className="text">
            Watch TV shows and movies anytime, anywhere — personalized for you.
          </p>
          <button className="btn btn--md">Watch free for 30 days</button>
        </div>
        <div className="content__body">
          <div>
            <img alt="tv" src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png" />
            <h3>Watch on your TV</h3>
            <p>
              Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
              players and more.
            </p>
          </div>
          <div>
            <img alt="tv" src="https://i.ibb.co/R3r1SPX/tab-content-2-2.png" />
            <h3>Watch instantly or download for later</h3>
            <p>Available on phone and tablet, wherever you go.</p>
          </div>
          <div>
            <img alt="tv" src="https://i.ibb.co/gDhnwWn/tab-content-2-3.png" />
            <h3>Use any computer</h3>
            <p>Watch right on Netflix.com.</p>
          </div>
        </div>
      </div>
    );
  if (activeTab === "3")
    return (
      <div className="content content--3">
        <div>
          <p className="text">
            Choose one plan and watch everything on Netflix.
          </p>
          <button className="btn btn--md">Watch free for 30 days</button>
        </div>
        <Table />
      </div>
    );
}
