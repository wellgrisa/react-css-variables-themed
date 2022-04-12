import ReactMarkdown from "react-markdown";
import { ReactMarkdownOptions } from "react-markdown/lib/react-markdown";
import rehypeHighlight from "rehype-highlight";

import { colorHarmoniesMarkdown } from "./color-harmonies-markdown";
import { cssStyleDeclarationMarkdown } from "./css-style-declaration-markdown";
import { darkenLightenMarkdown } from "./darken-lighten-markdown";
import { overviewMarkdown } from "./overview-markdown";

export const Markdown = ({ className, children }: ReactMarkdownOptions) => (
  <ReactMarkdown rehypePlugins={[rehypeHighlight]} className={className}>
    {children}
  </ReactMarkdown>
);

export const OverviewMarkdown = () => <Markdown>{overviewMarkdown}</Markdown>;

export const CssStyleDeclarationMarkdown = () => (
  <Markdown>{cssStyleDeclarationMarkdown}</Markdown>
);

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
