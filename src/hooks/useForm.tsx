import { useState } from "react"


export default function useForm(defaultValue: string | number) {

    const [value, setValue] = useState(defaultValue)

    const onChange = (newValue: string| number) => {
       setValue(newValue)
    }
    
    
    return {
        value,
        setValue,
        onChange
    
    }
}
