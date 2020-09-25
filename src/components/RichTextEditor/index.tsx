import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import SunEditor from 'suneditor-react';
import dompurify from 'dompurify';

import 'suneditor/dist/css/suneditor.min.css';

import sunEditorLangPtBr from '../../utils/sunEditorLangPtBr';

import { Container } from './styles';

function RichTextEditor() {

    const [getValue, setValue] = useState('');

    function onEditorChange(value: string){

        setValue(dompurify.sanitize(value, { 
            ADD_TAGS: ["iframe"], 
            ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling'] 
        }) )
    }

    return (
        <Container>
           
            <SunEditor
                lang={sunEditorLangPtBr}
                setDefaultStyle={`
                    width: 100%;
                    max-width: 800px;
                    height: 100%;
                    min-height: 500px;
                `}
                placeholder='Escreva aqui'
                onChange={onEditorChange}
                setOptions={{
                    imageWidth: '100%',
                    imageFileInput: false,
                    formats: ['h1', 'h2', 'p'],
                    buttonList: [
                        ['undo', 'redo'],
                        ['formatBlock', 'align', 'list'],
                        ['bold', 'underline', 'italic', 'strike', 'removeFormat'],
                        ['image', 'link', 'video'],
                    ],
                }}
            />
                
            <div 
                className='html-text'
                dangerouslySetInnerHTML={{ __html: getValue }} 
            />

        </Container>
    );
}

export default dynamic(Promise.resolve(RichTextEditor), { ssr: false });
