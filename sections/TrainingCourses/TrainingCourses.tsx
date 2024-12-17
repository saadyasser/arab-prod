"use client";
import React, {  useState } from "react";
import classes from "./training-coursed.module.css";
import SearchBar from "@/components/SearchBar/SearchBar";
import Carousel from "@/components/Carousel/Carousel";
import Course from "@/components/Course/Course";
import { CourseType } from "@/types/course";
// import { coursesData } from "@/data/courses";
import { useFetchData } from "@/hooks/useFetchData";

const TrainingCourses = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { data, loading, error } = useFetchData<CourseType[]>({
    endpoint: '/courses', // Courses API endpoint
    queryKey: ['courses'],
    queryOptions: {
      retry: 2, 
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false, // Don't refetch when window is focused
    },
  });
  console.log(data && data?.courses, 'courses');
  

  // const filteredCourses = data?.filter(
  //   (course) =>
  //     course?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     course?.trainers[0]?.first_name?.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className={classes["training-courses"]}>
      <div className={classes["training-courses-header"]}>
        <div className={classes["title"]}>
          <h2 style={{ display: "inline-block" }}>الدورات التدريبية</h2>
        </div>
        {/* <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
      </div>

      <Carousel columns={4}>
      {
        data?.courses?.map((item) => (
          <Course key={item.id} {...item} />
        ))
      }
      </Carousel>

      <Carousel columns={4}>
      {
        data?.courses?.map((item) => (
          <Course key={item.id} {...item} />
        ))
      }
      </Carousel>

      {/* {filteredCourses.length > 0 ? (
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
      )} */}
    </section>
  );
};

export default TrainingCourses;
