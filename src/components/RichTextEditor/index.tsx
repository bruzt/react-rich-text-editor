import React, { useState } from 'react';
//import dynamic from 'next/dynamic';
import SunEditor from 'suneditor-react';

import 'suneditor/dist/css/suneditor.min.css';

import sunEditorLangPtBr from '../../utils/sunEditorLangPtBr';

import { Container } from './styles';

export default function RichTextEditor() {

    const [getValue, setValue] = useState('');

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
                onChange={setValue}
                setOptions={{
                    imageWidth: '100%',
                    /*paragraphStyles: [],*/
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

//export default dynamic(Promise.resolve(RichTextEditor), { ssr: false });
