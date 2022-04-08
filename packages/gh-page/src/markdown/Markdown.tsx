import ReactMarkdown from 'react-markdown'
import { ReactMarkdownOptions } from 'react-markdown/lib/react-markdown'
import rehypeHighlight from 'rehype-highlight'

export const Markdown = ({ className, children }: ReactMarkdownOptions) => (
  <ReactMarkdown rehypePlugins={[rehypeHighlight]} className={className}>
    {children}
  </ReactMarkdown>
);
