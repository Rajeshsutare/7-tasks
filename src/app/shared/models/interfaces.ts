
export interface Iproducts{
    pName:string,
    pDescr:string,
    pCategory:"product" | "catlog"
}

export interface Iprod{
    pId:number,
    pName:string,
    pDescr:string,
    pCategory:Icategory
}

export type Icategory = 'product' | 'catlog'
