import {
  Box,
  Container,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import img from "../image-1.svg";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) history.push("/chats");
  }, [history]);

  return (
    <Flex>
      <Box >
        <img
        className="img1"
          src={img}
          alt="illustration"
        />
      </Box>
      <Container className="box1"
        maxW="xl" centerContent>
        <Box
          d="flex"
          pos="relative"
          justifyContent="center"
          p={-2}
          bg="#1c1c1c"
          w="100%"
          m="20px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
        >
          <Text fontSize="4xl" fontFamily="Work sans" color="#45f3ff">
            Jet-Set-Sms
          </Text>
        </Box>
        <Box className="box2" bg="#1c1c1c" w="100%" p={4} borderRadius="lg" borderWidth="1px">
          <Tabs isFitted variant="soft-rounded">
            <TabList mb="1em">
              <Tab color="#45f3ff">Login</Tab>
              <Tab color="#45f3ff">Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </Flex>
  );
}

export default Homepage;
