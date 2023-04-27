export class Hom {
  home : string;
  chiSiamo : string;
  mission : string;
  login : string;
  logout : string;


  constructor();
  constructor(home:string, chiSiamo:string, mission: string, login: string, logout : string);
  constructor(home?:string, chiSiamo?:string, mission?: string, login?: string, logout ?: string){
      this.home = home || "";
      this.chiSiamo = chiSiamo || "";
      this.mission = mission || "";
      this.login = login || "";
      this.logout  = logout  || "";
  }

  getHome(): string {
      return this.home;
  }



}




