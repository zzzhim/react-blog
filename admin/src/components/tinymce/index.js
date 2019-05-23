import React, { Component, Fragment } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { request } from '../../utils'

class Release extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleEditorChange = this.handleEditorChange.bind(this)
    }

    render() {
        const { initialValue } = this.props
        const that = this

        return (
            <Fragment>
                <input type="file" style={{ height: 0 }} ref={ input => that.input = input } />
                <Editor
                    ref={ editor => this.editor = editor }
                    apiKey='zg1d2xp43sktfw6i580bg4awi1cicuq462z75l45aiayhw8b'
                    init={{
                        language: 'zh_CN',
                        language_url: 'https://cdn.jsdelivr.net/npm/tinymce-lang/langs/zh_CN.js',
                        height: 800,
                        images_reuse_filename: true,
                        automatic_uploads: true,
                        images_upload_handler: function (blobInfo, success, failure) {
                            const formData = new FormData()

                            formData.append('file', blobInfo.blob())
                            request({
                                url: '/upload_image',
                                method: 'post',
                                data: formData,
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                }
                            }).then(res => {
                                const { status, data, message: messages } = res.data
                                if(status === 200) {
                                    success(data.url)
                                }else {
                                    failure(messages)
                                }
                            }).catch(err => {
                                failure('unknown mistake')
                                console.log(err)
                            })
                        },
                        media_live_embeds: true,
                        file_picker_types: 'media',
                        file_picker_callback: function(callback, value, meta) {
                            if(meta.filetype === 'media') {
                                that.input.click()

                                that.input.onchange = () => {
                                    const formData = new FormData()
                                    const file = that.input.files[0]
                                    formData.append('file', file)

                                    request({
                                        url: '/upload_media',
                                        method: 'post',
                                        data: formData,
                                        headers: {
                                            'Content-Type': 'multipart/form-data'
                                        },
                                        timeout: 10000000000
                                    }).then(res => {
                                        const { status, data } = res.data
                                        if(status === 200) {
                                            callback(data[0]);
                                        }else {
                                            callback('')
                                        }
                                    }).catch(err => {
                                        callback('')
                                        console.log(err)
                                    })
                                }
                            }
                        },
                        // video_template_callback: function(data) {
                        //     return `
                        //         <video width="${data.width}" hegiht="${data.height}" controls="controls">
                        //             <source src="${data.source1}"></source>
                        //         </video>
                        //     `
                        // }
                    }}
                    toolbar={
                        [
                            'fullscreen | preview | fullpage',
                            'undo redo | styleselect | bold italic | link image media | insertdatetime | charmap',
                            'alignleft aligncenter alignright',
                            "table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol",
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
                        'table',
                        'insertdatetime'
                    ]}
                    initialValue={ initialValue || '' }
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