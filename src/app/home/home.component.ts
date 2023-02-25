import { Component, OnInit } from '@angular/core';
import { WallpaperService } from '../wallpaper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  wallpaperObj: any;
  constructor(private wallServ: WallpaperService) {}

  ngOnInit(): void {
    this.wallpaperObj = this.getWallpaper();
    console.log(this.wallpaperObj);
  }
  getWallpaper() {
    this.wallServ.makePostRequest().subscribe((data) => {
      this.wallpaperObj = data;
    });
  }
}
