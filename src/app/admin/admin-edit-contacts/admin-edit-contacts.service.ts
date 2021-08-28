import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {BASE_API_URL} from "../../../environments/environment";
import {IContactItem, IContactsList} from "./admin-edit-contacts.entity";
import {BaseApiDirective} from "../base-api.directive";

@Injectable()
export class AdminEditContactsService extends BaseApiDirective {

  constructor(readonly httpClient: HttpClient) {
    super();
  }

  public getContactsList(): Observable<IContactsList> {
    return this.httpClient.get(`${BASE_API_URL}/contacts`, { headers: this.getHeaders() }) as Observable<IContactsList>;
  }

  public updateContact(contactId: number, contactItem: IContactItem): Observable<object> {
    return this.httpClient.put(`${BASE_API_URL}/contacts/${contactId}`, contactItem, { headers: this.getHeaders() });
  }

  public createContact(contactItem: IContactItem): Observable<object> {
    return this.httpClient.post(`${BASE_API_URL}/contacts/create`, contactItem, { headers: this.getHeaders() });
  }

  public deleteContact(contactId: number): Observable<object> {
    return this.httpClient.delete(`${BASE_API_URL}/contacts/${contactId}`, { headers: this.getHeaders() })
  }
}
