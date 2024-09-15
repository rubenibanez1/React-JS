import { Flex , Text } from "@chakra-ui/react"
/* Import del carrito */
import { CiShoppingCart } from "react-icons/ci";

export const CartWidget = () => {
    return (
        <Flex alignItems={"center"} height={"100%"} justifyContent={"space-between"} width={"50px"}>
            <CiShoppingCart size={30}/>
            <Text fontSize={"1.5rem"}>(0)</Text>
        </Flex>
    )
}
