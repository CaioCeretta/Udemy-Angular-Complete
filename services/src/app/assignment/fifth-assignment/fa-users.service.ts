import { EventEmitter, Injectable } from "@angular/core";
import { FaLoggingService } from "./fa-logging.service";
import { CounterService } from "./counter.service";

/* By the time this lesson was made the @Injectable was only used on services that receive other services, but now is a
good practice to add it on all services */

@Injectable()
export class FaUsersService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService){}

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementActiveToInactiveCounter();
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementInactiveToActiveCounter()
  }

}
