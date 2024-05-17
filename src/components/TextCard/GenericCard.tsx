import { Card } from "react-bootstrap"
import React from "react"

interface GenericCardProps {
    text: string,
    title: string | null | undefined,
    width: string | undefined,
    children?: React.ReactNode | null | undefined,
};


const renderTextWithLinksInParagraph = (text: string): JSX.Element => {
    const linkRegex = /<a\s+(?:[^>]*?\s+)?href="([^"]*)"[^>]*>(.*?)<\/a>/g;
    const elements: JSX.Element[] = [];
    let lastIndex = 0;
    let match;
  
    // Find all <a> tags in the input text
    while ((match = linkRegex.exec(text)) !== null) {
      const [fullMatch, href, linkText] = match;

      let target;
      if (!href.startsWith('/')) {
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
  
    // Render paragraph with links
    return <span>{elements}</span>;
  };


const createParagraphs = (text: string) => {
    const parts = text.split('\n');

    let paragraphs = [];
    for (const p of parts) {
        paragraphs.push(
            <p>
                {renderTextWithLinksInParagraph(p)}
            </p>
        );
    }

    return paragraphs;
}

const GenericCard: React.FC<GenericCardProps> = ({title, text, width, children}) => {
    const paragraphs = createParagraphs(text);
    return (
        <Card style={{width: width, margin: 'auto'}}>
            <Card.Body>
                {title?.length && (
                    <Card.Title>
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