import { Component, OnInit } from "@angular/core";
import { Album } from "../album.model";
import { ALBUMS } from "../albums.data";

@Component({
  selector: "app-album-list",
  templateUrl: "./album-list.component.html",
  styleUrls: ["./album-list.component.css"]
})
export class AlbumListComponent implements OnInit {
  albumsArray: Album[];
  clickedAlbum: string;

  ngOnInit(): void {
    this.albumsArray = this.albumsArray = ALBUMS; 
   };
  

  parentFunctionHandler(album) {
    alert(
      'Album ' + album.albumName + ' was sent from the album card component'
    );
    this.clickedAlbum = `${album.id} ${album.albumName}`;
  }
}
