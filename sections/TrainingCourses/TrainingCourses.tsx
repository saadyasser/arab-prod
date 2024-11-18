import Card from "@/components/Card/Card";
import JavaIcon from "@/components/Svgs/JavaIcon/JavaIcon";
import classes from "./training-coursed.module.css";
import React from "react";
import { Button } from "@/components/ui/button";
import PhoneIcon from "@/components/Svgs/phoneIcon/PhoneIcon";
import Carousel from "@/components/Carousel/Carousel";
import Image from "next/image";
import SearchBar from "@/components/SearchBar/SearchBar";
import Course from "@/components/Course/Course";

const TrainingCourses = () => {
  return (
    <section className={classes["training-courses"]}>
      <div className={classes["training-courses-header"]}>
        <div className={classes["title"]}>
          <h2 style={{ display: "inline-block" }}>الدورات التدريبية</h2>
        </div>
        <SearchBar />
      </div>
      <Carousel columns={4}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
          <Course key={index} />
        ))}
      </Carousel>
      <Carousel columns={4}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
          <Course key={index} />
        ))}
      </Carousel>
    </section>
  );
};

export default TrainingCourses;
