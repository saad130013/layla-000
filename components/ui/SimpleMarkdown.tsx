import React from 'react';

// A simple parser to handle basic markdown elements
const SimpleMarkdown: React.FC<{ text: string }> = ({ text }) => {
  const elements = text.split('\n').map((line, index) => {
    // Bold: **text**
    const boldedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Headings: #, ##, ###
    if (boldedLine.startsWith('### ')) {
      return <h5 key={index} className="font-bold mt-2" dangerouslySetInnerHTML={{ __html: boldedLine.substring(4) }} />;
    }
    if (boldedLine.startsWith('## ')) {
      return <h4 key={index} className="font-bold text-lg mt-3" dangerouslySetInnerHTML={{ __html: boldedLine.substring(3) }} />;
    }
    if (boldedLine.startsWith('# ')) {
      return <h3 key={index} className="font-bold text-xl mt-4" dangerouslySetInnerHTML={{ __html: boldedLine.substring(2) }} />;
    }

    // List items: * or -
    if (boldedLine.startsWith('* ') || boldedLine.startsWith('- ')) {
      return <li key={index} className="ms-5 list-disc" dangerouslySetInnerHTML={{ __html: boldedLine.substring(2) }} />;
    }
    
    // Empty line becomes a break
    if (boldedLine.trim() === '') {
        return <br key={index} />;
    }

    // Paragraph
    return <p key={index} className="mb-2" dangerouslySetInnerHTML={{ __html: boldedLine }} />;
  });

  return <div className="text-sm leading-relaxed">{elements}</div>;
};

export default SimpleMarkdown;
