import useForm from "../../../hooks/useForm";
import { ContainerPost } from "./style";

export  function UserPost() {
    const username = useForm();
    return (
        <ContainerPost>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae aperiam quod nobis, voluptas laudantium quidem esse id alias labore voluptatibus ab facere, modi possimus! Architecto hic sed similique pariatur quos.
        </ContainerPost>
    )
}
