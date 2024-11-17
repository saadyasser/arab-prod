import Card from "@/components/Card/Card";
import JavaIcon from "@/components/Svgs/JavaIcon/JavaIcon";
import classes from "./training-coursed.module.css";
import React from "react";
import { Button } from "@/components/ui/button";
import PhoneIcon from "@/components/Svgs/phoneIcon/PhoneIcon";
import Carousel from "@/components/Carousel/Carousel";

const TrainingCourses = () => {
  return (
    <section className={classes["training-courses"]}>
      <Carousel columns={4}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
          <Card key={index} clasName={classes["training-courses-card"]}>
            <div className={classes["card-header"]}>
              <JavaIcon style={{ margin: "0 auto" }} />
            </div>
            <div className={classes["card-body"]}>
              <h3 className={classes["card-title"]}>
                <span>اسم الكورس</span>
                <span>25%</span>
              </h3>
              <p style={{ textAlign: "center", marginBottom: "8px" }}>
                اسم المدرب
              </p>
              <p style={{ textAlign: "center" }}>52 فيديو,24 ساعة و45 دقيقة</p>
            </div>
            <div className={classes["btn-wrapper"]}>
              <Button className={`${classes["button"]} tropical-green`}>
                تواصل
                <PhoneIcon />
              </Button>
              <Button className={`${classes["button"]} tomato`}>
                تواصل
                <PhoneIcon />
              </Button>
            </div>
          </Card>
        ))}
      </Carousel>
      <Carousel columns={3}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
          <Card key={index} clasName={classes["training-courses-card"]}>
            <div className={classes["card-header"]}>
              <JavaIcon style={{ margin: "0 auto" }} />
            </div>
            <div className={classes["card-body"]}>
              <h3 className={classes["card-title"]}>
                <span>اسم الكورس</span>
                <span>25%</span>
              </h3>
              <p style={{ textAlign: "center", marginBottom: "8px" }}>
                اسم المدرب
              </p>
              <p style={{ textAlign: "center" }}>52 فيديو,24 ساعة و45 دقيقة</p>
            </div>
            <div className={classes["btn-wrapper"]}>
              <Button className={`${classes["button"]} tropical-green`}>
                تواصل
                <PhoneIcon />
              </Button>
              <Button className={`${classes["button"]} tomato`}>
                تواصل
                <PhoneIcon />
              </Button>
            </div>
          </Card>
        ))}
      </Carousel>
    </section>
  );
};

export default TrainingCourses;
