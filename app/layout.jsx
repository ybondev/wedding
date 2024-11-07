import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import Header from "./header/page";

export const metadata = {
  title: "Wedding",
  description: "Wedding",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body className="body">
        <div className="container">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
};

export default layout;
