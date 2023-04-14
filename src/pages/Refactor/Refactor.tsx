import { useState, useEffect } from "react";

import styled from "styled-components";

const numberRegexTest = (value: string) => !/[^0-9]/g.test(value);

export default function Refactor() {
  const [input, setInput] = useState("");
  const [validCondition, setValidCondition] = useState(false);

  const handleSubmit = () => {
    if (validCondition) {
      console.log("통과");
      return;
    }
    console.log("검증 실패");
  };

  const handleInput = (value: string) => {
    setInput(value);
  };

  useEffect(() => {
    const check = numberRegexTest(input);
    setValidCondition(check);
  }, [input]);

  return (
    <Container>
      <input
        value={input}
        height={50}
        onChange={(e) => handleInput(e.currentTarget.value)}
      />
      <StyledButton isValid={validCondition} onClick={() => handleSubmit()}>
        저장
      </StyledButton>
      {`검증 ${validCondition ? "성공" : "실패"}`}
    </Container>
  );
}

const Container = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

const StyledButton = styled.button<{ isValid: boolean }>`
  width: 50px;
  height: 40px;
  background: ${(props) => (!props.isValid ? "#CCC" : "#37a9d4")};
  border: none;
`;
