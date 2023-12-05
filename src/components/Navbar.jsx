import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Box, styled} from "@mui/system";
import { DarkBackgroundColor, DarkborderColor, FontWhiteColor, DarkButtonColor, ButtonBorderColor } from "../settings/color"; 
import { Link } from "react-router-dom";


const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const StyledAppBar = styled(AppBar)({
  backgroundColor: DarkBackgroundColor,
  borderBottom: `1px solid ${DarkborderColor}`,
  padding: '0.5rem 0',
});

const StyledButton = styled(Button)({
  color: '#F3F0E9',
  backgroundColor: DarkButtonColor,
  fontSize: '1.3rem',
  padding: '0.5rem 1.5rem',
  border: `1px solid ${ButtonBorderColor}`,
  borderRadius: '15px',
  margin: '0 1rem',
});

const StyledTypography = styled(Typography)({
  color: FontWhiteColor,
  fontWeight: 600,
  letterSpacing: '0.2rem',
  fontSize: '1.5rem',
});

const ToolContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;


const Navbar = ({ name }) => {
  console.log(name)
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <Link to="/">
          <StyledTypography variant="h6">
              易讀圖片製作
          </StyledTypography>
        </Link>
        <ToolContainer>
          <Link to="/create">
              <StyledButton color="inherit">
                  製作
              </StyledButton>
          </Link>
          <Link to="/login">
              <StyledButton color="inherit">
                  登入
              </StyledButton>
          </Link>
        </ToolContainer>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navbar;
