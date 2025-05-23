import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent {
  contactMeForm = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required],
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    messageTitle: new FormControl('', {
      validators: [Validators.required],
    }),
    messageBody: new FormControl('', {
      validators: [Validators.required],
    }),
  });

  onSubmit() {
    if (this.contactMeForm.invalid) {
      console.log('invalid');
      return;
    }

    console.log(this.contactMeForm);
    this.onReset();
  }

  onReset() {
    this.contactMeForm.reset();
  }
}
