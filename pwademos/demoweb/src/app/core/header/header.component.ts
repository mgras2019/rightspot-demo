import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private navigationService: NavigationService) { }

  ngOnInit(): void {
  }

  onToggleMenu() {
    this.navigationService.setShowNav(true);
  }
}
