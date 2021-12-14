export interface singleNews {
  objectID: string;
  author: string;
  created_at: string;
  story_title: string;
  story_url: string;
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
