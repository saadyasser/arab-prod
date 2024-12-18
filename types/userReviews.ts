export interface ReviewsResponse {
  reviews: ReviewsType[];
}

export interface ReviewsType {
  id: number; // Unique identifier
  reviewText: string; // Title of the course
  reviewerName: string; // URL of the
  reviewerLastName: number;
  imageURL: string;
  rating: number;
  date: string;
}
