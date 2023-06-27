import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
@Injectable()
export class DashboardService {
    headerColor: string = 'default';


    private currentHeaderColor = new BehaviorSubject(this.headerColor);
    selectedHeaderColor = this.currentHeaderColor.asObservable();


    changeHeaderColor(color: string) {
        this.currentHeaderColor.next(color)
    }

}