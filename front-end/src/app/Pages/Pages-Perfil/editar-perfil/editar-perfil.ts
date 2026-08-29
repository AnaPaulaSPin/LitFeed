import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceUsuario } from '../../../Services/ServiceUsuario/service-usuario';


@Component({
  selector: 'app-editar-perfil',
  imports: [FormsModule],
  templateUrl: './editar-perfil.html',
  styleUrl: './editar-perfil.scss',
})
export class EditarPerfil {
  user: any;
  userBanner: any;
  userFotoPerfil: any;
  FilerUser: any;
  FilerBanner: any;
  nome: string = '';
  email: string = '';
  senha: string = '';
  senhaNova: string = '';
  username: string = '';
  biografia: string = '';
  constructor(private authService: ServiceUsuario) {
    const userData = localStorage.getItem('user');

    if (userData) {
      this.user = JSON.parse(userData);
      this.userBanner = this.user.banner;
      this.userFotoPerfil = this.user.fotoPerfil;
      this.nome = this.user.nome;
      this.email = this.user.email;
      this.senha = this.user.senha;
      this.username = this.user.username;
      this.biografia = this.user.biografia;
    }
  }

  onFileSelectedUser(event: any) {
    this.FilerUser = event.target.files[0];
    this.userFotoPerfil = URL.createObjectURL(this.FilerUser);
  }

  onFileSelectedBanner(event: any) {
    this.FilerBanner = event.target.files[0];
    this.userBanner = URL.createObjectURL(this.FilerBanner);
  }

salvarPerfil() {

  if (this.FilerUser) {
    this.user.fotoPerfil = this.FilerUser.name;
  }

  if (this.FilerBanner) {
    this.user.banner = this.FilerBanner.name;
  }
  console.log('User:', this.user);

  this.authService.atualizarUsuario(
    this.user.id,
    this.nome,
    this.username,
    this.email,
    this.senha,
    this.senhaNova,
    this.user.banner,
    this.user.fotoPerfil,
    this.biografia
  ).subscribe({
    next: (updatedUser) => {
      localStorage.setItem('user', JSON.stringify(updatedUser));

      alert('Perfil atualizado com sucesso!');

      window.location.reload();
    },

    error: (erro) => {
      alert(erro.error.message ?? 'Erro ao atualizar perfil');
      window.location.reload();
    }
  });
}

}
