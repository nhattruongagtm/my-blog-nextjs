import { useState, useRef, ReactNode } from "react";
import styled from "styled-components";

type PreProps = {
  children: ReactNode;
};
const Pre = (props: PreProps) => {
  const textInput = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const onExit = () => {
    setCopied(false);
  };
  const onCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(textInput.current?.textContent ?? "");
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <StyledPre ref={textInput} onMouseLeave={onExit}>
      <CopyButton aria-label="Copy code" type="button" onClick={onCopy}>
        {copied ? (
          "Copied"
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            width={"30px"}
            height={"30px"}
            style={{ marginRight: "-30px" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
            />
          </svg>
        )}
      </CopyButton>
      <pre style={{ overflow: "auto" }}>{props.children}</pre>
    </StyledPre>
  );
};

const StyledPre = styled.div`
  position: relative;
  background-color: "#0B2330";
  padding: 20px;
  border-radius: 5px;
  overflow: auto;
`;

const CopyButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
`;

export default Pre;
