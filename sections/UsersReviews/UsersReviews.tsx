"use client";

import React from "react";
import Image from "next/image";
import Card from "@/components/Card/Card";
import FlexBox from "@/components/FlexBox/FlexBox";
import Rating from "@/components/Rating/Rating";
import Avatar from "@/components/Avatar/Avatar";
import ReviewBackground from "@/public/images/review-background.png";
// import DataReviews from "./data.json";
import Carousel from "@/components/Carousel/Carousel";
import styles from "./UsersReviews.module.css";
import { useFetchData } from "@/hooks/useFetchData";
import { ReviewsResponse } from "@/types/userReviews";

const UsersReviews = () => {
  const { data, loading, error } = useFetchData<ReviewsResponse>({
    endpoint: "/reviews",
    queryKey: ["reviews"],
    // queryOptions: {
    //   retry: 2,
    //   staleTime: 1000 * 60 * 5,
    //   refetchOnWindowFocus: false,
    // },
  });

  if (loading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px",
          height: "100vh",
        }}
      >
        تحميل...
      </div>
    );
  if (error)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px",
        }}
      >
        Error: {error}
      </div>
    );

  console.log(data);

  return (
    <section className={styles["users-reviews"]}>
      {data && (
        <Carousel columns={3}>
          {data?.reviews?.map((data) => (
            <Card key={data.id} clasName={styles["card"]}>
              <Image
                src={ReviewBackground}
                alt="review background"
                className={styles["backgrondimg"]}
              />
              <FlexBox direction="column">
                <div className={styles["header"]}>
                  <Avatar src="/images/UserReview1.png" />
                  <h3>
                    {data.reviewerName} {data.reviewerLastName}
                  </h3>
                  <p className={styles["description"]}>{data.reviewText}</p>
                </div>
                <FlexBox justify="space-between" className={styles["flexbox"]}>
                  <Rating value={data.rating} maxRating={5} />
                  <p>{data.date}</p>
                </FlexBox>
              </FlexBox>
            </Card>
          ))}
        </Carousel>
      )}
    </section>
  );
};

export default UsersReviews;
