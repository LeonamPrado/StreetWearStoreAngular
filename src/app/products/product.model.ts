export class Product {
  public name: string
  public price: number
  public UrlCover: string
  public UrlDetail: string
  public UrlDetail1: string
  public id: number
  public brand: string
  public type: string
  public size: string
  public qtd: number
  

  constructor(name: string, price: number, UrlCover: string, UrlDetail: string, UrlDetail1: string, id: number, brand: string, type: string, size: string){
    this.name = name
    this.price = price
    this.UrlCover = UrlCover
    this.UrlDetail = UrlDetail
    this.UrlDetail1 = UrlDetail1
    this.id = id
    this.brand = brand
    this.type = type
    this.size = size
    this.qtd = 1
  }
}