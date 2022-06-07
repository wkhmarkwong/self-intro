import './JobExp.css';

const JobExp = () => {
  return (
    <div className="container" id="jobExp">
      <div className="content">
        <h3 className="sub-heading">Job Experience</h3>
      </div>

      <div className="each-job">
        <h4>Online Business Representative, Time To Catch!</h4>
        <h5>(2018 Apr - 2021 Nov)</h5>
        <ul>
          <li>
            <h5>Operated an online business related to entertaining sector</h5>
          </li>
          <li>
            <h5>Planned sale strategies, production mode</h5>
          </li>
          <li>
            <h5>Did all sales, customer caring works</h5>
          </li>
        </ul>
      </div>

      <div className="each-job">
        <h4>Administration Officer, Tengard, Hong Kong</h4>
        <h5>(2016 Jul - 2017 Mar)</h5>
        <ul>
          <li>
            <h5>
              Facilitated company’s sales plan focusing on Japanese market
            </h5>
          </li>
        </ul>
      </div>

      <div className="each-job">
        <h4>AIESEC Exchange Intern, 3S International Software JSC, Vietnam</h4>
        <h5>(2015 Oct – 2016 Mar)</h5>
        <ul>
          <li>
            <h5>
              Participated language programme setup and execution within company
            </h5>
          </li>
          <li>
            <h5>
              Joined business team and helped making promotion plan targeting on
              European, American, Japanese
            </h5>
          </li>
        </ul>
      </div>

      <div className="each-job last-job">
        <h4>
          Summer Intern, Hong Kong Economic and Trade Office - Japan Office,
          Japan
        </h4>
        <h5>(2015)</h5>
        <ul>
          <li>
            <h5>
              Worked with Japanese colleagues to facilitate campaign setup and
              office duties
            </h5>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default JobExp;
