import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators} from '@angular/forms';
import { repeat } from 'rxjs';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{

  constructor(){}

  sampleForm!:FormGroup
  ngOnInit(): void {
    this.sampleForm=new FormGroup({'email':new FormControl('',[Validators.required,Validators.email]),'psw':new FormControl('',[Validators.required]),'psw-repeat': new FormControl('',[Validators.required])});
  }
  
onRegister()
{
  if(this.sampleForm.valid)
  console.log(this.sampleForm.value)
}
}
