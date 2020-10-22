import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-viewnotfound',
  templateUrl: './viewnotfound.component.html',
  styleUrls: ['./viewnotfound.component.css']
})
export class ViewnotfoundComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  
  }

}
