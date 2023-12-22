import type { Schema, Attribute } from '@strapi/strapi';

export interface BurgerBurger extends Schema.Component {
  collectionName: 'components_burger_burgers';
  info: {
    displayName: 'Burger';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    mass: Attribute.String;
    price: Attribute.String;
    burgerImg: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'burger.burger': BurgerBurger;
    }
  }
}
