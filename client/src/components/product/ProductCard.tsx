import React from 'react';
import { IoMdStar } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { displayMoney } from '../../helpers/utils';
import useActive from '../../hooks/useActive';

interface ProductCardProps {
  id: number;
  images: any[];
  title: string;
  info: string;
  finalPrice: number;
  originalPrice: number;
  rateCount: number;
  path: string;
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
  const {
    id,
    images,
    title,
    info,
    finalPrice,
    originalPrice,
    rateCount,
    path,
  } = props;

  const { active, handleActive, activeClass } = useActive(false);

  // handling Add-to-cart
  const handleAddItem = (): void => {
    handleActive(id);

    setTimeout(() => {
      handleActive(false);
    }, 3000);
  };

  const newPrice = displayMoney(finalPrice);
  const oldPrice = displayMoney(originalPrice);

  return (
    <>
      <div className="card products_card">
        <figure className="products_img">
          <Link to={`${path}${id}`}>
            <img src={images[0]} alt="product-img" />
          </Link>
        </figure>
        <div className="products_details">
          <span className="rating_star">
            {[...Array(rateCount)].map((_, i) => (
              <IoMdStar key={i} />
            ))}
          </span>
          <h3 className="products_title">
            <Link to={`${path}${id}`}>{title}</Link>
          </h3>
          <h5 className="products_info">{info}</h5>
          <div className="separator"></div>
          <h2 className="products_price">
            {newPrice} &nbsp;
            <small>
              <del>{oldPrice}</del>
            </small>
          </h2>
          <button
            type="button"
            className={`btn products_btn ${activeClass(id)}`}
            onClick={handleAddItem}
          >
            {active ? 'Added' : 'Add to cart'}
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
