import React, { Component, Fragment } from 'react'
import { Editor } from '@tinymce/tinymce-react'

class Release extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleEditorChange = this.handleEditorChange.bind(this)
    }

    render() {
        return (
            <Fragment>
                    <Editor
                        apiKey='zg1d2xp43sktfw6i580bg4awi1cicuq462z75l45aiayhw8b'
                        init={{
                            language: 'zh_CN',
                            language_url: 'https://cdn.jsdelivr.net/npm/tinymce-lang/langs/zh_CN.js',
                            height: 700,
                            media_live_embeds: true,
                            images_upload_url: 'http://localhost:8000/api/admin/uploadImage',
                            automatic_uploads: false,
                        }}
                        toolbar={
                            [
                                'fullscreen | preview | fullpage',
                                'undo redo | styleselect | bold italic | link image | media | charmap',
                                'alignleft aligncenter alignright',
                                'wordcount',
                            ]
                        }
                        plugins={[
                            'link',
                            'image code',
                            'media',
                            'fullscreen',
                            'charmap',
                            'fullpage',
                            'preview',
                            'wordcount',
                        ]}
                        onEditorChange={this.handleEditorChange}
                    />
            </Fragment>
        )
    }

    handleEditorChange(content) {
        this.props.handleChange(content)
    }
}

export default Release