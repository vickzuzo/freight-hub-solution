import React, { useState } from "react";
import { InputContainer } from "../../styles";

interface Props {
  handleSearchChange: (searchId: string) => void;
}

const SearchShipmentBar = (props: Props) => {
  const [searchId, setSearchId] = useState<string>("");

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    props.handleSearchChange(searchId);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchId(value);
  };

  return (
    <InputContainer>
        <label htmlFor="search_shipment">
          <input
            name="search_shipment"
            value={searchId}
            onChange={handleChange}
            placeholder="Enter Shipment ID eg='S1000'"
          />
        </label>
        <button onClick={handleSearch}>Track Shipment</button>
    </InputContainer>
  );
};

export default SearchShipmentBar;
