import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { configureChains, WagmiConfig, createClient } from "wagmi";
import { mainnet, polygon, optimism } from 'wagmi/chains'
import { publicProvider } from "wagmi/providers/public";
import { alchemyProvider } from 'wagmi/providers/alchemy';

const { provider, webSocketProvider } = configureChains(
  [mainnet, polygon], // Add a comma here
  [publicProvider()], // Add a comma here
  [alchemyProvider({ apiKey: 'jgLsQEGh68ncG3v0a2J77hVYztJ7FpsR' }), publicProvider()] // Add a comma here
);

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WagmiConfig client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WagmiConfig>
  </React.StrictMode>
);
