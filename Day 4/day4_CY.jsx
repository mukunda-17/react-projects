import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Typography, Paper } from "@mui/material";

const books = [
  {
    title: "The Great Gatsby",
    summary:
      "A classic novel by F. Scott Fitzgerald, exploring themes of wealth, class, and the American Dream in the 1920s.",
  },
  {
    title: "To Kill a Mockingbird",
    summary:
      "A powerful novel by Harper Lee addressing racial injustice and moral growth in the American South.",
  },
  {
    title: "1984",
    summary:
      "A dystopian novel by George Orwell depicting a totalitarian regime and the perils of oppressive surveillance.",
  },
  {
    title: "One Hundred Years of Solitude",
    summary:
      "Gabriel Garcia Marquez’s masterpiece blending magical realism and historical narrative in the story of the Buendía family.",
  },
  {
    title: "Moby-Dick",
    summary:
      "Herman Melville’s epic tale of Captain Ahab’s obsessive quest to hunt the elusive white whale, exploring themes of revenge and humanity.",
  },
];

function App() {
  return (
    <Paper
      elevation={3}
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "auto",
        borderRadius: "8px",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        style={{ marginBottom: "20px" }}
      >
        Most Influential Books of All Time
      </Typography>
      <List>
        {books.map((book, index) => (
          <React.Fragment key={index}>
            <ListItem
              style={{
                backgroundColor: "#f9f9f9",
                borderRadius: "4px",
                marginBottom: "10px",
                padding: "10px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <ListItemText
                primary={book.title}
                secondary={book.summary}
                primaryTypographyProps={{ fontWeight: "bold", color: "#333" }}
                secondaryTypographyProps={{ color: "#555" }}
              />
            </ListItem>
            {index !== books.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}

export default App;
