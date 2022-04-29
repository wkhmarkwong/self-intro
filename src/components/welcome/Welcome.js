import "bootstrap/dist/css/bootstrap.min.css";
import "./Welcome.css";

const welcome = () => {
  return (
    <div className="container">
      <div className="content">
        <h2 className="greeting top-greeting">Welcome to my website!</h2>
        <h4 className="name top-name">I am Wong Ka Ho, Mark</h4>
      </div>
    </div>
  );
};

export default welcome;
