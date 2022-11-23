import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { DataService } from './data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    title = 'greenflag-accordion';

    public isMobile = false;
    public faqs: any;

    constructor(private dataService: DataService, private bpObserver: BreakpointObserver) {}

    ngOnInit(): void {
        this.dataService.getFaqs()
            .subscribe(data => {
                this.faqs = data;
            })
        this.bpObserver.observe(Breakpoints.HandsetPortrait)
            .subscribe(result => {
                if (result.matches) {
                    this.isMobile = !this.isMobile;
                } else {
                    this.isMobile = false;
                }
            })
    }
}
