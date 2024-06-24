import { createPortal } from 'react-dom';
import DetailItem from './DetailItem';
import { useState, useEffect } from 'react';
type IWrapperPortal = {
  id: number;
};

const WrapperPortal: React.FC<IWrapperPortal> = ({ id }) => {
  const [div, setDiv] = useState<HTMLDivElement>();

  useEffect(() => {

    const newPage = window.open(``, '_blank', 'width=300px,height=300px');

    if (newPage) {
      const detailContainer = newPage.document.createElement('div');
      newPage.document.body.append(detailContainer);
      detailContainer.id = 'productDetailContainer';

      setDiv(detailContainer);
    }
    

  }, []);

  return div ? createPortal(<DetailItem id={id} />, div) : null;
};
export default WrapperPortal;
