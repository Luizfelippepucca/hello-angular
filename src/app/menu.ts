interface ItensMenu {
  name: string;
  link: string;
  nameComplete: string;
}
export class Menu {
  public name!: string;
  public nameComplete!: string;
  public link!: string;

  constructor({ name, link, nameComplete }: ItensMenu) {
    this.name = name;
    this.nameComplete = nameComplete;
    this.link = link;
  }
}
