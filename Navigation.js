import "./Navigation.css";

const Navigation = () => {
  let isNavigationOpen = false;

  const navigationClickHandler = () => {
    if (!isNavigationOpen) {
      document
        .querySelector(".side_navigation")
        .classList.add("side_navigation-active");

      document
        .querySelector(".side_navigation_btn_icon-open")
        .classList.add("hidden");
      document
        .querySelector(".side_navigation_btn_icon-close")
        .classList.remove("hidden");
      isNavigationOpen = true;
    } else {
      document
        .querySelector(".side_navigation")
        .classList.remove("side_navigation-active");
      document
        .querySelector(".side_navigation_btn_icon-open")
        .classList.remove("hidden");
      document
        .querySelector(".side_navigation_btn_icon-close")
        .classList.add("hidden");
      isNavigationOpen = false;
    }
  };

  return (
    <div className="side_navigation">
      <div className="side_navigation_header">
        <button
          onClick={navigationClickHandler}
          className="side_navigation_btn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="side_navigation_btn_icon-open"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="side_navigation_btn_icon-close hidden"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <img
          className="side_navigation_profile"
          src={require("./profile.png").default}
        ></img>
        <h2>Abhishek Chamoli</h2>
        <p>Full Stack Web Application Developer</p>
        <p></p>
        <span className="side_navigation_online"></span>
      </div>
      <div className="side_navigation_info">
        <div className="side_navigation_info_information">
          <ul>
            <li>
              <span>Residence:</span>
              <span>City: </span>
              <span>Age: </span>
            </li>
            <li>
              <span>India</span>
              <span>Delhi</span>
              <span>19</span>
            </li>
          </ul>
          <hr></hr>
        </div>
        <div className="side_navigation_info_languages">
          <h2>Languages</h2>
          <div className="english_percent">
            <h3>English</h3>
            <div className="english_bar">
              <div className="english_fill"></div>
            </div>
            <p>60 %</p>
          </div>
          <div className="hindi_percent">
            <h3>Hindi</h3>
            <div className="hindi_bar">
              <div className="hindi_fill"></div>
            </div>
            <p>100 %</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
