// src/app/services/location.service.ts
import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor() { }

  // YOUR CODE HERE
  async getCurrentPosition(): Promise<{ latitude: number; longitude: number }> {
    try {
      // Request the current position
      const position = await Geolocation.getCurrentPosition();

      // Extract latitude and longitude
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // Return the coordinates
      return { latitude, longitude };
    } catch (error) {
      // Handle errors (e.g., permissions, timeout)
      console.error('Error getting current position:', error);
      throw new Error('Unable to retrieve location');
    }
  }
  
}