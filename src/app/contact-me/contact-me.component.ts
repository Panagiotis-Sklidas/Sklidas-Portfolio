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
    if (this.contactMeForm.valid) {
      const { name, email, messageTitle, messageBody } =
        this.contactMeForm.value;

      const subject = encodeURIComponent(messageTitle ?? '');
      const body = encodeURIComponent(
        `${name ?? ''} (${email ?? ''}) says:\n\n${messageBody ?? ''}`
      );

      const mailtoLink = `mailto:panagiotis.skl+portfolio@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
    } else {
      this.contactMeForm.markAllAsTouched(); // show validation errors
    }
  }

  onReset() {
    this.contactMeForm.reset();
  }
}
