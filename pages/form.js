import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup'

const Form = () => {
    return(
        <Formik
            initialValues={{ title: ''}}
            validationSchema={Yup.object({
            title: Yup.string()
                .max(15, 'No mínimo 15 caracteres')
                .required('Título Obrigatório'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}

            >
            {formik => (
                <form onSubmit={formik.handleSubmit}>
                    <div className="pb-8 mx-10">
                        <label  htmlFor="title" className="font-alegreya-sans text-xl font-bold md:text-2xl block text-gray-700 mb-2">Título</label>
                        <input
                            id="title"
                            type="text"
                            className="form-input px-4 py-3 rounded-lg w-full text-xl shadow appearance-none border-2 text-gray-700 leading-tight focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none focus:shadow-outline"
                            {...formik.getFieldProps('title')}
                        />
                        {formik.touched.title && formik.errors.title ? (
                            <div>{formik.errors.title}</div>
                        ) : null}
                    </div>    

                    <div className="m-10">
                        <button className="text-white bg-indigo-400 active:borde-none border-indigo-600 p-4 font-alegreya-sans text-xl border-b-4  transition duration-300 md:text-2xl rounded-lg w-full hover:bg-indigo-600 hover:border-indigo-400 shadow-lg focus:outline-none">
                            Cadastar
                        </button>
                    </div>
                </form>
            )}
        </Formik>
    )}

export default Form

