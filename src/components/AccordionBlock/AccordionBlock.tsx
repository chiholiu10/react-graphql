import { FC } from 'react';
import { Link } from "react-router-dom";
import { AccordionBlockProps } from '../../types/types';
import { AccordionSection, AccordionInfo, AccordionDate, Button } from './AccordionBlock.styles';

export const AccordionBlock: FC<AccordionBlockProps> = ({
  selectedId,
  characterId,
  characterName,
  characterCreated
}) => {
  return (
    <AccordionSection
      open={characterId === selectedId ? false : true}
    >
      <AccordionDate>{characterCreated}</AccordionDate>
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
