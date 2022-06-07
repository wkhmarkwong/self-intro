import './Projects.css';

const Project = () => {
  return (
    <div className="container" id="project">
      <div className="content">
        <h3 className="sub-heading">Project Experience</h3>

        <div className="each-project">
          <h4>
            <u>House Sale App</u>
          </h4>
          <div className="language-description">
            <h5 className="green-cell">Nextjs</h5>
            <h5 className="green-cell">Chakra UI</h5>
          </div>
          <ul>
            <li>
              <h5>
                Built a nice looking house sale website by fetching external API
              </h5>
            </li>
          </ul>
          <div className="block-demo">
            <a
              href="https://house-sale-app.vercel.app"
              className="display-link"
            >
              View Demo
            </a>
          </div>
        </div>

        <div className="each-project">
          <h4>
            <u>My Reading Record App</u>
          </h4>
          <div className="language-description">
            <h5 className="green-cell">Nodejs</h5>
            <h5 className="green-cell">Expressjs</h5>
            <h5 className="green-cell">Mongodb</h5>
            <h5 className="green-cell">Ejs</h5>
            <h5 className="green-cell">Mongoose</h5>
          </div>
          <ul>
            <li>
              <h5>Built an app to track book reading record</h5>
            </li>
          </ul>
          <div className="block-demo">
            <a
              href="https://wkh-backend.herokuapp.com/"
              className="display-link"
            >
              View Demo
            </a>
          </div>
        </div>

        <div className="each-project">
          <h4>
            <u>Blog App Clone</u>
          </h4>
          <div className="language-description">
            <h5 className="green-cell">Nextjs</h5>
            <h5 className="green-cell">Tailwind CSS</h5>
            <h5 className="green-cell">GraphQL</h5>
            <h5 className="green-cell">GraphCMS</h5>
          </div>
          <ul>
            <li>
              <h5>Built an app for content sharing</h5>
            </li>
          </ul>
          <div className="block-demo">
            <a href="https://cms-blog-bay.vercel.app" className="display-link">
              View Demo
            </a>
          </div>
        </div>

        <div className="each-project">
          <h4>
            <u>ShareMe Social Networking App Clone</u>
          </h4>
          <div className="language-description">
            <h5 className="green-cell">Reactjs</h5>
            <h5 className="green-cell">Tailwind CSS</h5>
            <h5 className="green-cell">Sanity</h5>
          </div>
          <ul>
            <li>
              <h5>
                Built an app for users to share comments, photos with Google
                authentication login system
              </h5>
            </li>
          </ul>
          <div className="block-demo">
            <a href="https://shareme-wkh.netlify.app/" className="display-link">
              View Demo
            </a>
          </div>
        </div>

        <div className="each-project">
          <h4>
            <u>Self-Introduction Page</u>
          </h4>
          <div className="language-description">
            <h5 className="green-cell">Reactjs</h5>
            <h5 className="green-cell">CSS</h5>
            <h5 className="green-cell">Bootstrap</h5>
            <h5 className="green-cell">Git</h5>
          </div>
          <ul>
            <li>
              <h5>Designed styling, layout of webpage for clean display.</h5>
            </li>
          </ul>
          <div className="block-demo">
            <a
              href="https://wkh-self-intro-page.netlify.app/"
              className="display-link"
            >
              View Demo
            </a>
          </div>
        </div>

        <div className="each-project">
          <h4>
            <u>Pokedex App</u>
          </h4>
          <div className="language-description">
            <h5 className="green-cell">Reactjs</h5>
            <h5 className="green-cell">CSS</h5>
            <h5 className="green-cell">Git</h5>
          </div>
          <ul>
            <li>
              <h5>
                Fetched RESTFul API from external source and mapped data to
                showcase all data card with decent layout.
              </h5>
            </li>
          </ul>
          <div className="block-demo">
            <a
              href="https://wkh-pokedex-app.netlify.app"
              className="display-link"
            >
              View Demo
            </a>
          </div>
        </div>

        <div className="each-project">
          <h4>
            <u>Sudoku Solver</u>
          </h4>
          <div className="language-description">
            <h5 className="green-cell">Javascript</h5>
            <h5 className="green-cell">CSS</h5>
            <h5 className="green-cell">HTML</h5>
            <h5 className="green-cell">Git</h5>
          </div>
          <ul>
            <li>
              <h5>
                Built a simple page to solve Sudoku problem in reasonable short
                time using backtracking algorithm
              </h5>
            </li>
          </ul>
          <div className="block-demo">
            <a href="http://www.wkh-demoproject.ml" className="display-link">
              View Demo
            </a>
          </div>
        </div>

        <h5 className="centered-word">
          (Source code can be found in my Github page by clicking the Github
          icon in the bottom)
        </h5>
      </div>
    </div>
  );
};

export default Project;
