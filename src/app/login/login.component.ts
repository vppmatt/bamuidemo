import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginData = {email : "", password : ""};

  handleSubmit() {
    console.log("about to log in with ", this.loginData);
    // this.loginData.email="1234";
  }

}