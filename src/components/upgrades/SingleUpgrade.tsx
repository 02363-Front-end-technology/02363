import React from "react";
import Button from "@Components/Button";

type IProps = {
  title: string;
  price: number;
  onClickCallback: () => void;
  isBought: boolean;
}

const SingleUpgrade: React.FC<IProps> = ({title,price, isBought}) => {

  return (
    <div className='flex justify-between'>
      <span>{title}</span>
      <div className='flex inline-flex'>
        <span>${price}</span>
        <Button disabled={isBought}>
          {isBought ? 'Bought' : 'Buy'}
        </Button>
      </div>
    </div>
  );
};

export default SingleUpgrade;
