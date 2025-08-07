export interface Category {
  _id: string;
  name: string;
  slug: string;
  description?: string;
    image?: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
}