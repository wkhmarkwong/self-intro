import "./Bottom.css";
import Leetcode from "../../image/leetcode_logo.png";
import Github from "../../image/github_logo.png";

const Bottom = () => {
  return (
    <div className="container">
      <div className="content">
        <h5 className="centered-word">
          Find out more about me by clicking the below icons:
        </h5>

        <div className="bottom-logo">
          <img
            src={Leetcode}
            alt="img not found"
            className="image-bottom"
            onClick={() => window.open("https://leetcode.com/sshinyy/")}
          />
          <img
            src={Github}
            alt="img not found"
            className="image-bottom"
            onClick={() =>
              window.open("https://github.com/wkhmarkwong?tab=repositories")
            }
          />
        </div>

        <h5 className="centered-word">Contact email:</h5>
        <h5 className="centered-word">markwongwkh@yahoo.com</h5>
      </div>
    </div>
  );
};

export default Bottom;
