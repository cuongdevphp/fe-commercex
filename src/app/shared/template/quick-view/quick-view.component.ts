import { Component } from '@angular/core';
import { ThemeConstantService } from '../../services/theme-constant.service';

@Component({
    selector: 'app-quick-view',
    templateUrl: './quick-view.component.html'
})



export class QuickViewComponent {
  
    selectedHeaderColor: string;
    isSideNavDark : boolean;
    isFolded : boolean;
    d: string;

    constructor( private themeService: ThemeConstantService) {}

    ngOnInit(): void {
        this.themeService.isMenuFoldedChanges.subscribe(isFolded => this.isFolded = isFolded);
        this.themeService.isSideNavDarkChanges.subscribe(isDark => this.isSideNavDark = isDark);
        this.themeService.selectedHeaderColor.subscribe(color => this.selectedHeaderColor = color);
    }

    changeHeaderColor() {
        this.themeService.changeHeaderColor(this.selectedHeaderColor)
    }

    toggleSideNavDark() {
        console.log(this.isSideNavDark, 'v');
        this.themeService.toogleSideNavDark(this.isSideNavDark);
    }

    toggleFold() {
        this.themeService.toggleFold(this.isFolded);
    }

    
    test() {
        this.themeService.test('cuong');
    }
}

