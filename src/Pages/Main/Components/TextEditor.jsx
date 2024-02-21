import React from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import styled from "styled-components";

function TextEditor(){

  const [value, setValue] = React.useState(''); 

   // Function to handle inserting a link with custom behavior
  const handleInsertLink = () => {
    const url = prompt("Enter the URL");

    // Perform custom logic based on the URL (open local file, etc.)
    if (url) {
      const link = `<a href="${url}" target="_blank">${url}</a>`;
      setValue(value + link);
    }
  };
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image'],
      ['clean'],
      [{ 'customLink': handleInsertLink }],
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
    'link', 'image',
  ];

  

  const handleChange = (content) => {
    setValue(content);
    console.log(content);
  };

  return (
    <EditorContainer>
      <ReactQuill
        style={{ border: 'none', height: '100%' }}
        value={value}
        modules={modules}
        formats={formats}
        onChange={handleChange}
        placeholder="Type here.."
      />
    </EditorContainer>
  );
}

const EditorContainer = styled.div`
  height: 500px; /* Set the desired height */
`;

export default TextEditor;
