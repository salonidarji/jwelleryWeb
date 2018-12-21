export class JwelleryClass {
  constructor(public pk_jwellery_id: number,
      public jwellery_name: string,
      public jwellery_price: number,
      public jwellery_image: string,
      public fk_category_id: number ) {

  }
}

