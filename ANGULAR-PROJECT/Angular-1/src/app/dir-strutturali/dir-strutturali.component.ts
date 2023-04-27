import { Component } from '@angular/core';

@Component({
  selector: 'app-dir-strutturali',
  templateUrl: './dir-strutturali.component.html',
  styleUrls: ['./dir-strutturali.component.css']
})
export class DirStrutturaliComponent {

  mostra: boolean = false;

  value: string = "";

  css = {
    visibility: "hidden"
  }

  arr: Array<string> = new Array<string>(
    "avocado", "pomodoro", "lattuga", "pancetta", "pane");

  obj = {
    ing1: "avocado",
    ing2: "pomodoro",
    ing3: "lattuga",
    ing4: "pancetta",
    ing5: "pane"
  }


  mostraSezione(): void {
    if(this.mostra)
      this.mostra = false;
    else
      this.mostra = true;
  }

  mostraSezione2(): void {
    if(this.css.visibility == "hidden")
      this.css.visibility = "visible";
    else
      this.css.visibility = "hidden";
  }

  delete(ing:string):void {
    this.arr = this.arr.filter((arr) => arr !== ing);
  }

}
