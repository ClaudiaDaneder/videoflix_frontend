import { Routes } from '@angular/router';
import { VideoOverviewComponent } from './components/video-overview/video-overview.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { RegisterScreenComponent } from './components/register-screen/register-screen.component';
import { VideoDetailComponent } from './components/video-detail/video-detail.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ActivateAccountComponent } from './components/activate-account/activate-account.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'content', component: VideoOverviewComponent },
    { path: 'login', component: LoginScreenComponent },
    { path: 'register', component: RegisterScreenComponent },
    { path: 'content/:id', component: VideoDetailComponent },
    { path: 'reset-password-form/:ref', component: ResetPasswordComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'activate/:activation_token', component: ActivateAccountComponent },
];
