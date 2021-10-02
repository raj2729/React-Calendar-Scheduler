import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import cover from "../assets/cover.jpg";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  allInstructorCoursesAction,
  allUserCoursesAction,
  backendCourseListAction,
  databaseCourseListAction,
  designingCourseListAction,
  frontendCourseListAction,
  fullstackCourseListAction,
  otherCourseListAction,
} from "../actions/courseActions";
import { isUserEnrolledReset } from "../actions/userActions";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: "#FEFFFF",
    padding: theme.spacing(10, 0, 4),
  },
  header: {
    height: "85vh",
    backgroundSize: "cover",
    backgroundPosition: "65% 50%",
    backgroundImage: `url(${cover})`,
  },
  heroText: {
    margin: "0 10% 0 10%",
    color: "black",
  },
  cardGrid: {
    backgroundColor: "#FEFFFF",
    paddingBottom: theme.spacing(8),
  },
  heading: {
    width: "100%",
    fontSize: 30,
    fontWeight: "500",
    textDecoration: "underline",
  },
  card: {
    backgroundColor: "white",
    height: "100%",
    boxShadow: "5px 5px 5px 5px lightgrey",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    margin: "2%",
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
}));

function Home({ history }) {
  const classes = useStyles();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const frontendCourses = useSelector((state) => state.frontendCourses);
  const { frontendCourseList } = frontendCourses;
  const backendCourses = useSelector((state) => state.backendCourses);
  const { backendCourseList } = backendCourses;
  const designingCourses = useSelector((state) => state.designingCourses);
  const { designingCourseList } = designingCourses;
  const databaseCourses = useSelector((state) => state.databaseCourses);
  const { databaseCourseList } = databaseCourses;
  const fullstackCourses = useSelector((state) => state.fullstackCourses);
  const { fullstackCourseList } = fullstackCourses;
  const otherCourses = useSelector((state) => state.otherCourses);
  const { otherCourseList } = otherCourses;

  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) dispatch(allUserCoursesAction(userInfo.data._id));
    dispatch(isUserEnrolledReset());
    if (userInfo) dispatch(allInstructorCoursesAction(userInfo.data._id));
    dispatch(frontendCourseListAction());
    dispatch(backendCourseListAction());
    dispatch(designingCourseListAction());
    dispatch(databaseCourseListAction());
    dispatch(fullstackCourseListAction());
    dispatch(otherCourseListAction());
  }, [dispatch, history]);

  let courses = [
    { title: "Frontend Courses", data: frontendCourseList },
    { title: "Backend Courses", data: backendCourseList },
    { title: "Designing Courses", data: designingCourseList },
    { title: "Database Courses", data: databaseCourseList },
    { title: "Fullstack Courses", data: fullstackCourseList },
    { title: "Other Courses", data: otherCourseList },
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="xl">
            <Grid container alignItems="center" className={classes.header}>
              <Grid item className={classes.heroText}>
                <Typography variant="h4" gutterBottom>
                  Learn HTML , CSS , Web Apps & More
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Learn How To Build Websites & Apps Write A Code Or Start A
                  Business
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </div>
        <Container className={classes.cardGrid}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  // image={feature1}
                  // image="https://jana-sa.com/image/about-us/e762bf4b8cbc5ee9e70e7e087f99e5c3.gif"
                  image="https://cdn.dribbble.com/users/2514124/screenshots/5439070/girl_3.gif"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h" component="h2">
                    Life Time Access
                  </Typography>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  // image={feature2}
                  image="https://i.pinimg.com/originals/16/9c/11/169c11293f5c08a325ee1bbc8a0d4cb8.gif"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h" component="h2">
                    Low Cost
                  </Typography>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  // image={feature3}
                  // image="https://mintbook.com/assetsNew/img/university.gif"
                  image="https://www.excelsisdeo.com/images/AlphaTestersAnimation_60.gif"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h" component="h2">
                    Learning at your Finger Tips
                  </Typography>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
        {/* Fetching courses */}
        <Container className={classes.cardGrid} maxWidth="xl">
          {courses.map((course) => (
            <div>
              <br />
              <Typography className={classes.heading} gutterBottom>
                {course.title}
              </Typography>
              <br />
              <Grid container spacing={8}>
                {course.data.map((particularCourse, index) => (
                  <Grid item key={index} xs={12} sm={6} md={3}>
                    <Link
                      to={`/course/${particularCourse._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Card className={classes.card}>
                        <CardMedia
                          className={classes.cardMedia}
                          image={particularCourse.image}
                          title="Image title"
                        />
                        <CardContent className={classes.cardContent}>
                          <Typography gutterBottom variant="h" component="h2">
                            {/* Heading */}
                            {particularCourse.name}
                          </Typography>
                          <Typography>
                            {particularCourse.description}
                            {/* This is a media card. You can use this section to
                            describe the content. */}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Link>
                  </Grid>
                ))}
              </Grid>
              <br />
            </div>
          ))}
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
