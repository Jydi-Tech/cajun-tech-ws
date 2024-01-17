import { Component, OnDestroy } from '@angular/core';
import { environment } from '../../environments/environment';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-coding',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.css']
})
export class CodingComponent implements OnDestroy {
  codingImage:string = environment.imageUrl + "/coding_background.jpg";

  ngOnDestroy(): void {
    this.codingImage = "";
  }
  
}
