import { Routes } from '@angular/router';
import { VideoOverviewComponent } from './components/video-overview/video-overview.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { RegisterScreenComponent } from './components/register-screen/register-screen.component';
import { VideoDetailComponent } from './components/video-detail/video-detail.component';

export const routes: Routes = [
    { path: '', redirectTo: 'content', pathMatch: 'full' },
    { path: 'content', component: VideoOverviewComponent },
    { path: 'login', component: LoginScreenComponent },
    { path: 'register', component: RegisterScreenComponent },
    { path: 'content/:id', component: VideoDetailComponent },
];
