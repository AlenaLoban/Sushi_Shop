import Button from '../../../core/ui/Button';
import { useAppDispatch } from '../../../core/store/hooks';
import React, { useState } from 'react';
import { IItem } from '../../../hooks/types/data';
import { addItem } from '../../cart/list/cartSlice';

type IButtonAddToCart={
    props:IItem;
    className: string;
}

const ButtonAddToCart:React.FC<IButtonAddToCart>= ({props, className}) => {
  const [isAddToCart, setIsAddToCart] = useState(false);
  const dispatch = useAppDispatch();

  const handleAddtoCart = (props: IItem): void => {
    dispatch(addItem(props));
    setIsAddToCart(true);
  };

  return <Button className={className} onClick={()=>handleAddtoCart(props)}>{isAddToCart ? 'добавить ещё' : 'в корзину'}</Button>;
};

export default ButtonAddToCart;
