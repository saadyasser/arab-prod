import React from "react";

import Image from "next/image";
import Card from "../Card/Card";
import FlexBox from "../FlexBox/FlexBox";
import Rating from "../Rating/Rating";
import Avatar from "../Avatar/Avatar";
import ReviewBackground from "@/public/images/review-background.png";
import DataReveiws from "./data.json";
import "./UsersReviews.css";

const UsersReviews = () => {
  return (
    <section className="users-reviews">
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
            <FlexBox
              align="center"
              justify="space-between"
              style={{ marginTop: "67px" }}
            >
              <Rating value={data.rate} maxRating={5} />
              <p>{data.date}</p>
            </FlexBox>
          </FlexBox>
        </Card>
      ))}
    </section>
  );
};

export default UsersReviews;
