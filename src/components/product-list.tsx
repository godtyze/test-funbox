import React from 'react';
import {IProduct} from "../types";
import ProductCard from "./product-card";
import '../styles/components/product-list.scss';

const products: IProduct[] = [
  {
    id: 1,
    type: 'Сказочное заморское яство',
    title: 'Нямушка',
    ingredient: 'с фуа-гра',
    productCount: 10,
    addition: 'мышь в подарок',
    weight: 0.5,
    isHappy: false
  },
  {
    id: 2,
    type: 'Сказочное заморское яство',
    title: 'Нямушка',
    ingredient: 'с рыбой',
    productCount: 40,
    addition: '2 мыши в подарок',
    weight: 2,
    isHappy: false
  },
  {
    id: 3,
    type: 'Сказочное заморское яство',
    title: 'Нямушка',
    ingredient: 'с курой',
    productCount: 100,
    addition: '5 мышей в подарок',
    weight: 5,
    isHappy: true
  }
];

const ProductList: React.FC = () => {
  return (
    <ul className='product-list list'>
      {products.map(product => (
        <li key={product.id} className='list__item'>
          <ProductCard type={product.type}
                       title={product.title}
                       productCount={product.productCount}
                       addition={product.addition}
                       weight={product.weight}
                       isHappy={product.isHappy}
                       ingredient={product.ingredient}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;