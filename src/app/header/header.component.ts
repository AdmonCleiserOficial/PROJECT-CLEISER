import { Component, OnInit } from '@angular/core';
import {JquerisitoService} from '../jquerisito.service';

  // Declaramos las variables para jQuery
  declare var jQuery:any;
  declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  booleandropdown:boolean=true;
  constructor(
    private jquerisito :JquerisitoService 
  ) {}
  ngOnInit() {     
  
  }
  }

 