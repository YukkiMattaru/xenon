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
