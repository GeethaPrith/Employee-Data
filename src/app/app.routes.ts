import { Routes } from '@angular/router';
import { EmpListComponent } from './emp-list/emp-list.component';
import { NewEmpComponent } from './new-emp/new-emp.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { TaskComponent } from './pages/task/task.component';
import { RemindersComponent } from './pages/reminders/reminders.component';
import { AuthComponent } from './auth/auth.component';
import { authGuard } from './services/auth.guard';
import { DriverComponent } from './driver/driver.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        component: AuthComponent
    },
    {
        path:'emp',
        component:EmpListComponent,
        canActivate:[authGuard]
    },
    {
        path:'driver',
        component:DriverComponent,
    }

    // {
    //     path: '',
    //     redirectTo: 'home',
    //     pathMatch: 'full'
    // },
    // {
    //     path: 'home',
    //     component: HomeComponent,
    //     title: 'Employee List'
    // },
    // {
    //     path: 'Dashboard',
    //     component: DashboardComponent,
    //     title: 'New Employee'
    // },
    // {
    //     path: 'tasks',
    //     component: TaskComponent,
    //     title: 'Task List'
    // },
    // {
    //     path: 'reminders',
    //     component: RemindersComponent,
    //     title: 'Reminder List'
    // },
    // {
    //     path: "**",
    //     component: NotFoundComponent
    // }
];
