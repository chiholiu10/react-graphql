import { FC, memo } from 'react';
import { Link } from "react-router-dom";
import { AccordionBlockProps } from '../../types/types';
import { AccordionSection, AccordionInfo, AccordionDate, Button } from './AccordionBlock.styles';

export const AccordionBlock: FC<AccordionBlockProps> = ({
  selectedId,
  characterId,
  characterName,
  characterCreated
}) => {
  let date = new Date(characterCreated).toString();

  return (
    <AccordionSection
      open={characterId === selectedId ? false : true}
    >
      <AccordionDate>{date}</AccordionDate>
      {characterName === "unknown" ? "" : <AccordionInfo>{characterName}</AccordionInfo>}
      <Button>
        <Link
          to={`/characters/${characterId}`}
        >
          Character Info
      </Link>
      </Button>
    </AccordionSection>
  );
};

export default memo(AccordionBlock);
