import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, TextField } from '@mui/material';
const RequestForm = ({onSubmit, success}) => {
  return <Formik
    initialValues={{ title: '', description: '' }}
    validationSchema={Yup.object({
      title: Yup.string()
        .max(50, 'Máximo 50 caracteres')
        .required('Required', 'Obligatorio'),
      description: Yup.string()
        .max(200, 'Must be 200 characters or less')
        .required('Required'),
      solicitante: Yup.string().max(100, 'Máximo 100 caracteres').required('Required'),
    })}
    onSubmit={onSubmit}>
        <Form>
            <Field name="title">
                {({ field, meta }) => (
                    <div>  
                        <TextField
                            label="Título"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            {...field}
                            error={meta.touched && Boolean(meta.error)}
                            helperText={meta.touched && meta.error ? meta.error : ''}
                        />
                    </div>
                )}
            </Field>
            <Field name="description">
                {({ field, meta }) => (
                    <div>
                        <TextField
                            label="Descripción"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            multiline
                            rows={4}
                            {...field}
                            error={meta.touched && Boolean(meta.error)}
                            helperText={meta.touched && meta.error ? meta.error : ''}
                        />
                    </div>
                )}
            </Field>
            <Field name="solicitante">
                {({ field, meta }) => (
                    <div>
                        <TextField
                            label="Solicitante"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            {...field}
                            error={meta.touched && Boolean(meta.error)}
                            helperText={meta.touched && meta.error ? meta.error : ''}
                        />
                    </div>
                )}
            </Field>
            <Button type="submit" variant="contained" color="primary">
                Enviar Solicitud
            </Button>
            {success && <div className="success-message">Solicitud enviada con éxito.</div>}
        </Form>
    </Formik>
};
export default RequestForm;