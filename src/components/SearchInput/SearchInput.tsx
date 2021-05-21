import { FC, useEffect, useState, useCallback, memo } from 'react';
import { InputProps } from '../../types/types';
import { useDispatch } from "react-redux";
import {
  Nav,
  Input
} from "./SearchInput.styles";
import { getScrollY } from '../../actions';

export const SearchInput: FC<InputProps> = ({ value, onChange, triggerPosY }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [y, setY] = useState(window.scrollY);

  const onChangeHandler = (text: string) => {
    setInputValue(text);
  };

  const handleNavigation = useCallback(
    event => {
      const window = event.currentTarget;
      if (y > window.scrollY) {
        dispatch(getScrollY(true));
      } else {
        dispatch(getScrollY(false));
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
    <Nav show={triggerPosY}>
      <Input
        type="text"
        name="name"
        onChange={(event) => onChangeHandler(event.target.value)}
        placeholder="Search Episode"
        value={value}
      />
    </Nav>
  );
};

export default memo(SearchInput);