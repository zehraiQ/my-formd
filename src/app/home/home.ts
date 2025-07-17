import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NgForm } from '@angular/forms';
interface UserData {
  name: string;
  email: string;
  phone: string;
  workplace: string;
  language: string;
}


@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone:true
})
export class Home {
 formData = {
    name: '',
    email: '',
    phone: '',
    workplace: '',
    language: '',
  };

  submittedData: any[] = [];
  submittedJson = '';

  onSubmit() {
    // نسخ بيانات الفورم قبل التفريغ
    this.submittedData.push({ ...this.formData });
    this.submittedJson = JSON.stringify(this.formData, null, 2);

    // تفريغ الفورم
    this.formData = { name: '', email: '', phone: '', workplace: '', language: '' };
  }
}
