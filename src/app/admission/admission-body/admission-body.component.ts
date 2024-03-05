import { Component } from '@angular/core';
import { NzTabPosition } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'app-admission-body',
  templateUrl: './admission-body.component.html',
  styleUrls: ['./admission-body.component.css']
})
export class AdmissionBodyComponent {
  tabs: Array<{ name: string; content: string; disabled: boolean }> = [];
  nzTabPosition: NzTabPosition = 'top';
  selectedIndex = 27;
  names: Array<string> = [
    'Consulter une admission',
    'Consulter une admission',
    'Consulter une admission',
    'Consulter une admission',
    'Consulter une admission',
    'Consulter une admission',
  ];

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  log(args: any[]): void {
    console.log(args);
  }

  ngOnInit(): void {
    for (let i = 0; i < 6; i++) {
      this.tabs.push({
        name: this.names[i],
        disabled: i === 4,
        content: `Content of tab ${i}`
      });
    }
  }
}
