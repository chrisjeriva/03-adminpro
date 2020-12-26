import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'


import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './register.component.css'
  ]
})
export class RegisterComponent{
  public formSubmitted = false;
  public registerForm = this.fb.group({
    nombre: ['', [ Validators.required ]],
    email: ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.required]],
    confirmPassword: ['', [ Validators.required]],
    acceptTerms: [false, [ Validators.required]]
  }, {
    validators: this.passwordsMatch('password', 'confirmPassword')
  });
  constructor(private fb: FormBuilder,
              private usuarioService: UsuarioService,
              private router: Router) { }

  crearUsuario() {
    this.formSubmitted = true;
    console.log(this.registerForm.value);

    if(this.registerForm.invalid) {
      return;
    }

    this.usuarioService.crearUsuario(this.registerForm.value)
    .subscribe( resp => {
      // navegamos al dashboard
      this.router.navigateByUrl('/');
    }, (err) => {
      // si sucede un error com
      Swal.fire('Error', err.error.msg, 'error');
    });
  }

  campoNoValido(campo: string): boolean {
    if (this.registerForm.get(campo).invalid && this.formSubmitted ) {
      return true;
    }
    else {
      return false;
    }
  }

  
  passwordsNotMatch() {
    const pass1 = this.registerForm.get('password').value;
    const pass2 = this.registerForm.get('confirmPassword').value;

    if((pass1 !== pass2) && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }

  aceptaTerminos() {
    return !this.registerForm.get('acceptTerms').value && this.formSubmitted;
  }

  passwordsMatch(password: string, confirm: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.get(password);
      const confirmControl = formGroup.get(confirm);

      if(passwordControl.value === confirmControl.value) {
        confirmControl.setErrors(null);
      } else {
        confirmControl.setErrors({notMatch: true});
      }
    }
  }
}
