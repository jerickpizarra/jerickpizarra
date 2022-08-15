import { Component, OnInit  } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Observable } from 'rxjs';
import { Device } from './interfaces/device';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'jerickpizarra';
  ip:any
  device:any = {}

  constructor (
    private apiServices:ApiService, 
    private deviceService: DeviceDetectorService){
    
  }

  ngOnInit(): void {
    this.device.ip = this.ip
    this.device.deviceType = this.deviceService.deviceType
    this.device.userAgent = this.deviceService.userAgent
    this.device.os = this.deviceService.os
    this.device.os_version = this.deviceService.os_version
    this.device.browser_version = this.deviceService.browser_version
    this.device.isDesktop = this.deviceService.isDesktop()
    this.device.isTablet = this.deviceService.isTablet()
    this.device.isMobile = this.deviceService.isMobile()


    this.getIp()
  }

  getIp()
  {
    this.apiServices
      .getIPAddress()
      .subscribe((res:any) => 
        { this.ip = res.ip }
      )

    
  }
}
