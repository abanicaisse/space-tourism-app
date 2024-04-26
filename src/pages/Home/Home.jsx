import React from "react";
import "./home.css";
import { Navbar } from "../../components";

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <div className="home__container">
        <div className="home__container-text">
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="home__container-explore">
          <p>EXPLORE</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

// import React from "react";
// import "./home.css";
// import { Navbar } from "../../components";

// const Home = () => {
//   return (
//     <div className="home">
//       <Navbar />

//     </div>
//   );
// };

// export default Home;
