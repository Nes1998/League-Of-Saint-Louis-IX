import { Formik, Form, ErrorMessage } from 'formik'
import tw, {styled} from 'twin.macro'
import TextInput from '../Components/Form/TextInput'
import Header from '../Components/Header/Header'

const validate = (values) => {
  const errors = {}

  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length < 5) {
    errors.name = 'Name is too short'
  }

  if (!values.email) {
    errors.lastname = 'Required'
  } else if (values.lastname.length < 10) {
    errors.lastname = 'Email is too short'
  }

  if (!values.phoneNumber) {
    errors.radio = 'Required'
  }

  return errors
}

function Login() {

  return (
    <FormInput>
      <Header />
      <Formik initialValues={{ name: '', email: '', phoneNumber: '', address: '', occupation: '' }}
        validate={validate}
        onSubmit={values => console.log(values)}
        enableReinitialize={true}
      >
        <Form>
          <TextInput name="name" label="Name" />
          <br />
          <TextInput name="email" label="Email" />
          <br />
          <TextInput name="phoneNumber" label="Phone Number" />
          <br />
          <TextInput name="address" label="Address (optional)" />
          <br />
          <TextInput name="occupation" label="Occupation (optional)" />
          <br />
        </Form>

        
      </Formik>
    </FormInput>
  );
}


const FormInput = styled.div`
  ${tw`h-screen w-full bg-indigo-100 flex-col`}
`
export default Login;