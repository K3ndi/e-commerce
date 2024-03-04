import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

interface QuantityBoxProps {
  itemId: number;
  itemQuantity: number;
}

const QuantityBox: React.FC<QuantityBoxProps> = (props) => {
  const decrementItem = (): void => {
    console.log('gdd');
  };

  const incrementItem = (): void => {
    console.log('gdd');
  };

  return (
    <>
      <div className="quantity_box">
        <button type="button" onClick={decrementItem}>
          <FaMinus />
        </button>
        <span className="quantity_count">{props.itemQuantity}</span>
        <button
          type="button"
          onClick={incrementItem}
          disabled={props.itemQuantity >= 5}
        >
          <FaPlus />
        </button>
      </div>
    </>
  );
};

export default QuantityBox;
