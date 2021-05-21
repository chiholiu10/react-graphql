import React, { useEffect, useState, useCallback } from 'react';
import { InputProps } from '../../types/types';
import {
  Label,
  Input
} from "./SearchInput.styles";

export const SearchInput: React.FC<InputProps> = ({ value, onChange }) => {
  const [inputValue, setInputValue] = useState("");
  const [y, setY] = useState(window.scrollY);
  const [show, setShow] = useState(false);
  const onChangeHandler = (text: string) => {
    setInputValue(text);
  };

  const handleNavigation = useCallback(
    e => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setShow(true);
      } else if (y < window.scrollY) {
        setShow(false);
      }
      setY(window.scrollY);
    }, [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  useEffect(() => {
    onChange(inputValue);
  }, [inputValue, onChange]);

  return (
    <Label show={show}>
      <Input show={show}
        type="text"
        name="name"
        onChange={(event) => onChangeHandler(event.target.value)}
        placeholder="Search Episode"
        value={value}
      />
    </Label>
  );
};
