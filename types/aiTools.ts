export interface AiToolsResponse {
  page: number;
  page_size: number;
  total_pages: number;
  total_items: number;
  data: AiToolsType[];
}

export interface AiToolsType {
  tool_id: number; // Unique identifier
  title: string; // Title of the course
  imageURL: string;
  description: number;
  tags: string[];
  isFav: boolean;
  subject: string[];
  pricing: string[];
}
