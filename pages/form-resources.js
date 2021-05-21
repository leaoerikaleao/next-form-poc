import React from 'react';
import { Formik, Form, useField } from 'formik'
import * as Yup from 'yup'

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label 
                className="font-alegreya-sans tracking-widest 
                text-xl font-bold md:text-2xl block 
                text-gray-700 mb-2" 
                htmlFor={props.id || props.name}>{label}
            </label>
            <input 
                {...field} {...props} 
                className={
                    "text-input form-input font-alegreya-sans text-xl text-gray-700 px-4 py-3 rounded-lg " +
                    "w-full shadow appearance-none border leading-tight " +
                    "focus:outline-none focus:shadow-outline " +
                    (
                        meta.touched && meta.error ? 
                        'ring-red-700 focus:border-2 border-red-700 ' :
                        'focus:ring-indigo-500 focus:border-2 focus:border-indigo-500 ' 
                    )
                }
            />
            {meta.touched && meta.error ? (
                <div className="error py-2 font-alegreya-sans tracking-widest text-red-700">{meta.error}</div>
            ) : null}
        </>
    );
}

const MyTextArea = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label 
                className="font-alegreya-sans tracking-widest 
                text-xl font-bold md:text-2xl block 
                text-gray-700 mb-2" 
                htmlFor={props.id || props.name}>{label}
            </label>
            <textarea 
                {...field} {...props} 
                className={
                    "text-input form-input font-alegreya-sans text-xl text-gray-700 px-4 py-3 rounded-lg " +
                    "w-full shadow appearance-none border leading-tight " +
                    "focus:outline-none focus:shadow-outline " +
                    (
                        meta.touched && meta.error ? 
                        'ring-red-700 focus:border-2 border-red-700 ' :
                        'focus:ring-indigo-500 focus:border-2 focus:border-indigo-500 ' 
                    )
                }
            />
            {meta.touched && meta.error ? (
                <div className="error py-2 font-alegreya-sans tracking-widest text-red-700">{meta.error}</div>
            ) : null}
        </>
    );
}

const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <label 
                className="font-alegreya-sans tracking-widest 
                text-xl font-bold md:text-2xl block 
                text-gray-700 mb-2" 
                htmlFor={props.id || props.name}>{label}
            </label>
            <select 
                {...field} {...props} 
                className={
                    "font-alegreya-sans text-xl text-gray-700 px-4 py-3 rounded-lg " +
                    "w-full block shadow appearance-none border leading-tight bg-white " +
                    "focus:outline-none focus:shadow-outline " +
                    (
                        meta.touched && meta.error ? 
                        'ring-red-700 focus:border-2 focus:text-gray-700 border-red-700 text-red-700 ' :
                        'focus:ring-indigo-500 focus:border-2 focus:border-indigo-500 focus:text-gray-700 ' 
                    )
                }
            />
            {meta.touched && meta.error ? (
                <div className="error py-2 font-alegreya-sans tracking-widest text-red-700">{meta.error}</div>
            ) : null}
        </div>
    );
}

const FormResources = () => {
    return(
        <Formik
            initialValues={{ 
                title: '', 
                description: '',
                type: '',
                link: '',
                teacher: '',
            }}
            validationSchema={Yup.object({
                title: Yup.string()
                    .max(100, 'Máximo de 100 caracteres')
                    .required('Título é Obrigatório!'),
                description: Yup.string()
                    .max(200, 'Máximo de 200 caracteres')
                    .required('Descrição é Obrigatório!'),
                type: Yup.string()
                    .oneOf(['Video', 'PDF via Google Drive'],'Tipo Inválido!')
                    .required('Tipo de Recurso Inválido!'),
                link: Yup.string()
                    .max(500, 'Máximo de 500 caracteres')
                    .matches(/^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i, 'URL Inválida!')
                    .required('Link é Obrigatório!'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}

            >
            {formik => (
                <Form onSubmit={formik.handleSubmit}>
                    <div className="pb-8 mx-10">
                        <MyTextInput
                            label="Título"
                            name="title"
                            type="text"
                            placeholder="Insira aqui o título do recurso"
                        />  
                    </div>

                    <div className="pb-8 mx-10">
                        <MyTextArea
                            label="Descrição"
                            name="description"
                            type="text"
                            placeholder="Insira aqui a descrição do recurso"
                        />  
                    </div>

                    <div className="pb-8 mx-10">
                        <MySelect label="Tipo de Recurso" name="type">
                            <option value="">Selecione o tipo de recurso</option>
                            <option value="Video">Video</option>
                            <option value="PDF via Google Drive">PDF via Google Drive</option>
                        </MySelect>
                    </div>

                    <div className="pb-8 mx-10">
                        <MyTextInput
                            label="Link"
                            name="link"
                            type="text"
                            placeholder="Insira aqui o link do recurso"
                        />  
                    </div>

                    <div className="m-10">
                        <button type="submit" className="text-white bg-indigo-400 active:borde-none border-indigo-600 p-4 font-alegreya-sans text-xl border-b-4  transition duration-300 md:text-2xl rounded-lg w-full hover:bg-indigo-600 hover:border-indigo-400 shadow-lg focus:outline-none">
                            Cadastar
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    )}

export default FormResources 

