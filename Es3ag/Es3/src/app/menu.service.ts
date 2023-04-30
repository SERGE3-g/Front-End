import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuItem } from './menu/model/menu-item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

    private menuItemsUrl = 'https://example.com/api/menuItems';

    constructor(private http: HttpClient) { }

    getMenuItems(): Observable<MenuItem[]> {
      return this.http.get<MenuItem[]>(this.menuItemsUrl);
    }


}
