import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";

const App = () => {
  const [userName, setUserName] = useState("");
  const [selectedFruit, setSelectedFruit] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (userName && selectedFruit) {
      alert(
        `Hi, ${userName}! You chose ${selectedFruit} as your favorite fruit.`
      );
    } else {
      alert("Please make sure both fields are filled out.");
    }
  };

  return (
    <>
      <h1>Survey: Your Favorite Fruit</h1>
      <form
        onSubmit={handleFormSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <TextField
          label="Your Name"
          variant="outlined"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          data-testid="name-input"
        />
        <Autocomplete
          options={["Apple", "Banana", "Cherry", "Durian", "Elderberry"]}
          getOptionLabel={(option) => option}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Favorite Fruit"
              variant="outlined"
              data-testid="fruit-autocomplete"
            />
          )}
          value={selectedFruit}
          onChange={(event, newValue) => setSelectedFruit(newValue)}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          data-testid="submit-button"
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default App;
