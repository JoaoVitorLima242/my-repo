import { ReactNode } from "react"
import { Wrapper } from "./styles"

type MyProps = {
    children: ReactNode
}

const Container = ({ children }: MyProps) => (
    <Wrapper>
        {children}
    </Wrapper>
)

export default Container