import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkHint from "remark-hint";
import Pre from "@/app/components/Prev/Pre";
import { IMarkdownProps } from "./interfaces";
import styled from "styled-components";
import remarkToc from "remark-toc";

const Markdown = ({ children, width }: IMarkdownProps) => (
  <MarkdownContainer>
    <ReactMarkdown
      components={{
        code({ inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");

          return !inline && match ? (
            <SyntaxHighlighter
              language={match[1]}
              PreTag={Pre}
              style={atomDark}
              customStyle={{ position: "relative", overflow: "auto" }}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <pre>
              <code className={className} {...props}>
                {children}
              </code>
            </pre>
          );
        },
        h1: ({ children }) => <h1>{children}</h1>,
        h2: ({ children }) => <h2>{children}</h2>,
        h3: ({ children }) => <h3 className="gradient">{children}</h3>,
      }}
      remarkPlugins={[remarkGfm, remarkHint, remarkToc]}
      rehypePlugins={[rehypeRaw]}
    >
      {children}
    </ReactMarkdown>
  </MarkdownContainer>
);

export default Markdown;

const MarkdownContainer = styled.div`
  table {
    border-collapse: colapse;
    min-width: "50%";
    max-width: "100%";
    thead {
      tr: {
        background-color: "#f8f9fa";
      }
      th: {
        color: "#666f86";
        font-weight: 700;
      }
    }
    th,
    td {
      padding: 15px 30px;
      text-align: left !important;
      vertical-align: text-top;
      p {
        position: relative;
      }
      p[label] {
        margin-bottom: 32px;
      }
      p[type]::after {
        content: attr(type);
        display: block;
        font-weight: 700;
        color: "#cfd4da";
      }
      p[label]::before {
        display: block;
        content: attr(label);
        font-size: 12px;
        padding: 3px 5px;
        border: 1px solid gray;
        color: gray;
        border-radius: 4px;
        width: fit-content;
        position: absolute;
        bottom: -25px;
        font-weight: 700;
        line-height: 1;
      }
      p[label="required"]::before {
        border: 1px solid #eb4f3e;
        color: "#eb4f3e";
      }
    }
    th:first-of-type,
    td:first-of-type {
      padding: 15px 10px;
    }
    tr {
      border-bottom: 1px solid #e0e2e5;
    }
  }
  blockquote {
    background-color: "#f6f6f6";
    padding-left: 30px;
    padding: 10px 30px;
    border-left: 5px solid #ccc8c8;
    margin: 20px 0;
    p {
      margin: 0;
    }
  }
  & .instruction {
    width: calc(100% + 65%);
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 40px;
    position: relative;
    pre: {
      overflow: auto;
      margin: 0;
    }
    table: {
      minwidth: 60%;
      maxwidth: 70%;
    }
  }
  .paragraph {
    margin-bottom: 80px;
  }
  & .hint {
    padding: 15px;
    border-radius: 8px;
    background-color: #cfd4da;
    display: flex;
    align-items: center;
  }
  .hint.tip {
    background-color: #d7f7ff;
  }
  .hint::before {
    content: "";
    margin-right: 15px;
    min-width: 30px;
    height: 30px;
    background-size: cover;
    background-repeat: no-repeat;
    align-self: flex-start;
  }
  .hint.warn {
    background-color: #ffedcb;
  }
  & .hint.error {
    background-color: #ffddd4;
  }
`;
