import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { StarBorder } from "@mui/icons-material";

export default function TickerLinks({ bookmarks, ticker }) {
  return (
    <List>
      {bookmarks.map((bookmark) => {
        return (
          <ListItem
            button
            component="a"
            href={bookmark.link.replace("{ticker}", ticker)}
          >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText
              primary={ticker.toUpperCase() + " - " + bookmark.name}
            />
          </ListItem>
        );
      })}
    </List>
  );
}
