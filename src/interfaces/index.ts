export interface singleNews {
  author: string;
  commen_text: string;
  created_at: string;
  created_at_i: number;
  num_comments: number | null;
  objectID: string;
  parent_id: number;
  points: number | null;
  story_id: number;
  story_text: string | null;
  story_title: string;
  story_url: string;
  title: string | null;
  url: string | null;
}

export interface NewsData {
  exhaustiveNbHits: boolean;
  exhaustiveTypo: boolean;
  hits: Array<singleNews>;
  hitsPerPage: number;
  nbHits: number;
  nbPages: number;
  page: number;
  params: string;
  processingTimeMS: number;
  query: string;
}
