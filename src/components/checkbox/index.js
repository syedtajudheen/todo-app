import React from "react";
import cx from "classnames";
import "./styles.scss";

export const Checkbox = ({ onChange, checked, text, disabled }) => (
  <div className={cx('checkbox', disabled && "disabled")}>
    <span className='checkbox-root'>
      <input
        type="checkbox"
        name="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
    </span>
    <label>
      <span
        className={cx(
          checked && "line-through"
        )}
      >
        <span className={cx(checked && "content")}>{text}</span>
      </span>
    </label>
  </div>
);

Checkbox.defaultProps = {
  disabled: false,
  text: '',
  checked: false
};
