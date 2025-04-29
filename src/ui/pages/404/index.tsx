import { Link } from "react-router";

function NotFoundPage() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default NotFoundPage;
