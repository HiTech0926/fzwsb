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
                    content={"樊郑伟小朋友傻逼到超乎你的想象"}
                />
                <link rel="prefetch" href="//stat.ahdark.com" />
            </Head>

            <CssBaseline />
            <NavBar />
            <Container maxWidth={"md"}>
                <Box className={classes.main}>
                    {/*
                     <img
                     src={"https://q3.a1pic.cn/2022/02/08/M0wM.png"}
                     alt="樊郑伟"
                     className={classes.avatar}
                     />
                     */}
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
                        {"欢迎评论樊郑伟"}
                    </Typography>
                    <Typography
                        variant={"body1"}
                        component={"p"}
                        align={"center"}
                    >
                        {"侧边栏可通过左上角按钮控制开合    "}
                    </Typography>
                    {/*
					 <Typography
					 variant={"body1"}
					 component={"p"}
					 align={"center"}
					 fontWeight={"bold"}
					 >
					 {"千万不要相信我，我"}
					 <span style={{ color: "#FF0000" }}>
					 {"每次帮助你都要帮你加上后门"}
					 </span>
					 {"，没办法，这就是锻炼自己。"}
					 </Typography>
					 <Typography
					 variant={"body1"}
					 component={"p"}
					 align={"center"}
					 >
					 {
					 "I'm mentally retarded and I like sucking other people's dicks."
					 }
					 </Typography>
					 */}
                </Box>
                <Footer />
            </Container>
        </>
    );
}
