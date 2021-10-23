import { useState } from "react"


export default function useForm() {

    const [value, setValue] = useState('')

    const onChange = (newValue: string) => {
       setValue(newValue)
    }
    
    
    return {
        value,
        setValue,
        onChange
    
    }
}
