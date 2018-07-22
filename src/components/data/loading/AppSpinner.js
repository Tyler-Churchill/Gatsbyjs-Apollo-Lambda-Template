import React from 'react'
import styled from 'styled-components'

const AppSpinner = () => (
  <StyledSpinner>
    {/* <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="4"
    /> */}
  </StyledSpinner>
)

const StyledSpinner = styled.svg`
  width: 40px;
  height: 40px;
  background-color: #333;

  border-radius: 100%;
  -webkit-animation: sk-scaleout 1s infinite ease-in-out;
  animation: sk-scaleout 1s infinite ease-in-out;
  @-webkit-keyframes sk-scaleout {
    0% {
      -webkit-transform: scale(0);
    }
    100% {
      -webkit-transform: scale(1);
      opacity: 0;
    }
  }

  @keyframes sk-scaleout {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 0;
    }
  }
`
export default AppSpinner
