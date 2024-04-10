import React from "react";
import { useParams } from "react-router-dom";
import Model from "../assests/model.png";
import ImageGallery from "../components/ImageGallery";

const SpeciicProductPage = () => {
  let { id } = useParams();
  const data = [
    {
      image: Model,
      title: "This is hiiii ioi askhdq dh ad uoksuoiss ",
      rating: "4.9",
      review: 400,
      address: "jaipur rajastan",
      feature: "The Product Price is",
      price: 4000,
    },
    {
      image: Model,
      title: "This is new product",
      rating: "4.9",
      review: 400,
      address: "jaipur rajastan",
      feature: "The Product Price is",
      price: 4000,
    },
    {
      image: Model,
      title: "This is new product",
      rating: "4.9",
      review: 400,
      address: "jaipur rajastan",
      feature: "The Product Price is",
      price: 4000,
    },
    {
      image: Model,
      title: "This is new product",
      rating: "4.9",
      review: 400,
      address: "jaipur rajastan",
      feature: "The Product Price is",
      price: 4000,
    },
    {
      image: Model,
      title: "This is new product",
      rating: "4.9",
      review: 400,
      address: "jaipur rajastan",
      feature: "The Product Price is",
      price: 4000,
    },
    {
      image: Model,
      title: "This is new product",
      rating: "4.9",
      review: 400,
      address: "jaipur rajastan",
      feature: "The Product Price is",
      price: 4000,
    },
  ];
  return (
    // <div onClick={()=>console.log(data[id])}>SpeciicProductList</div
    <div className="specific-product-container">
      <h1 className="heading" style={{ textAlign: "center" }}>
        The product full name displayed here
      </h1>

      <div className="single-product-container">
        <div className="img-container item">
          <ImageGallery />
        </div>

        <div className="details item item-1 ">
          <h2 style={{ marginBottom: "1rem" }}>{data[0].title}</h2>
          <p style={{ margin: "1rem 0" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            nihil vitae quia veniam quasi impedit. Dolor, laudantium. Harum
            nostrum sequi odit esse mollitia facilis possimus, consequatur earum
            tenetur minus quas quis qui, minima voluptates ducimus reiciendis
            sint veniam velit eum?
          </p>
          <h3 style={{ marginBottom: "1rem" }}> price - ₹ 4000</h3>
          <h3 style={{ marginBottom: "1rem" }}>Key points</h3>

          <div className="buttons-container">
            <button className="btn">Add to cart</button>
            <button className="btn">Buy NOW</button>
          </div>
        </div>
      </div>
      <hr></hr>

      <div className="description">
        <h3 style={{ padding: "0.5rem",borderBottom:"1px solid grey" ,marginBottom:"1rem"}}>Description</h3>
        <p style={
          {lineHeight:"1.5rem",marginBottom:"1rem",}
        }>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          accusantium nisi velit aut enim ex numquam eos porro magni illo
          deleniti voluptate exercitationem, quisquam doloribus maiores
          temporibus, cumque libero architecto quia inventore voluptatibus
          asperiores! Deserunt eos repellendus laborum dolorem! Commodi qui
          aperiam similique placeat perferendis tempore libero inventore
          delectus praesentium assumenda ab amet sapiente dolore ex nihil quia
          totam magnam perspiciatis maiores quas, sunt nobis consectetur. Earum
          adipisci nostrum harum quo mollitia maiores porro, ab illum. Libero ut
          sit dolorem velit quibusdam at voluptate deleniti corrupti sed rerum
          explicabo, quod perspiciatis, repellat hic sunt vitae quo fuga
          corporis voluptas quaerat. Doloremque quas officia iusto voluptates
          tenetur non distinctio sapiente reprehenderit nobis omnis modi,
          suscipit in est repellat hic amet ducimus delectus facilis eligendi,
          dolorem ullam doloribus. Reprehenderit, culpa. Recusandae dicta, ipsam
          eos expedita vitae labore. Voluptatum dolores suscipit, facere totam
          saepe, aut fugit debitis maxime dignissimos optio est odit beatae?
        </p>
        <p style={
          {lineHeight:"1.5rem"}
        }>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          accusantium nisi velit aut enim ex numquam eos porro magni illo
          deleniti voluptate exercitationem, quisquam doloribus maiores
          temporibus, cumque libero architecto quia inventore voluptatibus
          asperiores! Deserunt eos repellendus laborum dolorem! Commodi qui
          aperiam similique placeat perferendis tempore libero inventore
          delectus praesentium assumenda ab amet sapiente dolore ex nihil quia
          totam magnam perspiciatis maiores quas, sunt nobis consectetur. Earum
          adipisci nostrum harum quo mollitia maiores porro, ab illum. Libero ut
          sit dolorem velit quibusdam at voluptate deleniti corrupti sed rerum
          explicabo, quod perspiciatis, repellat hic sunt vitae quo fuga
          corporis voluptas quaerat. Doloremque quas officia iusto voluptates
          tenetur non distinctio sapiente reprehenderit nobis omnis modi,
          suscipit in est repellat hic amet ducimus delectus facilis eligendi,
          dolorem ullam doloribus. Reprehenderit, culpa. Recusandae dicta, ipsam
          eos expedita vitae labore. Voluptatum dolores suscipit, facere totam
          saepe, aut fugit debitis maxime dignissimos optio est odit beatae?
        </p>
      </div>
    </div>
  );
};

export default SpeciicProductPage;
