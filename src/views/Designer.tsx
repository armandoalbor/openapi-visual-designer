import { Box, Typography } from "@mui/material";
import { MainLayout, DesignerLayout } from "@/layouts";
import { SectionTabs } from "@/components/designer";

export const Designer = () => {
  return (
    <MainLayout>
      <DesignerLayout leftComponent={<SectionTabs />}>
        <Box
          display="flex"
          height="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h1" textTransform="capitalize">
            DesignerSection
          </Typography>
        </Box>
      </DesignerLayout>
    </MainLayout>
  );
};
