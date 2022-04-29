import "./Japanese.css";
import Logo from "../../image/japan-society-logo.png";

const Japanese = () => {
  return (
    <div className="container japanese-block">
      <div className="japanese-left">
        <img src={Logo} alt="not found" className="japanese-logo" />
      </div>

      <div className="japanese-right">
        <h3 className="sub-heading">I am Japanese Lover!</h3>
        <ul>
          <li className="paragraph">Reached JLPT N1 in less than 2 years</li>
          <li className="paragraph">
            Have been studying Japanese for 10+ years
          </li>
          <li className="paragraph">
            I am interested in both classic and pop Japanese culture
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Japanese;
