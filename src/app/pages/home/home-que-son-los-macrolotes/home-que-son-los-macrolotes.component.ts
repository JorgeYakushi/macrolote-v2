import { Component, OnInit } from '@angular/core';
import { environment } from '@env';
@Component({
  selector: 'app-home-que-son-los-macrolotes',
  templateUrl: './home-que-son-los-macrolotes.component.html',
  styleUrls: ['./home-que-son-los-macrolotes.component.scss'],
})
export class HomeQueSonLosMacrolotesComponent implements OnInit {
  blobUrl: string = environment.blobUrl;
  constructor() {}

  ngOnInit(): void {}
}
