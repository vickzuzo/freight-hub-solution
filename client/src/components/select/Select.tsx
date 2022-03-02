import React from "react";
import { SelectInputContainer } from "../../styles";

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  selectOptions: string[];
  name: string;
  defaultValue: string;
}

const Select = ({ selectOptions, name, defaultValue, ...props }: Props) => {
  return (
    <SelectInputContainer>
      <label htmlFor={name}>
        <small>{name}</small>
        <select name={name} {...props}>
          <option value={defaultValue}>- Select Sorting Options -</option>
          {selectOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </SelectInputContainer>
  );
};

export default Select;
