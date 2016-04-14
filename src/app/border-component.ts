import {Component, Input} from 'angular2/core';

@Component({
	selector: 'my-fancy-border',
	templateUrl: 'app/border-component.html',
	styleUrls: ['app/border-component.css']
})
export class BorderComponent {
	@Input() title: string;
}