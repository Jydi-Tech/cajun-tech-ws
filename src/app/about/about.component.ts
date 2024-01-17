import { Component, OnDestroy } from '@angular/core';
import { environment } from '../../environments/environment';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnDestroy {
  aboutImage:string = environment.imageUrl + '/OfficeBuildingCropped.jpg';

  ngOnDestroy(): void {
    this.aboutImage = "";
  }
 

}