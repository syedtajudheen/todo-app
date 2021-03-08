import React from "react";
import cx from "classnames";
import { VISIBILITY_FILTERS } from "../constants";

export const VisibilityFilters = ({ activeFilter, onSetFilter }) => {
  return (
    <div className='visibility-filters'>
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              currentFilter === activeFilter && "active"
            )}
            onClick={() => {
              onSetFilter(currentFilter);
            }}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};
