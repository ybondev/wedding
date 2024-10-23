import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import Header from "./header/page";
import Nav from "./navbar/page";

export const metadata = {
  title: "Wedding",
  description: "Wedding",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body className="body">
        <Header />
        {children}
      </body>
    </html>
  );
};

export default layout;
