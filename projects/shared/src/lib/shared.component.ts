import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-shared',
  template: `
    <p>
      It works!
    </p>
  `,
  styles: [
  ]
})
export class SharedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
