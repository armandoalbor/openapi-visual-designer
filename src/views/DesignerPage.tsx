import { Box, Typography } from "@mui/material";
import { DesignerLayout } from "@/layouts";
import { MainSection, TabsSection } from "@/components/designer";

export const DesignerPage = () => {
  return (
    <DesignerLayout leftComponent={<TabsSection />}>
      <Box
        display="flex"
        height="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h1" textTransform="capitalize">
          <MainSection />
        </Typography>
      </Box>
    </DesignerLayout>
  );
};
