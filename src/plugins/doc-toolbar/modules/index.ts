import { DocToolbarPlugin } from "../types";
import { DefaultAddDocToolBarPlugin } from "./default-add";
import { HeadingDocToolBarPlugin } from "./heading";
import { ListDocToolBarPlugin } from "./list";
import { QuoteDocToolBarPlugin } from "./quote";
import { TextDocToolBarPlugin } from "./text";

export const DOC_TOOLBAR_MODULES: DocToolbarPlugin[] = [
  TextDocToolBarPlugin,
  HeadingDocToolBarPlugin,
  QuoteDocToolBarPlugin,
  ListDocToolBarPlugin,
  DefaultAddDocToolBarPlugin,
];
