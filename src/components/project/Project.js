import "./Project.css";

const Project = () => {
  return (
    <div className="container" id="project">
      <div className="content">
        <h3 className="sub-heading">Project Experience</h3>

        <div className="each-project">
          <h4 className="project-title">
            <u>Pokedex App</u>
          </h4>

          <div className="language-description">
            <h5 className="each-language">ReactJS</h5>
            <h5 className="each-language">CSS</h5>
            <h5 className="each-language">RESTFul API</h5>
            <h5 className="each-language">Git</h5>
          </div>
          <ul>
            <li>
              <h5>
                Fetched RESTFul API from external source and mapped data to
                showcase all Pokemons according to their indexes.
              </h5>
            </li>
            <li>
              <h5>Notable points:</h5>
              <ul>
                <li>
                  <h5>Solved the problem of fetching data not in order</h5>
                </li>
                <li>
                  <h5>Designed how to fetch API data in need properly</h5>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="each-project">
          <h4 className="project-title">
            <u>Self-Introduction Page</u>
          </h4>

          <div className="language-description">
            <h5 className="each-language">ReactJS</h5>
            <h5 className="each-language">CSS</h5>
            <h5 className="each-language">Bootstrap</h5>
            <h5 className="each-language">Git</h5>
          </div>

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

            <li>
              <h5>Notable points:</h5>
              <ul>
                <li>
                  <h5>Skills to design eye-catching, clean layout</h5>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="each-project">
          <h4 className="project-title">
            <u>Sudoku Solver</u>
          </h4>
          {/*<p className="paragraph">(Javascript, CSS, HTML, Git)</p>*/}

          <div className="language-description">
            <h5 className="each-language">Javascript</h5>
            <h5 className="each-language">CSS</h5>
            <h5 className="each-language">HTML</h5>
            <h5 className="each-language">Git</h5>
          </div>

          <ul>
            <li>
              <h5>
                Built a simple page to solve Sudoku problem in reasonable short
                time using backtracking algorithm
              </h5>
            </li>

            <li>
              <h5>Notable points:</h5>
              <ul>
                <li>
                  <h5>Dealt with the problem of responsive feature</h5>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="each-project">
          <h4 className="project-title">
            <u>Hong Kong Restaurant Database (In progress)</u>
          </h4>
          {/*<p className="paragraph">(ReactJS, Node.js, Express.js, MongoDB)</p>*/}

          <div className="language-description">
            <h5 className="each-language">ReactJS</h5>
            <h5 className="each-language">Node.js</h5>
            <h5 className="each-language">Express.js</h5>
            <h5 className="each-language">MongoDB</h5>
          </div>

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
