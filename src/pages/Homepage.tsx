import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url('/bg-lab.jpg')`, // Make sure this is in /public or correct path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
        fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
      }}
    >
      {/* Dark overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box sx={{ zIndex: 2 }}>
        {/* Logo with bounce animation */}
        <motion.div
          initial={{ y: -30 }}
          animate={{ y: [-30, 0, -15, 0, -5, 0] }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Box sx={{ mb: 5 }}>
            <img
              src="/synapselogo.png" // <-- Make sure this file has no background
              alt="SynapseLab Logo"
              style={{
                width: 300,
                height: "auto",
                filter: "drop-shadow(0 0 6px rgba(255,255,255,0.4))", // Optional glow
              }}
            />
          </Box>
        </motion.div>

        {/* Coming Soon Title */}
        <Typography
          variant="h2"
          fontWeight={700}
          color="white"
          gutterBottom
          sx={{ fontSize: { xs: "2rem", sm: "2.8rem", md: "3.2rem" } }}
        >
          Coming Soon
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="h6"
          color="rgba(255,255,255,0.85)"
          maxWidth="640px"
          mx="auto"
          sx={{ fontSize: { xs: "1rem", sm: "1.125rem" }, lineHeight: 1.6 }}
        >
          SynapseLab India is almost here. We're bringing world-class molecular
          diagnostics and healthcare innovation — stay tuned.
        </Typography>

        {/* Footer */}
        <Typography
          variant="body2"
          mt={10}
          color="rgba(255,255,255,0.5)"
          sx={{ fontSize: "0.875rem" }}
        >
          © 2025 SynapseLab India
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;
