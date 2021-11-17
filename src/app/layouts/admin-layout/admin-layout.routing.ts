import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { EquipesComponent } from 'src/app/pages/equipes/equipes.component';
import { MemberService } from 'src/app/services/member.service';
import { MembresComponent } from 'src/app/pages/membres/membres.component';
import { ProfilememberComponent } from 'src/app/pages/profilemember/profilemember.component';
import { IncidentsComponent } from 'src/app/pages/incidents/incidents.component';
import { AllincidentsComponent } from 'src/app/components/allincidents/allincidents.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'equipes',          component: EquipesComponent },
    { path: 'members',          component: MembresComponent },
    { path: 'profileMember/:id',          component: ProfilememberComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'incidents',           component: IncidentsComponent },
    { path: 'allincidents',           component: AllincidentsComponent }

];
