/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';
import { FormsModule } from '@angular/forms';

/* Module */
import { AuthModule } from './auth.module';

/* Containers */
import * as authContainers from './containers';

/* Guards */
import * as authGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
    },
    {
        path: 'login',
        canActivate: [],
        component: authContainers.LoginComponent,
        data: {
            title: 'Pages Login - SB Admin Angular',
        } as SBRouteData,
    },
    {
        path: 'register',
        canActivate: [],
        component: authContainers.RegisterComponent,
        data: {
            title: 'Pages Register - SB Admin Angular',
        } as SBRouteData,
    },
    {
        path: 'forgot-password',
        canActivate: [],
        component: authContainers.ForgotPasswordComponent,
        data: {
            title: 'Pages Forgot Password - SB Admin Angular',
        } as SBRouteData,
    },
    {
        path: 'update-user',
        canActivate: [],
        component: authContainers.UpdateUserComponent,
        data: {
            title: 'Update User - SB Admin Angular',
        } as SBRouteData,
    }
];

@NgModule({
    imports: [AuthModule, RouterModule.forChild(ROUTES),FormsModule],
    exports: [RouterModule],
})
export class AuthRoutingModule {}
