import React from "react";
import BeersImg from "../../assets/beers.png";
import RandomBeerImg from "../../assets/random-beer.png";
import newBeerImg from "../../assets/new-beer.png";
import HomeLink from "../HomeLink";

const Home = () => {
  return (
    <div>
      <ul className="d-flex flex-column align-items-center m-auto list-unstyled" style={{ maxWidth: "705px" }}>
        <li>
          <HomeLink
            link="/beers"
            image={BeersImg}
            title="All Beers"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae totam cupiditate maxime animi nostrum, voluptate cum dignissimos culpa molestiae, quia sequi, impedit dolor architecto consectetur tenetur. Aut ad dolore inventore."
          />
        </li>
        <li>
          <HomeLink
            link="/random-beer"
            image={RandomBeerImg}
            title="Random Beer"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium ducimus minima, temporibus, cum laboriosam nisi cumque dolor sed atque maxime velit tempora eveniet nam aliquam explicabo sit odit debitis. Consequatur?"
          />
        </li>
        <li>
          <HomeLink
            link="/new-beer"
            image={newBeerImg}
            title="New Beer"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque possimus blanditiis accusantium porro dolores temporibus totam incidunt! Totam distinctio, modi ratione suscipit, fugiat sapiente recusandae architecto rem voluptates incidunt voluptatem."
          />
        </li>
      </ul>
    </div>
  );
};

export default Home;
