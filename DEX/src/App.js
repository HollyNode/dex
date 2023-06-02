// App.js
import React from "react"; // Ensure useEffect is imported
import Header from "./components/Header";
import Swap from "./components/Swap";
import Tokens from "./components/Tokens";
import Inquiry from "./components/Inquiry";
import Hero from "./components/Hero";
import { Routes, Route } from "react-router-dom";
import { useConnect, useAccount } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { Carousel } from "antd";



import "./App.css"; // Import the CSS file


function App() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new MetaMaskConnector(),
  });

  return (
    <div className="night"> {/* Wrap the content with the night class */}
      <Header connect={connect} isConnected={isConnected} address={address} />
      <div className="mainWindow">
        <Routes>
          <Route path="/" element={<Swap isConnected={isConnected} address={address} />} />
          <Route path="/tokens" element={<Tokens />} />
        </Routes>
        <Inquiry userAddress={address} />
        <Hero />
        <Carousel />
      </div>
    </div>
  );
}



export default App;