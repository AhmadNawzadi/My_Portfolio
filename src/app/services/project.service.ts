import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  projectManagement : boolean = false
  gameUp : boolean = false
  electricitySystem : boolean = false

  selectProject(id : number){
    if(id == 1){
      this.projectManagement = true
      this.gameUp = false
      this.electricitySystem = false
    }
    else if(id == 2){
      this.projectManagement = false
      this.electricitySystem = false
      this.gameUp = true
    }
    else {
      this.projectManagement = false
      this.gameUp = false
      this.electricitySystem = true
    }
  }

}
