import ReactMarkdown from 'react-markdown'
import { ReactMarkdownOptions } from 'react-markdown/lib/react-markdown'
import rehypeHighlight from 'rehype-highlight'

import { colorHarmoniesMarkdown } from './color-harmonies-markdown'
import { darkenLightenMarkdown } from './darken-lighten-markdown'
import { tldrMarkdown } from './tlrl-markdown'

export const Markdown = ({
  className,
  children,
  ...props
}: ReactMarkdownOptions) => (
  <ReactMarkdown
    {...props}
    rehypePlugins={[rehypeHighlight]}
    className={className}
  >
    {children}
  </ReactMarkdown>
);

export const TlDrMarkdown = () => <Markdown>{tldrMarkdown}</Markdown>;

export const DarkenLightenMarkdown = () => (
  <Markdown className="darken-lighten-markdown">
    {darkenLightenMarkdown}
  </Markdown>
);

export const ColorHarmoniesMarkdown = () => (
  <Markdown className="color-harmonies-markdown">
    {colorHarmoniesMarkdown}
  </Markdown>
);
