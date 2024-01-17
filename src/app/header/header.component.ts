import { Component } from '@angular/core';
import { BUTTON_LABELS, HEADER_BUTTON_CELL_WIDTH_VAR, environment } from '../../environments/environment';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public buttonLabels : string[] = BUTTON_LABELS;
  public labelPercent : string = HEADER_BUTTON_CELL_WIDTH_VAR;
  headerImage: string = environment.imageUrl + "/CajunTechLogoWhite.png";
  
  onButtonClick(buttonLabel: string){
  }
}
