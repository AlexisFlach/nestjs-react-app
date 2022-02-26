import styled from 'styled-components';
import theme from '../../shared/theme';
import { CenteredGrid } from '../Layout';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: flex;
  flex: none;
  align-items: center;
`;

export const StyledBox = styled.button`
  ${CenteredGrid},
  font-size: ${props => (props.size === 'small' ? '15px' : '16px')};
  font-weight: 600;
  color: ${theme.text.default};
  padding: ${props => (props.size === 'small' ? '6px 12px' : '10px 16px')};
  background: ${theme.bg.wash};
  height: 200px;
  width: 200px;
  cursor: pointer;
  -webkit-display: none;
  opacity: ${props => (props.disabled ? '0.6' : '1')};
  line-height: 1.2;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    background: ${theme.bg.border};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${theme.bg.default}, 0 0 0 4px ${theme.bg.border};
    transition: box-shadow 0.2s ease-in-out;
  }

  &:active {
    transition: box-shadow 0.2s ease-in-out;
  }
`;