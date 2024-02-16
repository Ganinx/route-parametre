export class Burger {

  id?:number
  nom?:string
  pain?:string
  steack?:number
  sauce?:string
  isVege?:boolean
  image?:string


  constructor(id?: number, nom?: string, pain?: string, steack?: number, sauce?: string, isVege?: boolean,image?:string) {
    this.id = id;
    this.nom = nom;
    this.pain = pain;
    this.steack = steack;
    this.sauce = sauce;
    this.isVege = isVege;
    this.image= image
  }
}
