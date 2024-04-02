import React from "react";
import { Box, Heading, Text, Button, Stack, Image, Flex, Icon } from "@chakra-ui/react";
import { FaCheck, FaRocket, FaUsers, FaChartLine } from "react-icons/fa";

const Feature = ({ title, text, icon }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
      <Flex align="center" mb={4}>
        <Icon as={icon} mr={4} w={8} h={8} />
        <Heading fontSize="xl">{title}</Heading>
      </Flex>
      <Text mt={4}>{text}</Text>
    </Box>
  );
};

const Index = () => {
  return (
    <Box>
      <Box bg="purple.600" color="white" py={20}>
        <Box maxW="6xl" mx="auto" px={4}>
          <Heading as="h1" size="2xl" mb={4}>
            Supercharge Your Business
          </Heading>
          <Text fontSize="xl" mb={8}>
            Our all-in-one SaaS platform empowers your team to achieve more.
          </Text>
          <Button size="lg" colorScheme="white" bg="purple.500" _hover={{ bg: "purple.700" }}>
            Get Started
          </Button>
        </Box>
      </Box>

      <Box maxW="6xl" mx="auto" mt={20} px={4}>
        <Flex mb={20} align="center">
          <Box mr={10}>
            <Heading as="h2" size="xl" mb={4}>
              Streamline Your Workflow
            </Heading>
            <Text fontSize="lg">Efficiently manage projects, tasks, and communication in one centralized hub. Our intuitive interface and powerful features make collaboration a breeze.</Text>
          </Box>
          <Image src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3MTIwMTk1NjJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Collaboration" />
        </Flex>

        <Heading textAlign="center" as="h2" size="xl" mb={10}>
          Key Features
        </Heading>
        <Stack spacing={8} direction={["column", "row"]}>
          <Feature icon={FaRocket} title="Fast Setup" text="Get up and running in minutes. Our onboarding process is quick and painless." />
          <Feature icon={FaUsers} title="Team Collaboration" text="Foster teamwork with real-time collaboration tools and seamless file sharing." />
          <Feature icon={FaChartLine} title="Insightful Analytics" text="Gain valuable insights into your team's performance with detailed analytics and reporting." />
        </Stack>

        <Box mt={20} bg="gray.100" py={20}>
          <Box maxW="6xl" mx="auto" px={4} textAlign="center">
            <Heading as="h2" size="xl" mb={4}>
              Ready to Simplify Your Workflow?
            </Heading>
            <Text fontSize="lg" mb={8}>
              Join the thousands of businesses who trust our platform to drive their success.
            </Text>
            <Button size="lg" colorScheme="purple">
              Start Free Trial
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
