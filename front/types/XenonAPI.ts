import internal from "stream";

export namespace XenonAPI {
  export interface Product {
    id: number;
    name: string;
    oldPrice: number;
    price: number;
    rating: number;
    images: Image[];
  }

  export interface Image {
    id: number;
    filePath: string;
    fileName: string;
  }

  export interface Review{
    id: number;
    user_id: number;
    product_id: number;
    description: string;
    rating: number;
  }

  export interface Cart_Item{
    id: number;
    user_id: number;
    product_id: number;
    amount: number;
  }

  export interface Shop{
    id: number;
    user_id: number;
    shop_name: string;
    shop_description: string;
  }

  export interface Product{
    id: number;
    login: string;
    password: string;
    mail: string;
    name: string;
    last_name: string;
    phone_number: string;
  }
}

// eslint-disable-next-line no-redeclare
export interface XenonAPI {
  version: '1';
  routes: {
    '/products/search': {
      GET: {
        query?: {
          searchString?: string;
        };
      };
    };
    '/product/{id}': {
      GET: {
        params: {
          id: number;
        };
      };
    };
    '/products/initialize': {
      POST: {};
    };
    '/user/login': {
      POST: {
        query: {
          Email: string;
          Password: string;
        };
      };
    };
    '/user/logout': {
      POST: {};
    };
    '/user/register': {
      POST: {
        query: {
          Email: string;
          Password: string;
        };
      };
    };
    '/user/info': {
      GET: {};
    };
  };
}
