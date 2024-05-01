import React from "react";
import MODEL from "../assests/product-2.jpg";
import LOCATION from "../assests/location.png";
import RATING from "../assests/star.svg";
import Arrow from "../assests/right-arrow-svgrepo-com.svg";
import PHONE from "../assests/icon-phone.svg";
import EMAIL from "../assests/icon-email.svg";
import ImageGallery from "../components/ImageGallery";

const SpecificMakeupPage = () => {
  return (
    <div className="specificMakeupPage-container">
      <div className="details-container">
        <div className="left-container">
          <div className="img-container">
            <img src={MODEL} alt="" />
          </div>

          <div className="user-details">
            <div>
              <h3>{"Makeup by Yashwanth"}</h3>

              <div className="icon-data">
                <img src={LOCATION} alt="" />
                <p>{"Jaipur, Rajasthan"}</p>
              </div>

              <div className="icon-data">
                <img src={LOCATION} alt="" />
                <p>{"Contact"}</p>
              </div>
            </div>
            <div>
              <div>
                <div className="icon-data rating">
                  <img src={RATING} alt="" />
                  <p>{"4.9"}</p>
                </div>

                <p className="reviews">53 reviews</p>
              </div>
            </div>
          </div>
        </div>

        <div className="right-container">
          <div className="header-container">
            <p>Starting Price</p>
            <div className="header">
              <p>Price Info</p>
              <img src={Arrow} alt="" />
            </div>
          </div>
          <p className="Price">{"₹ 11,000 per function"}</p>
          <div className="buttons-container">
            <button className="">
              <img src={EMAIL} alt="" />
              <p>{"address"}</p>
            </button>

            <button className="green-btn">
              <img src={PHONE} alt="" />
              <p>{"Contact"}</p>
            </button>
          </div>
        </div>
      </div>

      <div className="agent-details">
        <h1> Projects</h1>
        <div className="img-container">
          <ImageGallery />
        </div>

        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          excepturi molestias eius voluptatum non quibusdam accusantium ducimus,
          dolores ea ab nostrum optio voluptatibus quae ullam? Veniam quia, ex
          quam nemo nam neque dignissimos sapiente. Modi atque maiores nam ut
          iste ab nostrum in rem quam ducimus esse voluptates voluptas
          similique, adipisci cum numquam itaque. Quo eveniet repellendus
          consectetur asperiores, veritatis laboriosam eos voluptates, ut quos,
          nihil minima! Animi, provident? Consectetur dolorum, facere unde fugit
          veritatis consequuntur minus, velit, illo est reprehenderit
          perferendis. Inventore doloremque voluptatum saepe nesciunt ex
          molestias repellat nam aut deserunt officia numquam minima nihil totam
          cupiditate distinctio fuga nisi delectus quos explicabo adipisci
          tempore aliquid voluptate deserunt nam beatae eos ab eveniet maiores
          repudiandae hic exercitationem suscipit doloremque, inventore
          consequatur quia vel. Mollitia deleniti explicabo aperiam consectetur
          maxime, deserunt atque dolores dignissimos illum harum sunt placeat,
          veritatis aliquam aliquid minima nam! Consequuntur explicabo nihil
          ratione, voluptatum quisquam impedit quibusdam aliquam sequi
          repellendus dolor inventore ex odit quasi similique labore? Deleniti
          accusantium eum, quidem, nam eius nostrum, laborum dolores at enim vel.

        </p>
        <p >          laudantium. Mollitia tempore, reprehenderit laudantium fugit
          temporibus soluta dolore vel molestiae voluptas, recusandae quia
          consequatur. Ab, quaerat! Et nulla, odio praesentium incidunt
          doloremque, labore, perspiciatis deleniti quasi repellendus
          consequatur possimus quae sequi officia. Magni autem cum amet,
          provident pariatur tempore doloremque odio voluptatem officiis
          asperiores similique praesentium sunt totam quam dolorem consequuntur
          dolores esse laboriosam? Doloremque, corrupti. Esse ullam accusantium
          nulla sed sunt dicta, quia cumque impedit dolorem facere libero
          tempora ipsum atque ratione reiciendis sit nihil delectus sapiente
          minima? Ipsam quasi ex architecto laborum ullam sint culpa reiciendis
          rerum similique, neque suscipit perferendis non a vel cum illum
          repudiandae sunt? Qui deleniti nisi tempore odio sed debitis quaerat
          ratione repellat incidunt ut dolore veniam nulla architecto alias
          earum doloribus sint, minus vero culpa similique repellendus eligendi
          ipsum reprehenderit voluptate! Sint consectetur eligendi libero nisi
          magnam est laudantium aut doloribus porro. Voluptate neque minus sint.
          Qui recusandae, sequi, quisquam iusto, expedita aspernatur nostrum
          omnis vitae itaque labore esse! Molestiae, in.</p>
      </div>
    </div>
  );
};

export default SpecificMakeupPage;
