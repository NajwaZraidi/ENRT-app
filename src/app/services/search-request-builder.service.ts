import { Injectable } from '@angular/core';
import { SearchCriteria } from '../models/criteria/search-criteria.model';
import { PageCriteria } from '../models/criteria/page-criteria.model';
import { SearchRequest } from '../models/criteria/search-request.model';

@Injectable({
  providedIn: 'root'
})
export class SearchRequestBuilderService {

  constructor() { }

  getSearchRequest(form: {} = {}, page?: PageCriteria): SearchRequest {
    return {
      pageRequestCriteria: page,
      searchCriteriaList: Object.entries(form).map(this.getEntry).filter(entry => entry != null)
    }
  }

  getEntry(entry: Array<any>): SearchCriteria | null {
    if(entry[1] != null && entry[1] !== '') {
      return {
        column: entry[0],
        value: entry[1]
      };
    } else return null;
  }

}
