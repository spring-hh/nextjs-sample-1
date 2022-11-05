import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';

// use state
import { useState } from 'react';

export default function Markdown() {
  // use state for markdown
  const [markdown, setMarkdown] = useState('');
  // use state for inputMode
  const [inputMode, setInputMode] = useState(true);

  // handle inputMode
  const handleInputMode = () => {
    setInputMode(!inputMode);
  };

  // add string to markdown
  const addString = (str: string) => {
    setMarkdown(markdown + str);
  };

  // save markdown
  const saveMarkdown = () => {
    // save markdown
    console.log(markdown);
  };

  // static string
  const staticStringH1 = '# Markdown Editor\n';
  const staticStringH2 = '## Markdown Editor\n';
  const staticStringH3 = '### Markdown Editor\n';
  const staticStringBorder = '***\n';
  const staticStringCode = '```code\ninput here\n```\n';

  return (
    <Layout title="Markdown">
      <div className="w-16">
        <button onClick={() => handleInputMode()} className="my-2">
          <div className="w-16">{inputMode ? '表示' : '編集'}</div>
        </button>
        {inputMode && (
          <>
            <button onClick={() => addString(staticStringH1)} className="my-2">
              <div className="w-16">h1</div>
            </button>
            <button onClick={() => addString(staticStringH2)} className="my-2">
              <div className="w-16">h2</div>
            </button>
            <button onClick={() => addString(staticStringH3)} className="my-2">
              <div className="w-16">h3</div>
            </button>
            <button
              onClick={() => addString(staticStringBorder)}
              className="my-2"
            >
              <div className="w-16">border</div>
            </button>
            <button
              onClick={() => addString(staticStringCode)}
              className="my-2"
            >
              <div className="w-16">code</div>
            </button>
            <button onClick={() => saveMarkdown()} className="my-2">
              <div className="w-16">保存</div>
            </button>
          </>
        )}
      </div>
      {inputMode ? (
        <textarea
          onChange={(e) => setMarkdown(e.target.value)}
          value={markdown}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter your markdown here..."
        ></textarea>
      ) : (
        <div className="w-full p-2 border border-gray-300 rounded-md">
          {markdown}
        </div>
      )}
    </Layout>
  );
}
