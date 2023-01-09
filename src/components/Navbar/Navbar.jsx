import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import greydive from "../../assets/images/greydive.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{ backgroundColor: "transparent" }}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "transparent",
          position: "fixed",
          height: "4rem",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Link to="/">
            <img src={greydive} alt="Logo" />
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

/* 
    const svgVariants = {
    hidden: { rotate: -180 },
    visible: {
      rotate: 0,
      transition: { duration: 1 },
    },
  };

  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  <motion.svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="170.000000pt"
            height="37.000000pt"
            viewBox="0 0 170.000000 37.000000"
            preserveAspectRatio="xMidYMid meet"
            initial="hidden"
            animate="visible"
          >
            <g
              transform="translate(0.000000,37.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <motion.path
                d="M1020 310 c0 -53 -4 -58 -34 -35 -25 19 -49 19 -85 0 -58 -30 -68
-138 -16 -182 31 -27 81 -30 113 -7 20 14 22 14 22 -1 0 -11 7 -15 23 -13 21
3 22 6 25 146 l3 142 -26 0 c-23 0 -25 -3 -25 -50z m-25 -85 c28 -27 30 -42
13 -80 -25 -56 -108 -35 -108 28 0 35 15 61 40 70 26 9 30 8 55 -18z"
                variants={pathVariants}
              />
              <motion.path
                d="M1110 340 c0 -15 7 -20 25 -20 18 0 25 5 25 20 0 15 -7 20 -25 20
-18 0 -25 -5 -25 -20z"
                variants={pathVariants}
              />
              <motion.path
                d="M38 261 c-27 -24 -33 -36 -33 -71 0 -75 85 -125 143 -84 18 12 22 12
22 1 0 -7 -6 -21 -14 -32 -11 -15 -22 -17 -69 -12 -45 4 -57 2 -62 -10 -9 -26
11 -37 78 -41 56 -4 67 -1 93 21 29 25 29 27 32 141 l4 116 -30 0 c-17 0 -32
-5 -34 -11 -3 -9 -9 -9 -25 0 -36 19 -71 13 -105 -18z m116 -37 c22 -21 20
-47 -4 -69 -44 -40 -107 25 -69 71 15 19 54 18 73 -2z"
                variants={pathVariants}
              />
              <motion.path
                d="M270 180 l0 -110 30 0 c30 0 30 1 30 55 0 46 4 60 25 80 13 14 28 25
33 25 4 0 18 14 30 30 l23 30 -36 0 c-22 0 -43 -8 -55 -20 l-20 -20 0 20 c0
16 -7 20 -30 20 l-30 0 0 -110z"
                variants={pathVariants}
              />
              <motion.path
                d="M444 256 c-28 -28 -34 -42 -34 -76 0 -34 6 -48 34 -76 39 -39 86 -45
137 -18 29 15 30 16 14 34 -13 15 -22 17 -36 10 -35 -19 -89 -6 -89 22 0 4 34
8 76 8 l77 0 -6 38 c-8 50 -55 92 -103 92 -28 0 -44 -8 -70 -34z m106 -36 c10
-19 8 -20 -35 -20 -43 0 -45 1 -35 20 6 12 21 20 35 20 14 0 29 -8 35 -20z"
                variants={pathVariants}
              />
              <motion.path
                d="M630 281 c0 -5 18 -55 39 -110 21 -55 36 -102 33 -105 -3 -3 -13 -6
-23 -6 -25 0 -44 -36 -23 -44 35 -13 74 -6 88 17 16 24 96 230 96 247 0 6 -13
10 -28 10 -26 0 -30 -5 -52 -72 l-23 -73 -24 73 c-23 67 -27 72 -54 72 -16 0
-29 -4 -29 -9z"
                variants={pathVariants}
              />
              <motion.path
                d="M1461 276 c-33 -18 -50 -53 -51 -104 0 -62 40 -102 103 -102 28 0 53
7 67 18 20 16 21 19 6 31 -13 11 -20 11 -28 3 -25 -25 -98 -7 -98 23 0 12 16
15 76 15 l77 0 -6 38 c-12 71 -86 111 -146 78z m81 -43 c33 -29 22 -43 -32
-43 -54 0 -65 14 -34 44 20 21 43 20 66 -1z"
                variants={pathVariants}
              />
              <motion.path
                d="M1110 175 l0 -105 25 0 25 0 0 105 0 105 -25 0 -25 0 0 -105z"
                variants={pathVariants}
              />
              <motion.path
                d="M1235 178 c36 -89 45 -103 65 -103 20 0 29 13 62 94 21 52 38 98 38
103 0 4 -11 8 -23 8 -21 0 -27 -10 -48 -70 -13 -38 -26 -70 -29 -70 -3 0 -16
32 -29 70 -22 64 -27 70 -51 70 l-28 0 43 -102z"
                variants={pathVariants}
              />
              <motion.path
                d="M1640 100 c0 -27 3 -30 30 -30 27 0 30 3 30 30 0 27 -3 30 -30 30
-27 0 -30 -3 -30 -30z"
                variants={pathVariants}
              />
            </g>
          </motion.svg> */
