import { Button } from "@chakra-ui/react";
import React, { FC } from "react";
import MoreIcon from "../Svgs/MoreIcon/MoreIcon";
import CartIcon from "../Svgs/CartIcon/CartIcon";
import JavaIcon from "../Svgs/JavaIcon/JavaIcon";
import Card from "../Card/Card";
import classes from "./Course.module.css";
import { CourseType } from "@/types/course";
// import Image from "next/image";

const Course: FC<CourseType> = (props) => {
  const { id, title, imageURL, trainers, total_duration, price } = props;

  return (
    <Card clasName={classes["training-courses-card"]}>
      <div className={classes["card-header"]}>
        {/* <Image src={imageURL} alt="course image" width={100} height={100} /> */}
        <JavaIcon style={{ margin: "0 auto" }} />
      </div>
      <div className={classes["card-body"]}>
        <h3 className={classes["card-title"]}>
          <span>{title}</span>
          <span>{price}</span>
        </h3>
        <p style={{ marginBottom: "8px" }}>{trainers[0].first_name}</p>
        <p>{total_duration}</p>
      </div>
      <div className={classes["btn-wrapper"]}>
        <Button className={`${classes["button"]} tropical-green`}>
          اقرأ المزيد
          <MoreIcon />
        </Button>
        <Button className={`${classes["button"]} tomato`}>
          شراء
          <CartIcon />
        </Button>
      </div>
    </Card>
  );
};

export default Course;
