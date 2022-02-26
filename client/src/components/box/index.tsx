import React from 'react';
import {
  StyledLink,
  StyledBox,
} from './style';

type To = {
  pathname?: string,
  search?: string,
  state?: Object,
};

type ComponentProps = {
  disabled: boolean | undefined
}

type Props = {
  to?: string | To,
  target?: string,
  children?:  any,
  disabled?: boolean,
  isLoading?: boolean,
}

const handleLinkWrapping = (Component: React.ComponentType<ComponentProps>, props: Props): React.ReactElement => {
  const { to, children, disabled, isLoading, ...rest } = props;
  const box = (
    <Component disabled={disabled || isLoading} {...rest}>
      {children}
    </Component>
  )
  if (to) return <StyledLink to={to}>{box}</StyledLink>;
    return box;
}



export const Box = (props: Props) => handleLinkWrapping(StyledBox, props);