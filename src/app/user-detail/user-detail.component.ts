import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user.interface';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  @Input() user: User | undefined | null;
  @Output() saveEvent = new EventEmitter<User | undefined | null>();

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.saveEvent.emit(this.user);
  }

}
