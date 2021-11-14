import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

export default function TickerPrompt({ ticker, tickerChange }) {
  function onChange(e) {
    tickerChange(e.target.value);
  }
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Ticker"
        variant="outlined"
        placeholder={ticker}
        margin="normal"
        autoFocus={true}
        onChange={onChange}
      />
      <Button
        variant="contained"
        onClick={() => {
          alert("clicked");
        }}
      >
        Create
      </Button>
    </>
  );
}
