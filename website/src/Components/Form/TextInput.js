import { useField } from "formik"
import tw, {styled} from "twin.macro";

const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    return(
        <FormText>
            <label className="label">{label}</label>
            <input {...field}/>
            {meta.touched && meta.error ? <div>{meta.error}</div> : null}
            <br />
        </FormText>
    );
}

const FormText = styled.div`
    ${tw`font-canterbury text-lg`}

    label {
        ${tw`px-5 float-left`}
    }
    input {
        ${tw`float-right`}
    }

    div {
        ${tw`text-red-500 font-bold`}
    }
`

export default TextInput