import { Component, OnInit, HostListener } from '@angular/core';
//import * as $ from 'jquery';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  

  @HostListener('document:click', ['$event'])
  onDocumentClick(event){
    if (!event.target.matches('.menu-button')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    } 
  }
  

  constructor() {}

  ngOnInit() {
    
  }

  home() {
    var homeMenu =  document.getElementById("homeDropdown");
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    if (homeMenu.classList.contains('show')) {
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];      
        openDropdown.classList.remove('show');
      }
      homeMenu.classList.remove('show')
    } else  {
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];       
        openDropdown.classList.remove('show');
      }
      homeMenu.classList.add('show')
    }
  }

  about() {
    var aboutMenu =  document.getElementById("aboutDropdown");
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
   
    if (aboutMenu.classList.contains('show')) {
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];        
        openDropdown.classList.remove('show');
      }
      aboutMenu.classList.remove('show')
    } else  {
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];        
        openDropdown.classList.remove('show');
      }
      aboutMenu.classList.add('show')
    }  
  }

  archive() {
    var archiveMenu =  document.getElementById("archiveDropdown");
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
   
    if (archiveMenu.classList.contains('show')) {
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];        
        openDropdown.classList.remove('show');
      }
      archiveMenu.classList.remove('show')
    } else  {
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];        
        openDropdown.classList.remove('show');
      }
      archiveMenu.classList.add('show')
    }  
  }  
  
  contact() {
    var contactMenu =  document.getElementById("contactDropdown");
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
   
    if (contactMenu.classList.contains('show')) {
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];        
        openDropdown.classList.remove('show');
      }
      contactMenu.classList.remove('show')
    } else  {
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];        
        openDropdown.classList.remove('show');
      }
      contactMenu.classList.add('show')
    }  
  }
}
