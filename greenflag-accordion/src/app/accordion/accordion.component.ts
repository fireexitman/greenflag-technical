import { Component, Input } from "@angular/core";
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'accordion',
    template: `
        <div class="accordion-container" [ngClass]="{'mobileMode': isMobile}">
            <div class="accordion" [ngClass]="{'selected': state === 'end'}">
                <ng-content select="[accordion-number]"></ng-content>
                <ng-content select="[accordion-title]"></ng-content>
                <div class="accordion-icon" (click)="openAccordion()">
                    <svg [@rotatedState]='state' class="svg-rotate__icon" width="2em" height="2em" viewBox="0 0 357 357">
                        <g id="add">
                            <path d="M357,204H204v153h-51V204H0v-51h153V0h51v153h153V204z" />
                        </g>
                    </svg>
                </div>
            </div>
            <div [@openAccordion]="openClose">
                <ng-content select="[accordion-body]"></ng-content>
            </div>
        </div>
    `,
    styleUrls: ['./accordion.component.scss'],
    animations: [
        trigger('rotatedState', [
            state('start', style({ transform: 'rotate(0)' })),
            state('end', style({ transform: 'rotate(45deg)' })),
            transition('start <=> end', animate('700ms ease-in-out'))
        ]),
        trigger('openAccordion', [
            state('closed', style({ height: '0', padding: 0, transform: "scaleY(0)" })),
            state('open', style({ height: '*', padding: '*', transform: "scaleY(1)" })),
            transition('closed <=> open', animate('700ms ease-in-out'))
        ])
        // TODO: Get this working with the rotatedState to replace the ngClass on line 8
        // trigger('selectedFaq', [
        //     state('unselected', style({ background: 'white' })),
        //     state('selected', style({ background: 'lightgrey' })),
        //     transition('unselected <=> selected', animate('700ms ease-in-out')),
        // ]),
    ]
})

export class AccordionComponent {
    @Input() isMobile!: boolean;
    openClose = 'closed';
    state = 'start';
    // selected: string = 'unselected';

    openAccordion() {
        this.state = (this.state === 'start' ? 'end' : 'start');
        this.openClose = (this.openClose === 'closed' ? 'open' : 'closed');
        // this.selected = (this.selected === 'unselected' ? 'selected' : 'unselected');
    }

}