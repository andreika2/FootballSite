import { Component, Input, OnInit } from '@angular/core';
import { IClickHeaderFunction, PageTitles } from "./shared-header.entity";

@Component({
  selector: 'app-shared-header',
  templateUrl: './shared-header.component.html',
  styleUrls: ['./shared-header.component.scss']
})
export class SharedHeaderComponent {

  @Input() public pageButtonList: PageTitles[] = [];
  @Input() public clickHeaderFunction: IClickHeaderFunction = () => {};
  @Input() public headerTitle = PageTitles.News;

}
