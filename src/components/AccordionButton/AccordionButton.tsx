import { FC, memo } from 'react';
import { AccordionBtn } from './AccordionButton.styles';
import { AccordionButtonProps } from '../../types/types';

export const AccordionButton: FC<AccordionButtonProps> = ({ characterId, selectedId, onClick }) => {

  return (
    <AccordionBtn
      open={characterId === selectedId ? true : false}
      onClick={onClick}
    >
      {characterId === selectedId ? 'Close' : 'More info'}
    </AccordionBtn>
  );
};

export default memo(AccordionButton);