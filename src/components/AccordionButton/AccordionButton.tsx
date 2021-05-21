import { FC } from 'react';
import { AccordionBtn } from './AccordionButton.styles';
import { IProps } from '../../types/types';

export const AccordionButton: FC<IProps> = ({ characterId, selectedId, setSelectedId }) => {

  const onSelectItem = (selectedItemId: number) => {
    if (selectedId !== selectedItemId) {
      setSelectedId(selectedItemId);
    } else {
      setSelectedId(-1);
    }
  };

  return (
    <AccordionBtn
      onClick={() => onSelectItem(characterId)}
      open={characterId === selectedId ? true : false}
    >
      {characterId === selectedId ? 'Close' : 'More info'}
    </AccordionBtn>
  );
};
