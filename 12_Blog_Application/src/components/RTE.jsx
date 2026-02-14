import React, { useEffect } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Controller } from 'react-hook-form'
import './RTE.css'

export default function RTE({name, control, label, defaultValue=""}) {
    return (
        <div className='w-full'>
            {label && <label className="inline-block mb-1 pl-1">
                {label}
            </label>}
            <Controller
                name={name || "content"}
                control={control}
                render={({field: {onChange, value}}) => (
                    <TipTapEditor 
                        value={value || defaultValue}
                        onChange={onChange}
                    />
                )}
            />
        </div>
    )
}

function TipTapEditor({value, onChange}) {
    const editor = useEditor({
        extensions: [
            StarterKit,
        ],
        content: value || '',
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML())
        },
        editorProps: {
            attributes: {
                class: 'tiptap-editor'
            }
        }
    })

    useEffect(() => {
        if (editor && value && editor.getHTML() !== value) {
            editor.commands.setContent(value)
        }
    }, [value, editor])

    if (!editor) {
        return (
            <div className='tiptap-container'>
                <div className='tiptap-content'>Loading editor...</div>
            </div>
        )
    }

    return (
        <div className='tiptap-container'>
            <div className='tiptap-toolbar'>
                <button
                    type="button"
                    onMouseDown={(e) => {
                        e.preventDefault()
                        editor.chain().focus().toggleBold().run()
                    }}
                    disabled={!editor.can().chain().focus().toggleBold().run()}
                    className={editor.isActive('bold') ? 'active' : ''}
                >
                    <strong>B</strong>
                </button>
                <button
                    type="button"
                    onMouseDown={(e) => {
                        e.preventDefault()
                        editor.chain().focus().toggleItalic().run()
                    }}
                    disabled={!editor.can().chain().focus().toggleItalic().run()}
                    className={editor.isActive('italic') ? 'active' : ''}
                >
                    <em>I</em>
                </button>
                <button
                    type="button"
                    onMouseDown={(e) => {
                        e.preventDefault()
                        editor.chain().focus().toggleStrike().run()
                    }}
                    disabled={!editor.can().chain().focus().toggleStrike().run()}
                    className={editor.isActive('strike') ? 'active' : ''}
                >
                    <s>S</s>
                </button>
                <button
                    type="button"
                    onMouseDown={(e) => {
                        e.preventDefault()
                        editor.chain().focus().toggleHeading({level: 1}).run()
                    }}
                    className={editor.isActive('heading', {level: 1}) ? 'active' : ''}
                >
                    H1
                </button>
                <button
                    type="button"
                    onMouseDown={(e) => {
                        e.preventDefault()
                        editor.chain().focus().toggleHeading({level: 2}).run()
                    }}
                    className={editor.isActive('heading', {level: 2}) ? 'active' : ''}
                >
                    H2
                </button>
                <button
                    type="button"
                    onMouseDown={(e) => {
                        e.preventDefault()
                        editor.chain().focus().toggleHeading({level: 3}).run()
                    }}
                    className={editor.isActive('heading', {level: 3}) ? 'active' : ''}
                >
                    H3
                </button>
                <button
                    type="button"
                    onMouseDown={(e) => {
                        e.preventDefault()
                        editor.chain().focus().toggleBulletList().run()
                    }}
                    className={editor.isActive('bulletList') ? 'active' : ''}
                >
                    •
                </button>
                <button
                    type="button"
                    onMouseDown={(e) => {
                        e.preventDefault()
                        editor.chain().focus().toggleOrderedList().run()
                    }}
                    className={editor.isActive('orderedList') ? 'active' : ''}
                >
                    1.
                </button>
                <button
                    type="button"
                    onMouseDown={(e) => {
                        e.preventDefault()
                        editor.chain().focus().toggleBlockquote().run()
                    }}
                    className={editor.isActive('blockquote') ? 'active' : ''}
                >
                    "
                </button>
                <button
                    type="button"
                    onMouseDown={(e) => {
                        e.preventDefault()
                        editor.chain().focus().toggleCodeBlock().run()
                    }}
                    className={editor.isActive('codeBlock') ? 'active' : ''}
                >
                    &lt;/&gt;
                </button>
                <button
                    type="button"
                    onMouseDown={(e) => {
                        e.preventDefault()
                        editor.chain().focus().clearNodes().run()
                    }}
                >
                    Clear
                </button>
                <button
                    type="button"
                    onMouseDown={(e) => {
                        e.preventDefault()
                        editor.chain().focus().undo().run()
                    }}
                    disabled={!editor.can().chain().focus().undo().run()}
                >
                    ↶
                </button>
                <button
                    type="button"
                    onMouseDown={(e) => {
                        e.preventDefault()
                        editor.chain().focus().redo().run()
                    }}
                    disabled={!editor.can().chain().focus().redo().run()}
                >
                    ↷
                </button>
            </div>
            <EditorContent 
                editor={editor}
                className='tiptap-content'
            />
        </div>
    )
}







{/*  */}