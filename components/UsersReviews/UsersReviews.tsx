import React from "react";

import Image from "next/image";
import Card from "../Card/Card";
import FlexBox from "../FlexBox/FlexBox";
import Rating from "../Rating/Rating";
import Avatar from "../Avatar/Avatar";
import ReviewBackground from "@/public/images/review-background.png";
import DataReveiws from "./data.json";
import Carousel from "../Carousel/Carousel";
import "./UsersReviews.css";

const UsersReviews = () => {
  return (
    <section className="users-reviews">
      <Carousel columns={4}>
        {DataReveiws.map((data) => (
          <Card key={data.id}>
            <Image
              src={ReviewBackground}
              alt="review background"
              className="backgrondimg"
            />
            <FlexBox direction="column">
              <div style={{ textAlign: "center" }}>
                <Avatar src={data.image} />
                <h3>{data.name}</h3>
                <p className="description">{data.description}</p>
              </div>
              <FlexBox justify="space-between" className="flexbox">
                <Rating value={data.rate} maxRating={5} />
                <p>{data.date}</p>
              </FlexBox>
            </FlexBox>
          </Card>
        ))}
      </Carousel>
    </section>
  );
};

export default UsersReviews;
