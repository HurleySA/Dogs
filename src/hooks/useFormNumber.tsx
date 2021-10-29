import { useState } from "react"


export default function useFormNumber() {

    const [value, setValue] = useState(0)

    const onChange = (newValue: number) => {
       setValue(newValue)
    }
    
    
    return {
        value,
        setValue,
        onChange
    
    }
}
