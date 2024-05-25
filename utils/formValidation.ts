export const getErrors = (validate: any) : Array<string> => {
    const errors: Array<string> = []
    if(validate && typeof validate == "object" && validate.hasOwnProperty('$errors') && Array.isArray(validate.$errors)) {
        validate.$errors.map((item: any) => {
            errors.push(item.$message)
        })
    }

    return errors
}