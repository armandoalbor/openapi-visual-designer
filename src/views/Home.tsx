import { Box, Typography } from "@mui/material";
import reactLogo from "@/assets/react.svg";
import viteLogo from "@/assets/vite.svg";
import { MainLayout } from "@/layouts/MainLayout";

export const Home = () => {
  return (
    <MainLayout>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="98vh"
      >
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <Typography variant="h1" sx={{ py: 2, textAlign: "center" }}>
          OpenApi Visual Designer
        </Typography>
      </Box>
    </MainLayout>
  );
};
