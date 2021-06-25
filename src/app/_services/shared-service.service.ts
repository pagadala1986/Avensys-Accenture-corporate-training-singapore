import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  SharingData = new Subject();
  constructor() { }
}
