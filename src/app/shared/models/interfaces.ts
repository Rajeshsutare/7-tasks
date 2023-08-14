
export interface Iproducts{
    pName:string,
    pDescr:string,
    pCategory:"product" | "catlog"
}

export interface Iprod{

    pName:string,
    pDescr:string,
    pCategory:Icategory
}

export type Icategory = 'product' | 'catlog'
