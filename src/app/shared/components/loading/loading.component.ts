import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  @Input() loading: boolean;
  @Input() dataLength: number | undefined;
  @Input() wasLoading: boolean;

  constructor() {
    this.loading = true;
    this.wasLoading = false;
    this.dataLength = 0;
  }

  ngOnInit(): void {}
}
