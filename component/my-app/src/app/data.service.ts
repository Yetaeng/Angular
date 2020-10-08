import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // 루트 인젝터에게 서비스를 제공하도록 지시하여 어플리케이션 전역에서 서비스를 주입할 수 있도록 함
})
export class DataService {
  constructor() {}
}
