import React from "react";
import FullScreenSection from "./FullScreenSection";
import {
  Box,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  HStack,
} from "@chakra-ui/react";
import Card from "./Card";
import projects from "../projectsData";

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#415a77"
      isDarkBackground
      p={8}
      py={{ md: 20, lg: "120px" }}
      alignItems="flex-start"
      spacing={8}
      px={{ base: 8, md: 12, lg: 0 }}
      pt={{ lg: "80px" }}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Tabs isManual variant="enclosed">
        <TabList mx="16px">
          <Tab
            fontWeight="semibold"
            _selected={{ color: "white", bg: "#fca311" }}
          >
            Web (Front-end & Back-end)
          </Tab>

          <Tab
            fontWeight="semibold"
            _selected={{ color: "white", bg: "green.400" }}
          >
            Python
          </Tab>
          <Tab
            fontWeight="semibold"
            _selected={{ color: "white", bg: "#9c6644" }}
          >
            Java
          </Tab>
          <Tab
            fontWeight="semibold"
            _selected={{ color: "white", bg: "blue.400" }}
          >
            Flutter
          </Tab>
        </TabList>
        <TabPanels overflowY="auto" height="760px">
          <TabPanel>
            <Box
              display="grid"
              gridTemplateColumns={{
                base: "repeat(1,minmax(0,1fr))",
                md: "repeat(2,minmax(0,1fr))",
              }}
              gridGap={8}
              alignItems="start"
            >
              {projects.frontEnd.map((project) => (
                <Card
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  imageSrc={project.getImageSrc}
                  gitHubLink={project.github}
                  previewLink={project.livePreview}
                  techStack={project.techStack}
                />
              ))}
            </Box>
          </TabPanel>

          <TabPanel>
            <Box
              display="grid"
              gridTemplateColumns={{
                base: "repeat(1,minmax(0,1fr))",
                md: "repeat(2,minmax(0,1fr))",
              }}
              gridGap={8}
              alignItems="start"
            >
              {projects.python.map((project) => (
                <Card
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  imageSrc={project.getImageSrc}
                  gitHubLink={project.github}
                  previewLink={project.livePreview}
                  techStack={project.techStack}
                />
              ))}
            </Box>
          </TabPanel>
          <TabPanel>
            <Box
              display="grid"
              gridTemplateColumns={{
                base: "repeat(1,minmax(0,1fr))",
                md: "repeat(2,minmax(0,1fr))",
              }}
              gridGap={8}
              alignItems="start"
            >
              {projects.java.map((project) => (
                <Card
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  imageSrc={project.getImageSrc}
                  gitHubLink={project.github}
                  previewLink={project.livePreview}
                  techStack={project.techStack}
                />
              ))}
            </Box>
          </TabPanel>
          <TabPanel>
            <Box
              display="grid"
              gridTemplateColumns={{
                base: "repeat(1,minmax(0,1fr))",
                md: "repeat(2,minmax(0,1fr))",
              }}
              gridGap={8}
              alignItems="start"
            >
              {projects.flutter.map((project) => (
                <Card
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  imageSrc={project.getImageSrc}
                  gitHubLink={project.github}
                  previewLink={project.livePreview}
                  techStack={project.techStack}
                />
              ))}
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </FullScreenSection>
  );
};

export default ProjectsSection;
