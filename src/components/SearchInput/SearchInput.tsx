import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { todoContext } from "../../provider/TodoProvider";

const SearchInput = () => {
  let { dispatch } = React.useContext(todoContext);
  return (
    <div className="searchInput">
      <InputGroup>
        <FormControl
          type="text"
          placeholder="Search here"
          onChange={(e) =>
            dispatch({
              type: "SEARCH_TODO",
              payload: { todo: e.target.value },
            })
          }
        />
      </InputGroup>
    </div>
  );
};

export default SearchInput;
