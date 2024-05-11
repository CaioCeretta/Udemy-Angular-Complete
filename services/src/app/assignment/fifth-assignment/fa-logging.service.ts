import { Injectable } from "@angular/core";

@Injectable()
export class FaLoggingService {

  logStatusChange(status: string) {
    console.log('An account status was changed to ' + status)
  }

}
