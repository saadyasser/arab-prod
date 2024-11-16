import Card from "@/components/Card/Card";
import JavaIcon from "@/components/Svgs/JavaIcon/JavaIcon";
import classes from "./training-coursed.module.css";
import React from "react";
import { Button } from "@/components/ui/button";
import PhoneIcon from "@/components/Svgs/phoneIcon/PhoneIcon";

const TrainingCourses = () => {
  return (
    <section className={classes["training-courses"]}>
      <Card clasName={classes["training-courses-card"]}>
        <div className={classes["card-header"]}>
          <JavaIcon />
        </div>
        <div className={classes["card-body"]}>
          <h3 className={classes["card-title"]}>
            <span>اسم الكورس</span>
            <span>25%</span>
          </h3>
          <p style={{ textAlign: "center", marginBottom: "8px" }}>اسم المدرب</p>
          <p style={{ textAlign: "center" }}>52 فيديو,24 ساعة و45 دقيقة</p>
        </div>
        <div className={classes["btn-wrapper"]}>
          <Button className={`${classes["button"]} tropical-green`}>
            تواصل معنا
            <PhoneIcon />
          </Button>
          <Button className={`${classes["button"]} tomato`}>
            تواصل معنا
            <PhoneIcon />
          </Button>
        </div>
      </Card>
    </section>
  );
};

export default TrainingCourses;
