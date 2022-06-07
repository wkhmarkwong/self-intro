import './TopBar.css';

const TopBar = () => {
  return (
    <div className="stick">
      <a href="#welcome" className="button">
        Home
      </a>

      <a href="#project" className="button">
        Project
      </a>

      <a href="#jobExp" className="button">
        Experience
      </a>

      <a href="#skill" className="button">
        Skill
      </a>

      <a href="#hobby-session" className="button">
        Hobby
      </a>

      <a href="#more-info" className="button">
        More Info
      </a>
    </div>
  );
};

export default TopBar;
