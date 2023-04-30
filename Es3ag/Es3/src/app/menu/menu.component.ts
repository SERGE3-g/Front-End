import { Component, OnInit } from '@angular/core';
import { MenuItem } from './model/menu-item';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

  export class MenuComponent implements OnInit {
search() {
throw new Error('Method not implemented.');
}
filteredMenuItems: any;
searchTerm: any;
addToCart(_t10: any) {
throw new Error('Method not implemented.');
}

    menuItems!: MenuItem[];

    constructor(private menuService: MenuService) { }

    ngOnInit() {
      this.menuService.getMenuItems().subscribe((menuItems) => {
        this.menuItems = menuItems;
      });
    }

  }

