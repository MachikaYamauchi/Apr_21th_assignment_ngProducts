import { Component, OnInit } from '@angular/core';
import { AboutUs } from '../interfaces/about-us.interface';
import {NodeserviceService} from '../services/nodeservice.service';

@Component({
  selector: 'about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  aboutUs:AboutUs[] = [];

  constructor(private aboutHttp:NodeserviceService) { }

  ngOnInit(): void {
    this.aboutHttp.getAboutUsFromNodeServer().subscribe((aboutus) => {
      this.aboutUs = aboutus;
    })
  }

}
