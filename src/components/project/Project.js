import "./Project.css";

const Project = () => {
  return (
    <div className="container">
      <div className="content">
        <h3 className="sub-heading">Project Experience</h3>

        <div className="each-project">
          <h4 className="project-title">
            <u>Pokedex App</u>
          </h4>
          <p className="paragraph">(ReactJS, CSS, RESTFul API, Git)</p>
          <ul>
            <li>
              <h5>
                Fetched RESTFul API from external source and mapped data for
                showcase.
              </h5>
            </li>
          </ul>
        </div>

        <div className="each-project">
          <h4 className="project-title">
            <u>Self-Introduction Page</u>
          </h4>
          <p className="paragraph">(ReactJS, CSS, Bootstrap, Git)</p>
          <ul>
            <li>
              <h5>
                Designed styling, layout, CSS animation of webpage for clean
                display.
              </h5>
            </li>
            <li>
              <h5>Used Git as version control.</h5>
            </li>
          </ul>
        </div>

        <div className="each-project">
          <h4 className="project-title">
            <u>Sudoku Solver</u>
          </h4>
          <p className="paragraph">(Javascript, CSS, HTML, Git)</p>
          <ul>
            <li>
              <h5>
                Built a simple page to solve Sudoku problem in reasonable short
                time using backtracking algorithm
              </h5>
            </li>
          </ul>
        </div>

        <div className="each-project">
          <h4 className="project-title">
            <u>Hong Kong Restaurant Database (In progress)</u>
          </h4>
          <p className="paragraph">(ReactJS, Node.js, Express.js, MongoDB)</p>
          <ul>
            <li>
              <h5>
                Building a site to save restaurant reviews, handle queries with
                full frontend, backend and database.
              </h5>
            </li>
          </ul>
        </div>

        <h5 className="centered-word">
          (More projects can be found in my Github page by clicking the Github
          icon in the bottom)
        </h5>
      </div>
    </div>
  );
};

export default Project;
