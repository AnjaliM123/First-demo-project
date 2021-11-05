import { Label, Input } from "reactstrap"

export const renderTextField = ({
    input,
    label,
    type,
    placeholder,
    meta: { touched, error, warning },
    custom,
}) => (
    <div>
        <Label>{label}</Label>
        <div>
            <Input {...input} placeholder={placeholder} type={type} />
            {touched &&
                ((error && <span className="error">{error}</span>) ||
                    (warning && <span>{warning}</span>))}
        </div>
    </div>
)