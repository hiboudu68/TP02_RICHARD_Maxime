import { Component} from '@angular/core';
import { FormsModule} from '@angular/forms';
import { DisplayAnswerFormComponent } from "../display-answer-form/display-answer-form.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, DisplayAnswerFormComponent, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  nom : String = "";
  prenom : String = "";
  address: String = "";
  codePostal: String = "";
  ville: String = "";
  tel: String = "";
  email: String = "";
  civilite: String = "";
  mdp: String = "";
  confMdp: String = "";
  login: String = "";
  errorTxt: String = "";
  IsDiplay: boolean = false;

  valid() {
    if (this.nom.length === 0) {
      this.errorTxt = "Nom requis";
      return
    }
    if (this.prenom.length === 0) {
      this.errorTxt = "Prenom requis";
      return
    }
    if (this.tel.length === 0) {
      this.errorTxt = "Tel requis";
      return
    }
    if (this.email.length === 0) {
      this.errorTxt = "Email requis";
      return
    }
    if (this.mdp.length === 0) {
      this.errorTxt = "Mot de Passe requis";
      return
    }
    if (this.confMdp.length === 0) {
      this.errorTxt = "Confirmations du mot de passe requis";
      return
    }
    if (this.login.length === 0) {
      this.errorTxt = "Login requis";
      return
    }

    if (this.mdp != this.confMdp) {
        this.errorTxt = "Mot de passe et ça confirmation diffère";
        return
    }
    this.errorTxt = "";
    this.IsDiplay = true;
  }
}
