import { Button } from "@chakra-ui/react";
import React from "react";
import MoreIcon from "../Svgs/MoreIcon/MoreIcon";
import CartIcon from "../Svgs/CartIcon/CartIcon";
import JavaIcon from "../Svgs/JavaIcon/JavaIcon";
import Card from "../Card/Card";
import classes from "./Course.module.css";

const Course = () => {
  return (
    <Card clasName={classes["training-courses-card"]}>
      <div className={classes["card-header"]}>
        <JavaIcon style={{ margin: "0 auto" }} />
      </div>
      <div className={classes["card-body"]}>
        <h3 className={classes["card-title"]}>
          <span>اسم الكورس</span>
          <span>25%</span>
        </h3>
        <p style={{ marginBottom: "8px" }}>اسم المدرب</p>
        <p>52 فيديو,24 ساعة و45 دقيقة</p>
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
