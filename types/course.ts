// export interface CourseType {
//     id: number; // Unique identifier
//     courseName: string; // Name of the course
//     coachName: string; // Name of the coach
//     statistics: string; // Statistics string, e.g., "52 فيديو,24 ساعة و45 دقيقة"
//     courseImage: ReactNode; // JSX element (icon or image)
// }

export interface CourseResponse {
  courses: CourseType[];
}

export interface CourseType {
  id: number; // Unique identifier
  title: string; // Title of the course
  imageURL: string; // URL of the
  total_videos: number;
  total_duration: string;
  price: number;
  original_price: number;
  currency: string; // Currency
  status: string; // Status
  trainers: [
    {
      id: number; // Unique identifier of the trainer
      first_name: string; // Name of the trainer
      last_name: string; // Last name of the trainer
      leader: boolean;
    }
  ];
}
