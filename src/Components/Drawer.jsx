import { HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { RxCross1 } from "react-icons/rx";
const Drawer = ({ Btn }) => {
  const NavLinks = [
    {
      text: "About us",
      id: 0,
    },
    {
      text: "Services",
      id: 1,
    },
    {
      text: "Contact",
      id: 2,
    },
  ];
  return (
    <div>
      <HStack>
        <Icon onClick={Btn} as={RxCross1} ml={"89%"} fontSize={"25px"} mt={6} />
        <VStack className="drawer">
          {NavLinks.map((item) => {
            return (
              <div key={item.id}>
                <Text
                  fontSize={"30px"}
                  fontWeight={500}
                  color={"black"}
                  width={"8rem"}
                  onClick={Btn}
                >
                  {item.text}
                </Text>
              </div>
            );
          })}
        </VStack>
      </HStack>
    </div>
  );
};

export default Drawer;
