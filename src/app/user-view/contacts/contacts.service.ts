import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BASE_API_URL} from "../../../environments/environment";
import {Observable} from "rxjs";
import {IContactsList} from "../../admin/admin-edit-contacts/admin-edit-contacts.entity";

@Injectable()
export class ContactsService {

  constructor(readonly httpClient: HttpClient) { }

  public getContactsList(): Observable<IContactsList> {
    return this.httpClient.get(`${BASE_API_URL}/contacts`) as Observable<IContactsList>;
  }
}
