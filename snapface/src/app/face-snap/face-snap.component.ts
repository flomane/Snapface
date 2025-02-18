import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
     title: string; 
     description: string;
     createdAt: Date;
     snaps: number;
     imageUrl: string;
     snapButtonText: string;
     userHasSnapped : boolean; 

 constructor(){}
 ngOnInit(){
  this.title = 'Archibald';
  this.description = 'Mon meilleur ami  depuis toujours';
  this.createdAt = new Date();
  this.snaps = 0;
  this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
  this.snapButtonText = 'oh snap';
  this.userHasSnapped = false;
 }
 onSnap(): void{
  if(this.userHasSnapped){
    this.snaps--;
    this.snapButtonText = 'oops Snap'
    this.userHasSnapped = false;

  }else{
    this.snaps++;
    this.snapButtonText = 'oop unsnap';
    this.userHasSnapped = true
  }

}
}
