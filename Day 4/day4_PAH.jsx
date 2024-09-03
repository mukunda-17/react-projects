import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const books = [
  {
    title: "1984",
    summary:
      "Dystopian novel by George Orwell, depicting a totalitarian regime under constant surveillance.",
  },
  {
    title: "Pride and Prejudice",
    summary:
      "Classic novel by Jane Austen, exploring themes of love, social standing, and individuality.",
  },
  {
    title: "Moby Dick",
    summary:
      "Novel by Herman Melville, following the quest of Captain Ahab to seek revenge on the giant white whale.",
  },
  {
    title: "The Catcher in the Rye",
    summary:
      "Novel by J.D. Salinger, portraying the adolescent angst of Holden Caulfield in 1950s New York.",
  },
  {
    title: "The Great Gatsby",
    summary:
      "Novel by F. Scott Fitzgerald, depicting the decadence of the Jazz Age and the decline of the American Dream.",
  },
];

function App() {
  return (
    <>
      <h1>Top 5 Must-Read Classics</h1>
      <List style={{ maxWidth: "600px", margin: "auto" }}>
        {books.map((book, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemText primary={book.title} secondary={book.summary} />
            </ListItem>
            {index !== books.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </>
  );
}

export default App;
