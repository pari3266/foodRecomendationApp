import { Component, OnInit } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { Subject } from 'rxjs';
import { DragDropModule } from 'primeng/dragdrop';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
interface Tab {
  title: string;
  content: string;
}

@Component({
  selector: 'app-restaurant-page',
  standalone: true,
  imports: [TabViewModule, MenuModule, DragDropModule,CommonModule],
  templateUrl: './restaurant-page.component.html',
  styleUrl: './restaurant-page.component.scss'
})

export class RestaurantPageComponent implements OnInit {
  activeTabIndex: number = 0;
  // Subjects for tab management
  private closeTabSubject = new Subject<number>();
  private openTabSubject = new Subject<number>();
  // tabs: any[] = Array.from({ length: 15 }, (_, i) => ({id: i, title: "Title", content: "Content" }));

  tabs = [
    { id: 1, title: "tab1", content: "Content tab1", active: true },
    { id: 2, title: "tab2", content: "Content tab2", active: false },
    { id: 3, title: "tab3", content: "Content tab3", active: false },
    { id: 4, title: "tab4", content: "Content tab4", active: false },
    { id: 5, title: "tab5", content: "Content tab5", active: false },
    { id: 6, title: "tab6", content: "Content tab6", active: false },
    { id: 7, title: "tab7", content: "Content tab7", active: false },
    { id: 8, title: "tab8", content: "Content tab8", active: false },
  ]

  menuItems: MenuItem[] | undefined;
  closedTabIndex: number | null = null; // Index of the recently closed tab
  constructor() {
    // Subscribe to tab closure events
    this.closeTabSubject.subscribe((index) => this.closeTab(index));
  }
  ngOnInit() {
    setTimeout(() => {
      this.menuItems = [
        { label: 'Open Tab 1', command: () => this.openTab(1) },
        { label: 'Open Tab 2', command: () => this.openTab(2) },
        { label: 'Open Tab 3', command: () => this.openTab(3) },
        { label: 'Open Tab 4', command: () => this.openTab(4) },
        { label: 'Reopen Closed Tab', command: () => this.reopenClosedTab() },
        // Add more menu items as needed
      ];
    }, 1000);
  }


  closeTab(index: number): void {
    console.log('hi', index);
    this.closedTabIndex = index;

    const tabIndex = this.tabs.findIndex(tab => tab.id === index);
    if (tabIndex !== -1) {
      this.tabs.splice(tabIndex, 1);
      if (tabIndex === this.activeTabIndex && this.tabs.length > 0) {
        this.activeTabIndex = Math.min(tabIndex, this.tabs.length - 1);
      }
    }
  }

  openTab(index: number): void {
    const tabIndex = this.tabs.findIndex(tab => tab.id === index);
    if (tabIndex !== -1) {
      this.activeTabIndex = tabIndex;
    }

    this.reopenClosedTab();
  }

  reopenClosedTab(): void {
    console.log(this.closedTabIndex);

    if (this.closedTabIndex !== null && this.closedTabIndex >= 0) {
      this.tabs.splice(this.closedTabIndex, 0, {id: this.closedTabIndex  , title: `tab ${this.closedTabIndex }`, content: `Content tab ${this.closedTabIndex }`, active: false});
      this.closedTabIndex = null;
    }
  }

  
  // onTabDrop(event: any): void {
  //   moveItemInArray(this.tabs, event.previousIndex, event.currentIndex);
  // }

  // handleDrop(event: any) {
  //   // Access the dragged item
  //   const draggedItem = event.dragData;

  //   // Access the target droppable area
  //   const targetDroppableArea = event.dropArea;

  //   // Implement your custom logic for handling the drop
  //   console.log(`Item dropped: ${draggedItem} onto ${targetDroppableArea}`);
    
  //   // Add your specific logic here, e.g., updating data structures, triggering actions, etc.
  // }

  handleTabChange(event: any) {
    console.log(event);
    
    // Update your tabs array based on the selected tab
    const selectedIndex = event.index;

    const selectedTabHeader = event.tab.textLabel;

    // Set the 'active' property of the tabs based on the selected tab header
    this.tabs.forEach(tab => {
      tab.active = tab.title === selectedTabHeader;
    });
    // Add any additional logic you need when a tab is changed
    console.log(`Selected tab: ${this.tabs[selectedIndex].title}`);
  }
  handleTabDrop(event: any, currentIndex: number) {
    // Handle tab drop and update the order of tabs
    moveItemInArray(this.tabs, event.previousIndex, currentIndex);
  }

}