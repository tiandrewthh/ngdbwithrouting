import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Data, Router } from "@angular/router";

@Component({
  selector: 'app-addactortomovie',
  templateUrl: './addactortomovie.component.html',
  styleUrls: ['./addactortomovie.component.css']
})
export class AddactortomovieComponent implements OnInit {
  actorsDB: any[] = [];
  moviesDB: any[] = [];
  fullName: string = "";
  bYear: number = 0;
  actorId: string = "";
  title: string = "";
  aYear: number = 0;
  movieId: string = "";
  actorMovie: any[] = [];

  constructor(private dbService: DatabaseService, private router: Router) { }
  onGetActors() {
    this.dbService.getActors().subscribe((data: any[]) => {
      this.actorsDB = data;
    });
  }
  //Get all Movies
  onGetMovies() {
    this.dbService.getMovies().subscribe((data: any[]) => {
      this.moviesDB = data;
    });
  }
  //Select Actor
  onSelectUpdate(item) {
    this.fullName = item.name;
    this.bYear = item.bYear;
    this.actorId = item._id;
  }
  //Select Movie
  onSelectMovie(item) {
    this.title = item.title;
    this.aYear = item.year;
    this.movieId = item._id;
    this.actorMovie = item.actors;
  }
  //Add Actor to Movie
  addActortoMovie() {
    this.actorMovie.push(this.actorId);
    let obj = { title: this.title, year: this.aYear, actors: this.actorMovie };
    this.dbService.addActortoMovie(this.movieId, this.actorId, obj).subscribe(result => {
      this.onGetMovies();
      this.router.navigate(["/listmovies"]);
    });
  }
  // This callback function will be invoked with the component get initialized by Angular.
  ngOnInit(): void {
    this.onGetMovies();
    this.onGetActors();
  }
  

}
