import React from 'react';
import { Formik, Form, useField } from 'formik'
import * as Yup from 'yup'
import ErrorMessage from '../components/ErrorMessage'

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
                types: '',
                link: '',
                teacher: '',
                subjects: '',
                grades: '',
                institutions: '',
                syllabus: '',
            }}
            validationSchema={Yup.object({
                title: Yup.string()
                    .max(100, 'M??ximo de 100 caracteres')
                    .required('T??tulo ?? Obrigat??rio!'),
                description: Yup.string()
                    .max(200, 'M??ximo de 200 caracteres')
                    .required('Descri????o ?? Obrigat??rio!'),
                types: Yup.string()
                    .oneOf(['Video', 'PDF via Google Drive'],'Tipo Inv??lido!')
                    .required('Tipo de Recurso Inv??lido!'),
                link: Yup.string()
                    .max(500, 'M??ximo de 500 caracteres')
                    .matches(/^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i, 'URL Inv??lida!')
                    .required('Link ?? Obrigat??rio!'),
                teacher: Yup.string()
                    .max(100, 'M??ximo de 100 caracteres')
                    .required('Professora/o ?? Obrigat??rio!'),
                subjects: Yup.string()
                    .oneOf(['L??ngua Portuguesa', 'Matem??tica'],'Disciplina Inv??lida!')
                    .required('Disciplina Inv??lida!'),
                grades: Yup.string()
                    .oneOf(['1?? Ano', '2?? Ano', '3?? Ano', '4?? Ano', '5?? Ano'],'S??rie Inv??lida!')
                    .required('S??rie Inv??lida!'),
                institutions: Yup.string()
                    .oneOf(['EM S??o Jos??', 'EM S??o Pedro'],'Unidade Inv??lida!')
                    .required('Unidade Inv??lida!'),
                syllabus: Yup.string()
                    .max(150, 'M??ximo de 150 caracteres')
                    .required('Conte??do ?? Obrigat??rio!'),
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
                            label="T??tulo"
                            name="title"
                            type="text"
                            placeholder="Insira o t??tulo do recurso"
                        />  
                    </div>

                    <div className="pb-8 mx-10">
                        <MyTextArea
                            label="Descri????o"
                            name="description"
                            type="text"
                            placeholder="Insira a descri????o do recurso"
                        />  
                    </div>

                    <div className="pb-8 mx-10">
                        <MySelect label="Tipo de Recurso" name="types">
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
                            placeholder="Insira o link do recurso"
                        />  
                    </div>

                    <div className="pb-8 mx-10">
                        <MyTextInput
                            label="Professora/o"
                            name="teacher"
                            type="text"
                            placeholder="Insira o nome da professora respons??vel pelo recurso"
                        />  
                    </div>

                    <div className="pb-8 mx-10">
                        <MySelect label="Unidade" name="institutions">
                            <option value="">Selecione o tipo de recurso</option>
                            <option value="EM S??o Jos??">EM S??o Jos??</option>
                            <option value="EM S??o Pedro">EM S??o Pedro</option>
                        </MySelect>
                    </div>

                    <div className="pb-8 mx-10">
                        <MySelect label="S??rie" name="grades">
                            <option value="">Selecione a s??rie</option>
                            <option value="1?? Ano">1?? Ano</option>
                            <option value="2?? Ano">2?? Ano</option>
                            <option value="3?? Ano">3?? Ano</option>
                            <option value="4?? Ano">4?? Ano</option>
                            <option value="5?? Ano">5?? Ano</option>
                        </MySelect>
                    </div>

                    <div className="pb-8 mx-10">
                        <MySelect label="Disciplina" name="subjects">
                            <option value="">Selecione a disciplina</option>
                            <option value="L??ngua Portuguesa">L??ngua Portuguesa</option>
                            <option value="Matem??tica">Matem??tica</option>
                        </MySelect>
                    </div>

                    <div className="pb-8 mx-10">
                        <MyTextInput
                            label="Conte??do"
                            name="syllabus"
                            type="text"
                            placeholder="Insira o conte??do do recurso"
                        />  
                    </div>

                    <div className="m-10">
                        <button type="submit" className="text-white bg-indigo-400 active:borde-none border-indigo-600 p-4 font-alegreya-sans text-xl border-b-4  transition ease-in-out duration-700  md:text-2xl rounded-lg w-full hover:bg-indigo-600 hover:border-indigo-400 shadow-lg focus:outline-none">
                            Cadastar
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    )}

export default FormResources 

