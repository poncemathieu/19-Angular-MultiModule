import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistsComponent } from './playlists/playlists.component';
import { PlaylistDetailsComponent } from './playlist-details/playlist-details.component';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';



@NgModule({
  declarations: [
    PlaylistsComponent,
    PlaylistDetailsComponent,
    CreatePlaylistComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
