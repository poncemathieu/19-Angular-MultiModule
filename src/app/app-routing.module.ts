import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePlaylistComponent } from './pages/auth/create-playlist/create-playlist.component';
import { PlaylistDetailsComponent } from './pages/auth/playlist-details/playlist-details.component';
import { PlaylistsComponent } from './pages/auth/playlists/playlists.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'playlist'},
  {path: 'playlist', component: PlaylistsComponent},
  {path: 'playlist-detail', component: PlaylistDetailsComponent},
  {path: 'create-playlist', component: CreatePlaylistComponent},
  { path: 'video', loadChildren: () => import('./pages/video/video.module').then(m => m.VideoModule) },
  { path: 'connexion', loadChildren: () => import('./pages/connexion/connexion.module').then(m => m.ConnexionModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
