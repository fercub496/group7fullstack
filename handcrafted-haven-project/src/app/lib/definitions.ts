export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  seller: string;
};

export type Seller = {
  id:string;
  name: string;
  sellerimage: string;
};

export type NumElem = {
  count: string;
}