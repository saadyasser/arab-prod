import { Button } from "@chakra-ui/react";
import React, { FC } from "react";
import MoreIcon from "../Svgs/MoreIcon/MoreIcon";
import CartIcon from "../Svgs/CartIcon/CartIcon";
import JavaIcon from "../Svgs/JavaIcon/JavaIcon";
import Card from "../Card/Card";
import classes from "./Course.module.css";
import { CourseType } from "@/types/course";

const Course: FC<CourseType> = (props) => {
  const { id, courseName, courseImage, coachName, statistics } = props;
  return (
    <Card clasName={classes["training-courses-card"]}>
      <div className={classes["card-header"]}>{courseImage}</div>
      <div className={classes["card-body"]}>
        <h3 className={classes["card-title"]}>
          <span>{courseName}</span>
          <span>25%</span>
        </h3>
        <p style={{ marginBottom: "8px" }}>{coachName}</p>
        <p>{statistics}</p>
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
