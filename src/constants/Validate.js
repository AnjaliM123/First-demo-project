


export const required = value => (value ? undefined : 'Required')



export const validateEmail = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : null

const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : null
export const maxLength15 = maxLength(15)

const minLength = min => value =>
    value && value < min ? `Must be at least ${min}` : null

export const minLength6 = minLength(6)