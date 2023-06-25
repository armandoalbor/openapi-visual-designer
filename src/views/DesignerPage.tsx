import { Box } from "@mui/material";
import { DesignerLayout } from "@/layouts";
import { MainSection, TabsSection } from "@/components/designer";
import { PageTitle } from "@/components";

export const DesignerPage = () => {
  return (
    <DesignerLayout leftComponent={<TabsSection />}>
      <Box display="flex" height="100%" flexDirection="column">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width={1}
          height={48}
          px={4}
        >
          <PageTitle />
        </Box>

        <Box
          width={1}
          height={"100%"}
          justifyContent="center"
          alignItems="center"
          px={4}
          py={2}
          sx={{
            mt: "2px",
            backgroundColor: "common.mainContainerBg",
            borderTopLeftRadius: 12,
          }}
        >
          <MainSection />
        </Box>
      </Box>
    </DesignerLayout>
  );
};
