import { Component, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-networks',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './networks.component.html',
  styleUrls: ['./networks.component.css']
})
export class NetworksComponent implements OnDestroy {
  networkImage:string = environment.imageUrl + "/earth-network.jpg";

  ngOnDestroy(): void {
    this.networkImage = "";
  }

}
