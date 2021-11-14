import Header from "./components/Header";
import Footer from "./components/Footer";
import TickerPrompt from "./components/TickerPrompt";
import TickerLinks from "./components/TickerLinks";
import { Grid } from "@mui/material";

import { useState } from "react";

import links from "./links";

export default function App() {
  const [ticker, setTicker] = useState("AAPL");

  const updateTicker = (newTicker) => {
    console.log("new ticker ", newTicker);
    setTicker(newTicker);
  };

  return (
    <Grid>
      <Header />
      <TickerPrompt ticker={ticker} tickerChange={updateTicker} />
      <TickerLinks ticker={ticker} bookmarks={links} />
      <Footer />
    </Grid>
  );
}
