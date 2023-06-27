import { Component, EventEmitter, Output } from '@angular/core';
import { ROUTES } from './side-nav-routes.config';
import { ThemeConstantService } from '../../services/theme-constant.service';
import { DashboardService } from 'src/app/dashboard/default/dashboard.service';

@Component({
    selector: 'app-sidenav',
    templateUrl: './side-nav.component.html'
})

export class SideNavComponent{

    selectedHeaderColor: string;
    public menuItems: any[]
    isFolded : boolean;
    isSideNavDark : boolean;
    isExpand : boolean;

    constructor( private themeService: ThemeConstantService,
        private dashboardService: DashboardService) {}

    ngOnInit(): void {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        // this.themeService.isMenuFoldedChanges.subscribe(isFolded => this.isFolded = isFolded);
        // this.themeService.isExpandChanges.subscribe(isExpand => this.isExpand = isExpand);
        // this.themeService.isSideNavDarkChanges.subscribe(isDark => this.isSideNavDark = isDark);
        // this.themeService.selectedHeaderColor.subscribe(color => this.selectedHeaderColor = color);
        // this.themeService.changeEmitted$.subscribe(data => {
        //     console.log('data', data);
        // });
        
        // this.themeService.subjectStream.subscribe(value => {
        //     // Logs value "0" at beginning but never logs value "1"
        //     console.log(value, 'cuong li nè');
        // });
        // console.log(this.themeService.data$);
        // this.themeService.data$.subscribe(
        //     (data) => {
        //       console.log(data, 'cuonglibagai');
        //     }
        //   );
      
        //   this.themeService.isMenuFoldedChanges.subscribe(isFolded => {
        //       console.log(isFolded, "isFolded")
        //   });
        //   this.themeService.isSideNavDarkChanges.subscribe(isDark => {
        //     console.log(isDark, "isDark")

        //   });
        //   this.themeService.isExpandChanges.subscribe(isExpand => {
        //     console.log(isExpand, "isExpand")

        //   });   
    }
    @Output() dataEvent = new EventEmitter<string>();
    
    changeHeaderColor() {
        console.log(this.selectedHeaderColor, 'side nav');
            // Sending status 1 to HomeService
        this.themeService.changeStatus(this.selectedHeaderColor);

        this.dataEvent.emit(this.selectedHeaderColor);
        this.themeService.emitdata(this.selectedHeaderColor);
        this.dashboardService.changeHeaderColor(this.selectedHeaderColor)
    }
    closeMobileMenu(): void {
        if (window.innerWidth < 992) {
            this.isFolded = false;
            this.isExpand = !this.isExpand;
            this.themeService.toggleExpand(this.isExpand);
            // this.themeService.toggleFold(this.isFolded);
        }
    }
}
