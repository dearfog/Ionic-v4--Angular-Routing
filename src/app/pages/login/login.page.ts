import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as firebase from 'firebase';

@Component({
  selector: 'login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;                    
  private formSubmitAttempt: boolean; 
  public phoneNumber:Number;
  public verificationID:any;
  public credential:any;
  public code:any;
  constructor(
    private fb: FormBuilder,         
  ) {}

  ngOnInit() {
    this.form = this.fb.group({     
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) { 
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {
      // this.authService.login(this.form.value); // {7}
    }
    this.formSubmitAttempt = true;             // {8}
  }
  sendOTP() {
    (<any>window).FirebasePlugin.verifyPhoneNumber('+91'+this.phoneNumber, 3600, function(credential) {
      console.log(credential);
      alert(JSON.stringify(credential));
      alert('SMS send Successfully');
      this.credential = credential;
      // // ask user to input verificationCode:
      // var code = inputField.value.toString();
      
      // var verificationId = credential.verificationId;
      
      // var signInCredential = firebase.auth.PhoneAuthProvider.credential(verificationId, code);
      // firebase.auth().signInWithCredential(signInCredential);
  }, function(error) {
      console.error(error);
  });
  }
  verifyOTP() {
    let signIN = firebase.auth.PhoneAuthProvider.credential(this.credential.verificationId, this.code);
    firebase.auth().signInWithCredential(signIN).then((info)=>{
      alert(JSON.stringify(info));
      console.log(JSON.stringify(info));
    },(err)=>{
      alert(JSON.stringify(err));
      console.log(JSON.stringify(err));
    });
  } 

}
