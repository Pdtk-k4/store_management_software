export interface Branch{
    name: string;
    code: string;
    stock: number;
    ordered: number;
}
export interface Variant {
    id: number;
    sku: string;
    attributes: string;
    sellPrice: number;
    importPrice:number;
    stock: number;
    available: number;
    status:string;
    branches: Branch[];
}