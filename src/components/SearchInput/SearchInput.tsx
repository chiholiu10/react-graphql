import { FC, useEffect, useState, useCallback, memo, ChangeEvent } from 'react';
import { SearchInputProps } from '../../types/types';
import { Nav, Input } from "./SearchInput.styles";

export const SearchInput: FC<SearchInputProps> = ({ value, onChange }) => {
  const [inputValue, setInputValue] = useState("");
  const [scrollY, setScrollY] = useState(true);
  const [y, setY] = useState(window.scrollY);

  const onChangeHandler = (text: string) => {
    setInputValue(text);
  };

  const handleNavigation = useCallback(
    event => {
      const window = event.currentTarget;
      if (y > window.scrollY) {
        setScrollY(true);
      } else {
        setScrollY(false);
      }
      setY(window.scrollY);
    }, [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => window.removeEventListener("scroll", handleNavigation);
  }, [handleNavigation]);

  useEffect(() => {
    onChange(inputValue);
  }, [inputValue, onChange]);

  return (
    <Nav show={scrollY}>
      <Input
        type="text"
        name="name"
        onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeHandler(event.target.value)}
        placeholder="Search Episode"
        value={value}
      />
    </Nav>
  );
};

export default memo(SearchInput);