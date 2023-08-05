import React, { useEffect, useRef } from 'react'
import JoditEditor from 'jodit-react';
function TextEditor({ initialValue, settextValue }) {
    const editor = useRef(null)
    useEffect(() => {
      if (editor.current) {
        editor.current.value = initialValue;
      }
    }, [initialValue]);
  return (
    <div>
      <JoditEditor value={initialValue} ref={editor} onChange={(content)=>settextValue(content)}/>
    </div>
  )
}

export default TextEditor