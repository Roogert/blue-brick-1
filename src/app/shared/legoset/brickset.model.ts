export class Brickset{
  public set_num: string;
  public name: string;
  public year: number;
  public theme_id: number;
  public num_parts:number;
  public set_img_url: string;
  public set_url:string;
  public last_modified_dt: string;


 constructor(

  name: string,
  year: number,
  num_parts :number,
  set_img_url: string,
  set_num?: string,
  theme_id?: number,
  set_url?:string,
  last_modified_dt?: string,)

 {this.set_num=set_num;
 this.name=name;
 this.year=year;
 this.theme_id=theme_id;
 this.num_parts=num_parts;
 this.set_img_url=set_img_url;
 this.set_url=set_url;
 this.last_modified_dt=last_modified_dt;
 }


 }


