import { Component, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-phones',  
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnDestroy {

  phonesImage:string = environment.imageUrl + "/phonesBackground2.jpg";

  ngOnDestroy(): void {
    this.phonesImage = "";
  }

}
