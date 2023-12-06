import { Component, OnInit } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-restaurant-page',
  standalone: true,
  imports: [TabViewModule,MenuModule],
  templateUrl: './restaurant-page.component.html',
  styleUrl: './restaurant-page.component.scss'
})
export class RestaurantPageComponent implements OnInit {
  activeIndex: number = 0;

  // scrollableTabs: any[] = Array.from({ length: 15 }, (_, i) => ({id: i, title: "Title", content: "Content" }));

  scrollableTabs = [
    {id: 1, title: "tab1", content: "Content tab1" },
    {id: 2, title: "tab2", content: "Content tab2" },
    {id: 3, title: "tab3", content: "Content tab3" },
    {id: 4, title: "tab4", content: "Content tab4" },
    {id: 5, title: "tab5", content: "Content tab5" },
    {id: 6, title: "tab6", content: "Content tab6" },
    {id: 7, title: "tab7", content: "Content tab7" },
    {id: 8, title: "tab8", content: "Content tab8" },
  ]
  
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'Options',
              items: [
                  {
                      label: 'tab1',
                      escape: false,
                      icon: 'pi pi-refresh',
                      iconClass: 'text-xl'
                  },
                  {
                      label: 'tab2',
                      escape: false,
                      icon: 'pi pi-times',
                      iconClass: 'text-xl'
                  }
              ]
          }
      ];
  }


  closeTab(index: number): void {
    // Close the tab by removing it from the tabs array
    this.scrollableTabs.splice(index, 1);

    // Adjust the activeTabIndex if needed
    if (index === this.activeIndex && this.scrollableTabs.length > 0) {
      this.activeIndex = Math.min(index, this.scrollableTabs.length - 1);
    }
  }

  openTab(index: number): void {
    this.activeIndex = index;
  }
}