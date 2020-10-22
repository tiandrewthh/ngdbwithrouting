import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})

export class AddmovieComponent {
  title: string = "";
  aYear: number = 0;
  movieId: string = "";
  actorMovie: any[] = [];

  constructor(private dbService: DatabaseService, private router: Router) { }

  onSaveMovie() {
    let obj = { title: this.title, year: this.aYear, actors: this.actorMovie };
    this.dbService.createMovie(obj).subscribe(result => {
      this.router.navigate(["/listmovies"]);
    });
  }

}
