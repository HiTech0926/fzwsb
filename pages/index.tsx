import Head from "next/head";
import React, { useEffect } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Box, Container, CssBaseline, Theme, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import logoImage from "../images/logo.png";
import { useAppDispatch } from "../store/hooks";
import { setTitle } from "../store/view";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        main: {
            // height: "100%",
            minHeight: "calc(100vh - 24px)",
            marginBottom: theme.spacing(-8),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            "& >*": {
                marginTop: theme.spacing(1),
                fontFamily: '"Roboto", "Noto Sans SC", sans-serif',
            },
        },
        title: {
            marginTop: theme.spacing(4),
        },
        avatar: {
            borderRadius: "50%",
            [theme.breakpoints.down("md")]: {
                width: 160,
                height: 160,
            },
            width: 280,
            height: 280,
        },
    })
);

export default function Home() {
    const classes = useStyles();

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setTitle("Home"));
    }, [dispatch]);

    return (
        <>
            <Head>
                <meta
                    name={"description"}
                    content={"Fan Zhengwei, little friend, is so foolish that it exceeds your imagination"}
                />
                <link rel="prefetch" href="//stat.ahdark.com" />
            </Head>

            <CssBaseline />
            <NavBar />
            <Container maxWidth={"md"}>
                <Box className={classes.main}>
			<Box
                        component={"img"}
                        src={logoImage.src}
                        className={classes.avatar}
                        alt="Logo"
                    />

                    <Typography
                        variant={"h3"}
                        component={"h1"}
                        className={classes.title}
                        align={"center"}
                    >
                        {"Fan Zhengwei's personal homepage"}
                    </Typography>
                    <Typography
                        variant={"body1"}
                        component={"p"}
                        align={"center"}
                    >
                        {"The sidebar can be opened and closed through the upper left corner button"}
                    </Typography>
					 <Typography
					 variant={"body1"}
					 component={"p"}
					 align={"center"}
					 fontWeight={"bold"}
					 >
					 {"Don't believe me,"}
					 <span style={{ color: "#FF0000" }}>
					 {"Every time I help you, I have to add a back door for you"}
					 </span>
					 {"There's no way, this is to exercise oneself."}
					 </Typography>
					 <Typography
					 variant={"body1"}
					 component={"p"}
					 align={"center"}
					 >
					 </Typography>
                </Box>
                <Footer />
            </Container>
        </>
    );
}
