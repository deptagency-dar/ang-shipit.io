import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class ButtonComponent {
  @Output() onClickEvent = new EventEmitter();

  onClick(): void {
    this.onClickEvent.emit();
  }
}
