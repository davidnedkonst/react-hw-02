import { ErrorMessage } from "formik";
import ErrorText from "../../ErrorText";

const FormError = ({ name }) => {
    return (
        <ErrorMessage name={name}>
            {msg => (<ErrorText>{msg}</ErrorText>)}
        </ErrorMessage>
    );
};

export default FormError;