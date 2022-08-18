import { Component, AfterViewInit, HostBinding, OnInit } from '@angular/core';
import {
  trigger,
  state,
  transition,
  style,
  animate,
} from '@angular/animations';
import { fromEvent } from 'rxjs';
import {
  distinctUntilChanged,
  filter,
  map,
  pairwise,
  share,
  throttleTime,
} from 'rxjs/operators';
import { Router } from '@angular/router';
import { SharedService } from '@core/services/shared/shared.service';
enum VisibilityState {
  Visible = 'visible',
  Hidden = 'hidden',
}

enum Direction {
  Up = 'Up',
  Down = 'Down',
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('toggle', [
      state(
        VisibilityState.Hidden,
        style({ opacity: 0, transform: 'translateY(-100%)' })
      ),
      state(
        VisibilityState.Visible,
        style({ opacity: 1, transform: 'translateY(0)' })
      ),
      transition('* => *', animate('200ms ease-in')),
    ]),
  ],
})
export class NavComponent implements AfterViewInit, OnInit {
  isCollapsed: boolean = true;
  dropdownCollapsed: boolean = false;
  constructor(private router: Router, private sharedService: SharedService) {}
  private isVisible = true;
  ngOnInit(): void {}

  @HostBinding('@toggle')
  get toggle(): VisibilityState {
    return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  }

  ngAfterViewInit() {
    if (!this.sharedService.getIsServer()) {
      if (window.matchMedia('(min-width: 1025px)').matches) {
        const scroll$ = fromEvent(window, 'scroll').pipe(
          throttleTime(10),
          map(() => window.pageYOffset),
          pairwise(),
          map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
          distinctUntilChanged(),
          share()
        );
  
        const scrollUp$ = scroll$.pipe(
          filter((direction) => direction === Direction.Up)
        );
  
        const scrollDown = scroll$.pipe(
          filter((direction) => direction === Direction.Down)
        );
  
        scrollUp$.subscribe(() => (this.isVisible = true));
        scrollDown.subscribe(() => (this.isVisible = false));
      }
    }
  }
  toggleCollapsed() {
    let element = document.body;
    if ((this.dropdownCollapsed = !this.dropdownCollapsed)) {
      element.classList.add('menu_active');
    } else {
      element.classList.remove('menu_active');
    }
  }
  clickMenuItems() {
    let element = document.body;
    let menuItems = document.getElementsByClassName('nav__item');
    if (menuItems) {
      this.dropdownCollapsed = false;
      element.classList.remove('menu_active');
    }
  }

}
