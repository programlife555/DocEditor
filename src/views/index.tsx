import { FC, useMemo } from "react";
import { createEditor, Descendant } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { useMemoizedFn } from "ahooks";
import { withHistory } from "slate-history";
import debounce from "lodash/debounce";
import { SlatePlugins } from "src/core/plugin";
import { ParagraphPlugin } from "src/plugins/paragraph";
import { DocToolBarPlugin } from "src/plugins/doc-toolbar";
import { HeadingPlugin } from "src/plugins/heading";
import { BoldPlugin } from "src/plugins/bold";
import { MenuToolBar } from "src/plugins/float-toolbar";
import { QuoteBlockPlugin } from "src/plugins/quote-block";
import { HyperLinkPlugin } from "src/plugins/hyper-link";
import { UnderLinePlugin } from "src/plugins/under-line";
import { StrikeThroughPlugin } from "src/plugins/strike-through";
import { ItalicPlugin } from "src/plugins/italic";
import { InlineCodePlugin } from "src/plugins/inline-code";
import { ShortCutPlugin } from "src/plugins/shortcut";
import { OrderedListPlugin } from "src/plugins/ordered-list";
import { UnorderedListPlugin } from "src/plugins/unordered-list";
import { DividingLinePlugin } from "src/plugins/dividing-line";
import { example } from "./example";
import { AlignPlugin } from "src/plugins/align";
import { HighlightBlockPlugin } from "src/plugins/highlight-block";
import { FontBasePlugin } from "src/plugins/font-base";
import { LineHeightPlugin } from "src/plugins/line-height";
import { ImagePlugin } from "src/plugins/image";
import { withSchema } from "src/core/schema";
import { schema } from "./schema";
import { CodeBlockPlugin } from "src/plugins/codeblock";

const SlateDocEditor: FC<{
  isRender: boolean;
}> = props => {
  const editor = useMemo(() => withSchema(schema, withHistory(withReact(createEditor()))), []);
  const initText = example;

  const updateText = useMemoizedFn(
    debounce((text: Descendant[]) => {
      // console.log("Text changes", JSON.stringify(text));
      console.log("Text changes", text);
    }, 500)
  );

  const { renderElement, renderLeaf, onKeyDown, commands, onCopy, decorate } = useMemo(() => {
    const register = new SlatePlugins(
      ParagraphPlugin(),
      HeadingPlugin(editor),
      BoldPlugin(),
      QuoteBlockPlugin(editor),
      HyperLinkPlugin(editor, props.isRender),
      UnderLinePlugin(),
      StrikeThroughPlugin(),
      ItalicPlugin(),
      InlineCodePlugin(),
      OrderedListPlugin(editor),
      UnorderedListPlugin(editor),
      DividingLinePlugin(),
      AlignPlugin(),
      HighlightBlockPlugin(editor, props.isRender),
      FontBasePlugin(),
      LineHeightPlugin(),
      ImagePlugin(editor, props.isRender),
      CodeBlockPlugin(editor, props.isRender)
    );

    const commands = register.getCommands();
    register.add(
      DocToolBarPlugin(editor, props.isRender, commands),
      ShortCutPlugin(editor, commands)
    );

    return register.apply();
  }, [editor, props.isRender]);

  return (
    <Slate editor={editor} value={initText} onChange={updateText}>
      <MenuToolBar isRender={props.isRender} commands={commands} editor={editor}></MenuToolBar>
      <Editable
        decorate={decorate}
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        readOnly={props.isRender}
        placeholder="Enter text ..."
        onKeyDown={onKeyDown}
        onCopy={e => onCopy(e, editor)}
      />
    </Slate>
  );
};

export default SlateDocEditor;

// https://docs.slatejs.org/
// https://github.com/ianstormtaylor/slate
// https://www.slatejs.org/examples/richtext
