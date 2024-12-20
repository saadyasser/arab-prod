import Carousel from "@/components/Carousel/Carousel";
import Course from "@/components/Course/Course";
import { CourseType } from "@/types/course";
import React from "react";

interface CourseItem {
  data: CourseType[] | undefined;
  loading: boolean;
  error: string | null;
}

const CoursesList = (props: CourseItem) => {
  const { data, loading, error } = props;

  if (loading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px",
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

  return (
    <>
      {data && (
        <Carousel columns={4}>
          {data?.map((item: CourseType) => (
            <Course key={item.id} {...item} />
          ))}
        </Carousel>
      )}
    </>
  );
};

export default CoursesList;
