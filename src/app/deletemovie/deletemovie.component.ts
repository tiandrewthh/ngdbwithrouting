import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Data, Router } from "@angular/router";

@Component({
  selector: 'app-deletemovie',
  templateUrl: './deletemovie.component.html',
  styleUrls: ['./deletemovie.component.css']
})
export class DeletemovieComponent implements OnInit {
  moviesDB: any[] = [];

  constructor(private dbService: DatabaseService, private router: Router) { }
  //Get all Movies
  onGetMovies() {
    this.dbService.getMovies().subscribe((data: any[]) => {
      this.moviesDB = data;
    });
  }
  //Delete Movie
  onDeleteMovie(item) {
    this.dbService.deleteMovie(item._id).subscribe(result => {
      this.onGetMovies();
      this.router.navigate(["/listmovies"]);
    });
  }
   // This callback function will be invoked with the component get initialized by Angular.
  ngOnInit(): void {
    this.onGetMovies();
  }

}
