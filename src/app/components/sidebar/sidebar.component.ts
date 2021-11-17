import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-orange', class: '' },
   // { path: '/icons', title: 'Icons',  icon:'ni-planet text-orange', class: '' },
   // { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    //{ path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-orange', class: '' },
    //{ path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-orange', class: '' },
    //{ path: '/login', title: 'Login',  icon:'ni-key-25 text-orange', class: '' },
    { path: '/equipes', title: 'Equipes',  icon:'fas fa-users-cog text-orange', class: '' },
    { path: '/members', title: 'Members',  icon:'fas fa-users-cog text-orange', class: '' },
    
    { path: '/incidents', title: 'Declarer un incidents',  icon:'fas fa-users-cog text-orange', class: '' },
    { path: '/allincidents', title: 'Incidents',  icon:'fas fa-users-cog text-orange', class: '' }
 //   { path: '/register', title: 'Register',  icon:'ni-circle-08 text-orange', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
