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
    this.gameUp = false
    this.electricitySystem = false
    this.projectManagement = false

    if(id == 1){
      this.projectManagement = true
    }
    else if(id == 2){
      this.gameUp = true
    }
    else {
      this.electricitySystem = true
    }
  }

}
