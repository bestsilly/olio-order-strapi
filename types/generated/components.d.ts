import type { Schema, Struct } from '@strapi/strapi';

export interface OlioOrderItem extends Struct.ComponentSchema {
  collectionName: 'components_olio_order_items';
  info: {
    displayName: 'Order-Item';
    icon: 'restaurant';
  };
  attributes: {
    food_item: Schema.Attribute.Relation<
      'oneToOne',
      'api::food-item.food-item'
    >;
    quantity: Schema.Attribute.Integer & Schema.Attribute.Required;
    snapshot_itemName: Schema.Attribute.String & Schema.Attribute.Required;
    snapshot_unitPrice: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

export interface OlioPaymentDetails extends Struct.ComponentSchema {
  collectionName: 'components_olio_payment_details';
  info: {
    displayName: 'Payment-Details';
    icon: 'shoppingCart';
  };
  attributes: {
    method: Schema.Attribute.Enumeration<['promptpay', 'cash_on_pickup']> &
      Schema.Attribute.Required;
    paymentStatus: Schema.Attribute.Enumeration<['pending', 'paid', 'failed']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'pending'>;
    slipImage: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'olio.order-item': OlioOrderItem;
      'olio.payment-details': OlioPaymentDetails;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
