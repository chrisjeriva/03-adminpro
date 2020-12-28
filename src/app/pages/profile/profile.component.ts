import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public usuario: Usuario;
  public profileForm: FormGroup;

  constructor(private fb: FormBuilder,
              private usuarioService: UsuarioService,
              private fileUploadService: FileUploadService) { 
    this.usuario = usuarioService.usuario;
             
  }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      nombre: [this.usuario.nombre, [ Validators.required ]],
      email: [this.usuario.email, [ Validators.required, Validators.email ]]
    });
  }

  actualizarPerfil() {
    console.log(this.profileForm.value);
    this.usuarioService.actualizarPerfil(this.profileForm.value)
                        .subscribe( () => {
                          const {nombre, email} = this.profileForm.value;
                          this.usuario.nombre = nombre;
                          this.usuario.email = email;
                          Swal.fire("Éxito","Perfil actualizado correctamente.","success");
                        }, (err) => {
                          Swal.fire("Error",err.error.msg,"error");
                        });

  }

  subirImagen(file: File) {
     if(file != undefined) {
       this.fileUploadService.actualizarFoto(file,'usuarios',this.usuario.uid)
            .then(resp => {
                if(resp) {
                  this.usuario.img = resp;
                  Swal.fire("Éxito","Imagen actualizada correctamente.","success");
                }
            }).catch(err => {
              console.log(err);
              Swal.fire("Error","No fue posible cambiar la imagen.","error");
            });
     }
  }

}
