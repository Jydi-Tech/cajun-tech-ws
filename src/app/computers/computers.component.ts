import { Component, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-computers',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})
export class ComputersComponent implements OnDestroy {
  computersImage:string = environment.imageUrl + "/computer_background4.jpg";

  ngOnDestroy(): void {
    this.computersImage = "";
  }

}
