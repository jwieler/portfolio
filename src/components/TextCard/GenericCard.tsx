import { Card } from "react-bootstrap"
import React from "react"

interface GenericCardProps {
    text: string,
    title: string | null | undefined,
    children?: React.ReactNode | null | undefined,
};


// take single paragraph and preserve <a> tags found within
const renderTextWithLinksInParagraph = (text: string): JSX.Element => {
    // match opening and closing a tags with href present somewhere in the string
    const linkRegex = /<a\s+(?:[^>]*?\s+)?(?:href="([^"]*)")?[^>]*>(.*?)<\/a>/g;

    const elements: JSX.Element[] = [];
    let lastIndex = 0;
    let match;
  
    // Find all <a> tags in the input text
    while ((match = linkRegex.exec(text)) !== null) {
      const [fullMatch, href, linkText] = match;

      // dynamically set target based on if the link is internal/external or whether it is a pdf
      let target;
      if (!href.startsWith('/') || href.endsWith('.pdf')) {
        target = "_blank";
      }
  
      // Add text before <a> tag
      const beforeLinkText = text.substring(lastIndex, match.index);
      if (beforeLinkText) {
        elements.push(<span key={`text-${lastIndex}`}>{beforeLinkText}</span>);
      }
  
      // Add <a> tag
      elements.push(
        <a key={`link-${lastIndex}`} href={href} rel="noopener noreferrer" target={target}>
            {linkText}
        </a>
      );
  
      lastIndex = match.index + fullMatch.length;
    }
  
    // Add remaining text after the last <a> tag (if any)
    const remainingText = text.substring(lastIndex);
    if (remainingText) {
      elements.push(<span key={`text-${lastIndex}`}>{remainingText}</span>);
    }
  
    return <span key={`span-${lastIndex}`}>{elements}</span>;
  };


// split text by newlines and create a list of HTML elements out of them, while preserving <a> tags
const createParagraphs = (text: string) => {
    const parts = text.split('\n');

    let paragraphs = [];
    let index = 0;
    for (const p of parts) {
        paragraphs.push(
            <p key={`pargraph-${index++}`}>
                {renderTextWithLinksInParagraph(p)}
            </p>
        );
    }

    return paragraphs;
}

const GenericCard: React.FC<GenericCardProps> = ({title, text, children}) => {
    const paragraphs = createParagraphs(text);
    return (
        <Card className="card" style={{margin: 'auto'}}>
            <Card.Body>
                {title?.length && (
                    <Card.Title key="title">
                        {title}
                    </Card.Title>
                )}
                {paragraphs}
                {children}
            </Card.Body>
        </Card>
    )
}

export default GenericCard;