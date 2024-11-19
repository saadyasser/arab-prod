import { ReactNode } from "react";

export interface CourseType {
    id: number; // Unique identifier
    courseName: string; // Name of the course
    coachName: string; // Name of the coach
    statistics: string; // Statistics string, e.g., "52 فيديو,24 ساعة و45 دقيقة"
    courseImage: ReactNode; // JSX element (icon or image)
}
