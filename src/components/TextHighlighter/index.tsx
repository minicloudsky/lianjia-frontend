import React, { useEffect, useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Spin } from 'antd';

const Code = (props) => {
  return (
    <SyntaxHighlighter
      showLineNumbers={true}
      startingLineNumber={1}
      language={props.lang}
      style={dark}
      lineNumberStyle={{ color: '#ddd', fontSize: 10 }}
      wrapLines={true}
      lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}}
    >
      {props.codeText}
    </SyntaxHighlighter>
  );
};

const TextHighLighter = ({ lang, codeText }) => {
  return (
    <div style={{ height: window.innerHeight * 0.7, overflowY: 'scroll' }}>
      {codeText === '' ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Spin />
        </div>
      ) : (
        <Code lang={lang} codeText={codeText} className="lianjia-code-highlighter" />
      )}
    </div>
  );
};

export default TextHighLighter;
