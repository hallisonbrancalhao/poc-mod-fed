import { Component } from '@angular/core';
import { NxWelcome } from './nx-welcome';

@Component({
  imports: [NxWelcome],
  selector: 'shell-gis-entry',
  template: `<shell-nx-welcome></shell-nx-welcome>`,
})
export class RemoteEntry {}
