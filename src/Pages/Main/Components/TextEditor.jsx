import React from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import styled from "styled-components";

function TextEditor(){

   const[value,setValue]=React.useState(''); 



   const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
    'link', 'image',
  ];

  const handleChange = (content) => {
    
    console.log(content);
  };

    

    return(
    <EditorContainer>
      <ReactQuill
        style={{border: 'none', height: '100%'}}
        value={value}
        modules={modules}
        formats={formats}
        onChange={handleChange}
        placeholder="Type here.."
      />

    </EditorContainer>
  
    )
}


const EditorContainer = styled.div`
  
`;
export default TextEditor
