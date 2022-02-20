import styled, { css } from "styled-components";

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const BlogTitle = styled.p`
  margin-bottom: ${(props) => (props.primary ? "25px" : "10px")};
  color: #5b21b6;
  font-size: ${(props) => (props.primary ? "25px" : "18px")};
  background: ${(props) => (props.primary ? "" : "#f5d0fe")};
  padding: 5px;
  border-radius: 8px;
`;
export const Loading = styled.p`
  color: #5b21b6;
  font-size: 25px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
`;

