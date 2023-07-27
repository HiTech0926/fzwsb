import React from "react";
import { Box, Link, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box component={"footer"} textAlign={"center"} sx={{ margin: 1 }}>
            <Link
                href={"https://github.com/HiTech0926/fzwsb"}
                rel={"noopener"}
                underline={"none"}
                color={"inherit"}
            >
                <Box
                    component={"img"}
                    src={
                        "https://img.shields.io/github/stars/HiTech0926/fzwsb?style=social"
                    }
                    sx={{
                        height: 20,
                        width: 76,
                    }}
                    alt={"stars"}
                />
            </Link>
            <Typography variant={"body2"} component={"p"}>
                {"Copyright © 2023 "}
                <Link
                    href={"https://github.com/HiTech0926/fzwsb"}
                    underline={"none"}
                    rel={"self noopener"}
                    target={"_blank"}
                    fontWeight={"bold"}
                >
                    {"FZWSB Group"}
                </Link>
                {" All Right Reserved."}
            </Typography>
            <Typography variant={"body2"} component={"p"}>
                {"Code by "}
                <Link
                    href={"https://ahdark.com"}
                    underline={"none"}
                    rel={"author noopener"}
                    target={"_blank"}
                >
                    {"AHdark"}
                </Link>
                {"Website by "}
                <Link
                    href={"https://im.hitech0926.com"}
                    underline={"none"}
                    rel={"author noopener"}
                    target={"_blank"}
                >
                    {"HiTech0926"}
                </Link>
                {" and served on "}
                <Link
                    href={"https://www.cloudflare.com"}
                    underline={"none"}
                    rel={"sponsor noreferrer noopener"}
                    target={"_blank"}
                >
                    {"CloudFlare"}
                </Link>
                {"."}
            </Typography>
        </Box>
    );
}
