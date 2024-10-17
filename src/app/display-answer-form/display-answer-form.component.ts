import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-answer-form',
  standalone: true,
  imports: [],
  templateUrl: './display-answer-form.component.html',
  styleUrl: './display-answer-form.component.css'
})
export class DisplayAnswerFormComponent {
  @Input() nom : String = "";
  @Input() prenom : String = "";
  @Input() address: String = "";
  @Input() codePostal: String = "";
  @Input() ville: String = "";
  @Input() tel: String = "";
  @Input() email: String = "";
  @Input() civilite: String = "";
  @Input() mdp: String = "";
  @Input() login: String = "";
}
