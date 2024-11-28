"use client";
import React, { useState } from "react";
import classes from "./training-coursed.module.css";
import SearchBar from "@/components/SearchBar/SearchBar";
import Carousel from "@/components/Carousel/Carousel";
import Course from "@/components/Course/Course";
import { CourseType } from "@/types/course";
import { coursesData } from "@/data/courses";

const TrainingCourses = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = coursesData.filter(
    (course) =>
      course.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.coachName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className={classes["training-courses"]}>
      <div className={classes["training-courses-header"]}>
        <div className={classes["title"]}>
          <h2 style={{ display: "inline-block" }}>الدورات التدريبية</h2>
        </div>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      {filteredCourses.length > 0 ? (
        <Carousel columns={4}>
          {filteredCourses.map((course: CourseType) => (
            <Course key={course.id} {...course} />
          ))}
        </Carousel>
      ) : (
        <p className={classes["no-results"]}>لا توجد نتائج للبحث</p>
      )}
      {filteredCourses.length > 0 ? (
        <Carousel columns={4}>
          {filteredCourses.map((course: CourseType) => (
            <Course key={course.id} {...course} />
          ))}
        </Carousel>
      ) : (
        <p className={classes["no-results"]}>لا توجد نتائج للبحث</p>
      )}
    </section>
  );
};

export default TrainingCourses;
