import "./Leetcode.css";
import Logo from "../../image/leetcode_logo.png";

const Leetcode = () => {
  return (
    <div className="container leetcode-block">
      <div className="leetcode-left paragraph">
        <h3 className="sub-heading">Coding is my habit and interest!</h3>

        <ul>
          <li>Joined 50+ contests, solved 600+ questions</li>
          <li>
            Highest rating achieved is 1865 and got "Knight badge" (best 25% in
            the whole world)
          </li>
          <li>
            My philosophy is
            <b style={{ color: "green" }}> "learn by teaching"</b>. I keep
            teaching the others what I know, no matter in algorithm area or
            writing projects.
          </li>
          <li>Contributed to step-by-step analysis in Leetcode community</li>
        </ul>
      </div>
      <div className="leetcode-right">
        <img src={Logo} alt="not found" className="leetcode-logo" />
      </div>
    </div>
  );
};

export default Leetcode;
