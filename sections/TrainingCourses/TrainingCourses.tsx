"use client";
import React, { useState } from "react";
import classes from "./training-coursed.module.css";
import SearchBar from "@/components/SearchBar/SearchBar";
import { CourseResponse } from "@/types/course";
// import { coursesData } from "@/data/courses";
import { useFetchData } from "@/hooks/useFetchData";
import CoursesList from "./CoursesList";

const TrainingCourses = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { data, loading, error } = useFetchData<CourseResponse>({
    endpoint: "/courses",
    params: { search: searchTerm }, // Pass the search term as a parameter
    queryKey: ["courses", searchTerm],
    // queryOptions: {
    //   retry: 2,
    //   staleTime: 1000 * 60 * 5,
    //   refetchOnWindowFocus: false,
    // },
  });

  // console.log(data && data?.courses, "courses");

  // const filteredCourses = data?.filter(
  //   (course) =>
  //     course?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     course?.trainers[0]?.first_name?.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  console.log(
    data?.courses?.filter((i) => i.status === "available"),
    "filter"
  );
  console.log(
    data?.courses?.filter((i) => i.status === "coming_soon"),
    "filter coming_soon"
  );

  return (
    <section className={classes["training-courses"]}>
      <div className={classes["training-courses-header"]}>
        <div className={classes["title"]}>
          <h2 style={{ display: "inline-block" }}>الدورات التدريبية</h2>
        </div>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      <CoursesList
        data={data?.courses?.filter((i) => i.status === "available")}
        loading={loading}
        error={error}
      />

      <div className={classes["soon"]}>
        <div className={classes["title"]}>
          <h2 style={{ display: "inline-block" }}>قريبا</h2>
        </div>
      </div>

      <CoursesList
        data={data?.courses?.filter((i) => i.status === "coming_soon")}
        loading={loading}
        error={error}
      />

      {/* {filteredCourses.length > 0 ? (
        <Carousel columns={4}>
          {filteredCourses.map((course: CourseType) => (
            <Course key={course.id} {...course} />
          ))}
        </Carousel>
      ) : (
        <p className={classes["no-results"]}>لا توجد نتائج للبحث</p>
      )} */}
      {/* {filteredCourses.length > 0 ? (
        <Carousel columns={4}>
          {filteredCourses.map((course: CourseType) => (
            <Course key={course.id} {...course} />
          ))}
        </Carousel>
      ) : (
        <p className={classes["no-results"]}>لا توجد نتائج للبحث</p>
      )}  */}
    </section>
  );
};

export default TrainingCourses;
