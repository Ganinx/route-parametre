export class Pizza {

  id:number
  nom:string
  base:string
  taille:number
  isVege:boolean
  image:string


  constructor(id: number, nom: string, base: string, taille: number, isVege: boolean, image: string) {
    this.id = id;
    this.nom = nom;
    this.base = base;
    this.taille = taille;
    this.isVege = isVege;
    this.image = image;
  }
}
