import { PageCriteria } from "./page-criteria.model";
import { SearchCriteria } from "./search-criteria.model";

export interface SearchRequest {
  searchCriteriaList?: Array<SearchCriteria | null>;
  pageRequestCriteria?: PageCriteria
}