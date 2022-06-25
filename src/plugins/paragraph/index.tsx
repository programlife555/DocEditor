import "./index.scss";
import { EDITOR_ELEMENT_TYPE, Plugin } from "../../utils/slate-plugins";
import { Descendant, Editor, Transforms } from "slate";
import { isArray } from "src/utils/is";
import { getOmitAttributes } from "src/utils/slate-get";
import { isText } from "src/utils/slate-is";

export const ParagraphPlugin = (): Plugin => {
  return {
    key: "paragraph",
    type: EDITOR_ELEMENT_TYPE.BLOCK,
    priority: 11,
    match: () => true,
    renderLine: context => (
      <div className="doc-line" onClick={e => e.stopPropagation()}>
        {context.children}
      </div>
    ),
    command: (editor: Editor) => {
      if (editor.selection) {
        let marks: Record<string, void> = {};
        const [element] = Editor.fragment(editor, editor.selection);
        const queue: Descendant[] = [element];
        while (queue.length) {
          const node = queue.shift();
          if (!node) continue;
          if (isArray(node.children)) queue.push(...(node.children as Descendant[]));
          if (node.text) {
            const keys = Object.keys(node);
            marks = { ...marks, ...getOmitAttributes(keys, ["text"]) };
          }
        }
        Transforms.setNodes(editor, marks, { match: isText, split: true });
      }
    },
  };
};