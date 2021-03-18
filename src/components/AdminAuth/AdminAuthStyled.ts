import styled from "styled-components";

export const AdminAuthWrapper = styled.div`
  height: calc(100vh - 60px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > *:nth-child(1){
    width: 320px;
    box-shadow: var(--container-box-shadow);
    border-radius: 2px;
  }
`;