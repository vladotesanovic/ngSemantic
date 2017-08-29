import { Component } from '@angular/core';

@Component({
  selector: 'sm-page-button',
  templateUrl: `./button.component.html`
})

export class ButtonComponent {

  isClicked = 'You should click on button!';

  clickMe(event: Event) {

    event.srcElement.classList.add('loading');

    setTimeout(() => {
      event.srcElement.classList.remove('loading');
      this.isClicked = 'Excellent, it works!';
    }, 2000);
  }
}
