import React from "react";

import Image from "next/image";
import Card from "@/components/Card/Card";
import FlexBox from "@/components/FlexBox/FlexBox";
import Rating from "@/components/Rating/Rating";
import Avatar from "@/components/Avatar/Avatar";
import ReviewBackground from "@/public/images/review-background.png";
import DataReviews from "./data.json";
import Carousel from "@/components/Carousel/Carousel";
import styles from "./UsersReviews.module.css";

const UsersReviews = () => {
  return (
    <section className={styles["users-reviews"]}>
      <Carousel columns={4}>
        {DataReviews.map((data) => (
          <Card key={data.id} clasName={styles["card"]}>
            <Image
              src={ReviewBackground}
              alt="review background"
              className={styles["backgrondimg"]}
            />
            <FlexBox direction="column">
              <div className={styles["header"]}>
                <Avatar src={data.image} />
                <h3>{data.name}</h3>
                <p className={styles["description"]}>{data.description}</p>
              </div>
              <FlexBox justify="space-between" className={styles["flexbox"]}>
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
