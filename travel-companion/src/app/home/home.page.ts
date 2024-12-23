import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { CameraService } from '../services/camera.service';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  src: string | undefined;

  constructor(private cameraService: CameraService, private locationService: LocationService) { }

  camera() {
    this.cameraService.takePicture().then((imageData) => {
      this.src = imageData;
    });
  }

  location() {
    this.locationService.getCurrentPosition().then((position) => {
      console.log('Latitude:', position.latitude);
      console.log('Longitude:', position.longitude);
    });
  }
}
