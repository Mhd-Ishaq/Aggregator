import React from "react";
import Image from "../assests/photo-workshop.jpg";

const SpecificWorkshopPage = () => {
  return (
    <div className="workshop">
      <div className="workshop-container">
        <div className="left-container">
          <div className="img-container">
            <img src={Image} alt="" />
          </div>
        </div>
        <div className="right-container">
          <h1 className="item">Title of the Event</h1>
          <p className="item">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            iusto asperiores odit porro voluptatem sint dolores tenetur
            voluptates id perferendis.
          </p>
          <button className="btn item">Book</button>
        </div>
      </div>
      <div className="description">
        <h1>About the Seminar</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          at? Deserunt, quam! Dolores provident eaque quisquam ullam quam
          blanditiis debitis est, velit quo, libero iure. Distinctio
          voluptatibus, esse ratione minima molestiae nisi dolores nemo voluptas
          expedita natus! Minima, assumenda non blanditiis quos iste minus dolor
          ipsum officiis repellat libero veniam sit, officia vero ullam expedita
          fuga quibusdam ducimus. Minima, quibusdam officia illum beatae animi,
          voluptate illo reprehenderit ullam autem quisquam consequatur odit
          sint sunt fuga nemo voluptatum cumque ab asperiores aliquid pariatur
          maxime dolore dolorem, esse aspernatur. Porro, magnam similique.
          Aliquam facere culpa inventore officia vel consequuntur repudiandae
          aperiam error.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cum magni
          ducimus? Mollitia, quis accusantium vero esse eveniet magni at quidem
          earum ut perspiciatis a, cupiditate numquam cumque similique hic?
        </p>
      </div>
      <div className="description">
        <h1>About Author</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          at? Deserunt, quam! Dolores provident eaque quisquam ullam quam
          blanditiis debitis est, velit quo, libero iure. Distinctio
          voluptatibus, esse ratione minima molestiae nisi dolores nemo voluptas
          expedita natus! Minima, assumenda non blanditiis quos iste minus dolor
          ipsum officiis repellat libero veniam sit, officia vero ullam expedita
          fuga quibusdam ducimus. Minima, quibusdam officia illum beatae animi,
          voluptate illo reprehenderit ullam autem quisquam consequatur odit
          sint sunt fuga nemo voluptatum cumque ab asperiores aliquid pariatur
          maxime dolore dolorem, esse aspernatur. Porro, magnam similique.
          Aliquam facere culpa inventore officia vel consequuntur repudiandae
          aperiam error.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cum magni
          ducimus? Mollitia, quis accusantium vero esse eveniet magni at quidem
          earum ut perspiciatis a, cupiditate numquam cumque similique hic?
        </p>
      </div>
    </div>
  );
};

export default SpecificWorkshopPage;
