import useCustomNavigate from "../../hooks/useCustomNavigate";

import styled from "styled-components";

export default function Nav() {
  const { handleNavigate } = useCustomNavigate();

  return (
    <NavSticky onClick={() => handleNavigate({ url: "/" })}>
      홈으로 가기
    </NavSticky>
  );
}

const NavSticky = styled.div`
  width: 100%;
  height: 60px;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333;
  color: #fff;
  border-bottom: 1px solid "rgba(73,60,92,1)";
  cursor: pointer;
`;
