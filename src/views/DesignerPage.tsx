import { Box, Typography } from "@mui/material";
import { DesignerLayout } from "@/layouts";
import { SectionTabs } from "@/components/designer";

export const DesignerPage = () => {
  return (
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
  );
};
