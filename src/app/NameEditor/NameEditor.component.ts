import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-NameEditor',
  templateUrl: './NameEditor.component.html',
  styleUrls: ['./NameEditor.component.css']
})
export class NameEditorComponent implements OnInit {
  name = new FormControl('');
  constructor() { }

  ngOnInit() {
  }

  updateName() {
    this.name.setValue('Nancy');
  }

}
