import React from 'react';
import img from '../assets/png/Cat.png';
import '../styles/components/product-card.scss';

interface ProductCardProps {
  type: string;
  title: string;
  productCount: number;
  addition: string;
  weight: number;
  isHappy: boolean;
  ingredient: string;
}

const ProductCard: React.FC<ProductCardProps> = ({type,
                                                   productCount,
                                                   addition,
                                                   title,
                                                   weight,
                                                   isHappy,
                                                   ingredient}) => {
  const imgClassList = isHappy ? ['img-container', 'happy'] : ['img-container'];
  const onClick = () => {

  };

  return (
    <div className='card-wrapper'>
      <div className='card'>
        <p className='card__type'>{type}</p>
        <div className='card__title-wrapper'>
          <h2 className='card__title'>{title}</h2>
          <p className='card__ingredient'>{ingredient}</p>
        </div>
        <div className='card__info'>
          <p className='card__count'>{productCount} порций</p>
          <p className='card__addition'>{addition}</p>
          {isHappy && <p>заказчик доволен</p>}
        </div>
        <div className={imgClassList.join(' ')}>
          <img src={img} className='card__img' alt='Кот'/>
        </div>
        <div className='card__weight'>
          <span className='card__weight-number'>{weight}</span>
          <span className='card__weight-text'>кг</span>
        </div>
      </div>
      <p className='card__under-text'>
        Чего сидишь? Порадуй котэ, <span className='card__buy-link' onClick={onClick}>купи</span>.
      </p>
    </div>
  );
};

export default ProductCard;