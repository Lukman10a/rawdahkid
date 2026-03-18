"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Color from "@tiptap/extension-color";
import { TextStyle } from "@tiptap/extension-text-style";
import { Table } from "@tiptap/extension-table";
import { TableRow } from "@tiptap/extension-table-row";
import { TableCell } from "@tiptap/extension-table-cell";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Code,
  Link as LinkIcon,
  Image as ImageIcon,
  Table as TableIcon,
} from "lucide-react";
import { useCallback } from "react";

interface RichEditorProps {
  value: string;
  onChange: (content: string) => void;
  placeholder?: string;
}

export function RichEditor({ value, onChange, placeholder }: RichEditorProps) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Image.configure({
        allowBase64: true,
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
      }),
      Color,
      TextStyle,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableCell,
    ],
    content: value || `<p>${placeholder || "Start writing..."}</p>`,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  const setLink = useCallback(() => {
    if (!editor) return;
    const url = window.prompt("Enter URL:");
    if (url) {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    }
  }, [editor]);

  const insertImage = useCallback(() => {
    if (!editor) return;
    const url = window.prompt("Enter image URL:");
    if (url) {
      editor.chain().focus().setImage({ src: url, alt: "Image" }).run();
    }
  }, [editor]);

  const insertTable = useCallback(() => {
    if (!editor) return;
    editor
      .chain()
      .focus()
      .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
      .run();
  }, [editor]);

  if (!editor)
    return (
      <div className="p-4 text-center text-gray-500">Loading editor...</div>
    );

  return (
    <div className="border border-midnight/10 dark:border-white/10 rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-1 bg-ivory dark:bg-[#12221b] p-3 border-b border-midnight/10 dark:border-white/10">
        {/* Text Formatting */}
        <ToolbarButton
          icon={<Bold size={16} />}
          isActive={editor.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
          title="Bold"
        />
        <ToolbarButton
          icon={<Italic size={16} />}
          isActive={editor.isActive("italic")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          title="Italic"
        />
        <ToolbarButton
          icon={<Underline size={16} />}
          isActive={editor.isActive("underline")}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          title="Underline"
        />
        <ToolbarButton
          icon={<Strikethrough size={16} />}
          isActive={editor.isActive("strike")}
          onClick={() => editor.chain().focus().toggleStrike().run()}
          title="Strikethrough"
        />

        <div className="w-px bg-midnight/10 dark:bg-white/10" />

        {/* Headings */}
        <ToolbarButton
          icon={<Heading1 size={16} />}
          isActive={editor.isActive("heading", { level: 1 })}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          title="Heading 1"
        />
        <ToolbarButton
          icon={<Heading2 size={16} />}
          isActive={editor.isActive("heading", { level: 2 })}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          title="Heading 2"
        />
        <ToolbarButton
          icon={<Heading3 size={16} />}
          isActive={editor.isActive("heading", { level: 3 })}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          title="Heading 3"
        />

        <div className="w-px bg-midnight/10 dark:bg-white/10" />

        {/* Lists & Quotes */}
        <ToolbarButton
          icon={<List size={16} />}
          isActive={editor.isActive("bulletList")}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          title="Bullet List"
        />
        <ToolbarButton
          icon={<ListOrdered size={16} />}
          isActive={editor.isActive("orderedList")}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          title="Ordered List"
        />
        <ToolbarButton
          icon={<Quote size={16} />}
          isActive={editor.isActive("blockquote")}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          title="Blockquote"
        />
        <ToolbarButton
          icon={<Code size={16} />}
          isActive={editor.isActive("codeBlock")}
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          title="Code Block"
        />

        <div className="w-px bg-midnight/10 dark:bg-white/10" />

        {/* Media & Table */}
        <ToolbarButton
          icon={<LinkIcon size={16} />}
          isActive={editor.isActive("link")}
          onClick={setLink}
          title="Add Link"
        />
        <ToolbarButton
          icon={<ImageIcon size={16} />}
          onClick={insertImage}
          title="Insert Image"
        />
        <ToolbarButton
          icon={<TableIcon size={16} />}
          onClick={insertTable}
          title="Insert Table"
        />

        <div className="w-px bg-midnight/10 dark:bg-white/10" />

        {/* Undo/Redo */}
        <ToolbarButton
          icon="↶"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          title="Undo"
        />
        <ToolbarButton
          icon="↷"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          title="Redo"
        />
      </div>

      {/* Editor */}
      <div className="prose prose-lg dark:prose-invert max-w-none p-4 bg-white dark:bg-midnight min-h-96">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

interface ToolbarButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
  disabled?: boolean;
  title?: string;
}

function ToolbarButton({
  icon,
  onClick,
  isActive,
  disabled,
  title,
}: ToolbarButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`p-2 rounded transition-colors ${
        isActive
          ? "bg-gold text-midnight"
          : "hover:bg-midnight/10 dark:hover:bg-white/10 text-midnight dark:text-cream"
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {icon}
    </button>
  );
}
