import React, {useState} from 'react';
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
  description: string;
  inStock: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
                                                   type,
                                                   productCount,
                                                   addition,
                                                   title,
                                                   weight,
                                                   isHappy,
                                                   ingredient,
                                                   description,
                                                   inStock
                                                 }) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const onClick = () => {
    setIsSelected((prev) => !prev);
    setIsHovered(false);
  };

  const onMouseEnter = () => {
    if (isSelected) {
      setIsHovered(true);
    }
  };

  const onMouseLeave = () => {
    if (isSelected) {
      setIsHovered(false);
    }
  };

  return (
    <div className='card-wrapper'>
      <div className={isSelected ? 'card selected' :
          !inStock ? 'card disabled' : 'card'}
           onClick={onClick}
           onMouseEnter={onMouseEnter}
           onMouseLeave={onMouseLeave}
      >
        {inStock
          ? <p className={isHovered && isSelected ? 'card__type selected' : 'card__type'}>
              {isHovered && isSelected ? 'Котэ не одобряет?' : type}
            </p>
          : <p className='card__type disabled'>
              {type}
            </p>
        }
        <div className='card__title-wrapper'>
          <h2 className={inStock ? 'card__title' : 'card__title disabled'}>{title}</h2>
          <p className={inStock ? 'card__ingredient' : 'card__ingredient disabled'}>{ingredient}</p>
        </div>
        <div className={inStock ? 'card__info' : 'card__info disabled'}>
          <p className='card__count'>{productCount} порций</p>
          <p className='card__addition'>{addition}</p>
          {isHappy && <p>заказчик доволен</p>}
        </div>
        <div className={isHappy ? 'img-container happy' : 'img-container'}>
          <img src={img} className='card__img' alt='Кот'/>
        </div>
        {inStock
          ? <div className={isSelected ? 'card__weight selected' : 'card__weight'}>
              <span className='card__weight-number'>{weight}</span>
              <span className='card__weight-text'>кг</span>
            </div>
          : <div className='card__weight disabled'>
              <span className='card__weight-number'>{weight}</span>
              <span className='card__weight-text'>кг</span>
            </div>
        }
      </div>
      {isSelected && inStock && <p className='card__under-text'>{description}</p>}
      {!isSelected && inStock &&
        <p className='card__under-text'>
          Чего сидишь? Порадуй котэ, <span className='card__buy-link' onClick={onClick}>купи</span>.
        </p>
      }
      {!inStock && <p className='card__under-text disabled'>Печалька, {ingredient} закончился.</p>}
    </div>
  );
};

export default ProductCard;