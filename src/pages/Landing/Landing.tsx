import useCustomNavigate from "../../hooks/useCustomNavigate";

import styled from "styled-components";

export default function Landing() {
  const { handleNavigate } = useCustomNavigate();

  return (
    <Layout>
      <NavigateBtn onClick={() => handleNavigate({ url: "/refactor" })}>
        리팩토링
      </NavigateBtn>
      <NavigateBtn onClick={() => handleNavigate({ url: "/massive-image" })}>
        대규모 이미지 처리
      </NavigateBtn>
    </Layout>
  );
}

const Layout = styled.div`
  width: 30%;
  height: 50vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavigateBtn = styled.button`
  width: 10rem;
  height: 5rem;
  background: #37a9d4;
  color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;
