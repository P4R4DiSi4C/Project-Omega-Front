// libs
import Styled from 'styled-components';

export default Styled.div(props => {
  const { 
    children, 
    forwardedComponent, 
    forwardedRef, 
    theme, 
    ...filtered 
  } = props;
  return filtered;
});