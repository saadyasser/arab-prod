import Carousel from "@/components/Carousel/Carousel";
import Course from "@/components/Course/Course";
import { CourseResponse, CourseType } from "@/types/course";
import React from "react";

interface CourseItem {
  data: CourseResponse | undefined;
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
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {data && (
        <Carousel columns={4}>
          {data?.courses?.map((item: CourseType) => (
            <Course key={item.id} {...item} />
          ))}
        </Carousel>
      )}

      {data && (
        <Carousel columns={4}>
          {data?.courses?.map((item: CourseType) => (
            <Course key={item.id} {...item} />
          ))}
        </Carousel>
      )}
    </>
  );
};

export default CoursesList;
