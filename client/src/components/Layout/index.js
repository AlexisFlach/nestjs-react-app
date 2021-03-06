import styled from 'styled-components';
import theme from '../../shared/theme';

export const NAVBAR_WIDTH = 72;
export const NAVBAR_EXPANDED_WIDTH = 256;
export const MIN_PRIMARY_COLUMN_WIDTH = 600;
export const MIN_SECONDARY_COLUMN_WIDTH = 320;
export const MAX_PRIMARY_COLUMN_WIDTH = 968;
export const MAX_SECONDARY_COLUMN_WIDTH = 400;
export const COL_GAP = 24;
export const TITLEBAR_HEIGHT = 62;
export const MIN_MAX_WIDTH =
  MIN_PRIMARY_COLUMN_WIDTH + MIN_SECONDARY_COLUMN_WIDTH + COL_GAP;
export const MAX_WIDTH =
  MAX_PRIMARY_COLUMN_WIDTH + MAX_SECONDARY_COLUMN_WIDTH + COL_GAP;
export const MIN_WIDTH_TO_EXPAND_NAVIGATION = MAX_WIDTH + 256;
export const SINGLE_COLUMN_WIDTH = MAX_WIDTH;
// add 144 (72 * 2) to account for the left side nav
export const MEDIA_BREAK =
  MIN_PRIMARY_COLUMN_WIDTH +
  MIN_SECONDARY_COLUMN_WIDTH +
  COL_GAP +
  NAVBAR_WIDTH * 2;

/* 
  do not remove this className.
  see `src/routes.js` for an explanation of what's going on here
*/
export const ViewGrid = styled.main.attrs({
  id: 'main',
  className: 'view-grid',
})`
  display: grid;
  grid-area: main;
  height: 100%;
  max-height: calc(100vh - 48px);
  overflow: hidden;
  overflow-y: auto;

  @media (max-width: ${MEDIA_BREAK}px) {
    max-height: calc(100vh - ${TITLEBAR_HEIGHT}px - 48px);
  }
`;



export const CenteredGrid = styled.div`
  display: grid;
  justify-self: center;
  grid-template-columns: ${MAX_WIDTH}px;
  align-self: center;
  max-width: ${MAX_PRIMARY_COLUMN_WIDTH}px;
  grid-template-columns: minmax(
    ${MIN_PRIMARY_COLUMN_WIDTH}px,
    ${MAX_PRIMARY_COLUMN_WIDTH}px
  );

  @media (max-width: ${MEDIA_BREAK}px) {
    align-self: flex-start;
    width: 100%;
    max-width: 100%;
    grid-template-columns: 1fr;
    height: calc(100vh - ${TITLEBAR_HEIGHT}px - 48px);
  }
`;