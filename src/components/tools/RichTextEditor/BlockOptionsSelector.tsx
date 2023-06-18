import { FC } from "react";
import { Typography } from "@mui/material";
import {
  ClearAll,
  FormatListBulleted,
  FormatListNumbered,
  FormatQuote,
  Code,
} from "@mui/icons-material";

import {
  $getSelection,
  $isRangeSelection,
  $createParagraphNode,
} from "lexical";
import { $wrapNodes } from "@lexical/selection";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $createCodeNode } from "@lexical/code";
import { $createHeadingNode, $createQuoteNode } from "@lexical/rich-text";
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND,
} from "@lexical/list";

import { BasicMenu } from "@/components/ui";

interface Props {
  blockType: string;
}

export const BlockOptionsSelector: FC<Props> = ({ blockType }) => {
  const [editor] = useLexicalComposerContext();

  const formatParagraph = () => {
    if (blockType !== "paragraph") {
      editor.update(() => {
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
          $wrapNodes(selection, () => $createParagraphNode());
        }
      });
    }
  };

  const formatLargeHeading = () => {
    if (blockType !== "h1") {
      editor.update(() => {
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
          $wrapNodes(selection, () => $createHeadingNode("h1"));
        }
      });
    }
  };

  const formatSmallHeading = () => {
    if (blockType !== "h2") {
      editor.update(() => {
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
          $wrapNodes(selection, () => $createHeadingNode("h2"));
        }
      });
    }
  };

  const formatBulletList = () => {
    if (blockType !== "ul") {
      // @ts-ignore
      editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND);
    } else {
      // @ts-ignore
      editor.dispatchCommand(REMOVE_LIST_COMMAND);
    }
  };

  const formatNumberedList = () => {
    if (blockType !== "ol") {
      // @ts-ignore
      editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND);
    } else {
      // @ts-ignore
      editor.dispatchCommand(REMOVE_LIST_COMMAND);
    }
  };

  const formatQuote = () => {
    if (blockType !== "quote") {
      editor.update(() => {
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
          $wrapNodes(selection, () => $createQuoteNode());
        }
      });
    }
  };

  const formatCode = () => {
    if (blockType !== "code") {
      editor.update(() => {
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
          $wrapNodes(selection, () => $createCodeNode());
        }
      });
    }
  };

  return (
    <BasicMenu
      autoInitialize
      label=""
      items={[
        {
          text: "Normal",
          icon: <ClearAll sx={{ mr: 1 }} />,
          onClick: formatParagraph,
          isActive: blockType === "paragraph",
        },

        {
          text: "Large Heading",
          icon: (
            <Typography sx={{ mr: 1, fontWeight: "500", letterSpacing: 1 }}>
              H1
            </Typography>
          ),
          onClick: formatLargeHeading,
          isActive: blockType === "h1",
        },
        {
          text: "Small Heading",
          icon: (
            <Typography sx={{ mr: 1, fontWeight: "500", letterSpacing: 1 }}>
              H2
            </Typography>
          ),
          onClick: formatSmallHeading,
          isActive: blockType === "h2",
        },
        {
          text: "Bullet List",
          icon: <FormatListBulleted sx={{ mr: 1 }} />,
          onClick: formatBulletList,
          isActive: blockType === "ul",
        },
        {
          text: "Numbered List",
          icon: <FormatListNumbered sx={{ mr: 1 }} />,
          onClick: formatNumberedList,
          isActive: blockType === "ol",
        },
        {
          text: "Quote",
          icon: <FormatQuote sx={{ mr: 1 }} />,
          onClick: formatQuote,
          isActive: blockType === "quote",
        },
        {
          text: "Code",
          icon: <Code sx={{ mr: 1 }} />,
          onClick: formatCode,
          isActive: blockType === "code",
        },
      ]}
    />
  );
};
