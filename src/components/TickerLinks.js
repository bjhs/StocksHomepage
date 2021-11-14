import { Link } from "@mui/material";

export default function TickerLinks({ bookmarks, ticker }) {
  console.log(ticker);
  return (
    <div>
      {bookmarks.map((bookmark) => {
        return (
          <div key={bookmark.id}>
            <Link href={bookmark.link.replace("{ticker}", ticker)}>
              {bookmark.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
