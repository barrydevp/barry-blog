import * as React from 'react';
import styles from './styles';
import { useRef } from 'react';
import { noop } from '../../utils/func';

export interface ToggleProps {
  toggle: () => any,
  checked: boolean,
  renderIcon?: (className: string) => React.ReactElement
}

const Toggle = ({ renderIcon, checked, toggle }: ToggleProps) => {
  const checkboxEl = useRef(null);

  const onToggle = () => {
    if (checkboxEl && checkboxEl.current) {
      checkboxEl.current.click();
      checkboxEl.current.focus({ preventScroll: true });
      toggle();
    }
  };

  return (
    <div
      className={styles.bounded}
      onClick={onToggle}
    >
      {renderIcon && renderIcon(styles.icon)}
      <input
        ref={checkboxEl}
        type="checkbox"
        className={styles.box}
        checked={checked}
        onChange={noop}
      />
    </div>
  );
};

Toggle.defaultProps = {
  toggle: () => {
  },
  checked: false,
  // renderIcon: (className: string) => [],
};

export default Toggle;