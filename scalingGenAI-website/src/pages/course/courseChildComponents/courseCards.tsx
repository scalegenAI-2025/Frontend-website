import { createUseStyles } from "react-jss";
import CourseImage1 from "../../../assets/CourseImage1.png";
import CourseImage2 from "../../../assets/CourseImage2.png";
import CourseImage3 from "../../../assets/CourseImage3.png";
// import CourseImage4 from "../../../assets/background4.jpg";
// import CourseImage5 from "../../../assets/background5.jpg";

const useStyles = createUseStyles({
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "1fr",
    backgroundColor: "#e5d8cf",
    //gap: "1rem",
    padding: "40px",
    alignItems: "stretch", // Ensure all items stretch to same height

    "@media (min-width: 768px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
  },
  card: {
    marginBottom: "10px",
    backgroundColor: "#e5d8cf",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  imageWrapper: {
    height: "12rem",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  content: {
    padding: "10px",
    border: "1px solid black ",
  },
  title: {
    fontSize: "35px",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    marginTop: "0.5rem",
    borderBottom: "1px solid #000",
    paddingBottom: "0.25rem",
  },
  button: {
    marginTop: "1rem",
    backgroundColor: "#000",
    color: "#fff",
    padding: "0.5rem 1rem",
    border: "none",
    cursor: "pointer",
  },
  description: {
    margin: "4px",
  },
});

const courseImages = [
  CourseImage1,
  CourseImage2,
  CourseImage3,
  CourseImage3,
  CourseImage2,
];

const courses = [
  {
    title: "Essential Competencies of AI/GenAI Leader",
    audience: "For executives and middle managers",
    hours: "12 hours",
    mode: "Instructor-led",
    delivery: "Online or In-person",
  },
  {
    title: "Generative AI Technical Masterclass",
    audience: "For Technical professionals",
    hours: "30 hours",
    mode: "Instructor-led",
    delivery: "Online or in-person",
  },
  {
    title: "AI/GenAI Transformation Strategy",
    audience: "For executives and middle managers",
    hours: "12  hours",
    mode: "Instructor-led",
    delivery: "Online or in-person",
  },
  {
    title: "Essential Competencies of AI Leader",
    audience: "For executives and middle managers",
    hours: "12 hours",
    mode: "Instructor-led",
    delivery: "Online or In-person",
  },
  {
    title: "Generative AI Technical Masterclass",
    audience: "For Technical professionals",
    hours: "30 hours",
    mode: "Instructor-led",
    delivery: "Online or in-person",
  },
];

export default function CourseCards() {
  const classes = useStyles();

  return (
    <div className={classes.gridContainer}>
      {courses.map((course, index) => (
        <div key={index} className={classes.card}>
          <div className={classes.imageWrapper}>
            <img
              src={courseImages[index]}
              alt="Course Visual"
              className={classes.image}
            />
          </div>
          <div className={classes.content}>
            <h3 className={classes.title}>{course.title}</h3>
            <p className={classes.description}>{course.audience}</p>
            <p className={classes.description}>{course.hours}</p>
            <p className={classes.description}>{course.mode}</p>
            <p className={classes.description}>{course.delivery}</p>
            <button className={classes.button}>Explore</button>
          </div>
        </div>
      ))}
    </div>
  );
}
