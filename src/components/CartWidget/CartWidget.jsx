import { Flex , Text } from "@chakra-ui/react"
/* Import del carrito */
import { CiShoppingCart } from "react-icons/ci";

const CartWidget = () => {
    return (
        <Flex alignItems={"center"} height={"100%"} justifyContent={"center"} width={100}>
            <CiShoppingCart size={30}/>
            <Text fontSize={"1.5rem"}>(0)</Text>
        </Flex>
    )
}

export default CartWidget;