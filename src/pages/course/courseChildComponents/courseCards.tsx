// import { createUseStyles } from "react-jss";
// import CourseImage1 from "../../../assets/CourseImage1.png";
// import CourseImage2 from "../../../assets/CourseImage2.png";
// import CourseImage3 from "../../../assets/CourseImage3.png";

// const useStyles = createUseStyles({
//   gridContainer: {
//     display: "grid",
//     gridTemplateColumns: "1fr",
//     backgroundColor: "#e5d8cf",
//     padding: "40px",
//     //gap: "1rem",
//     fontFamily: 'Georgia, "Times New Roman", serif',
//     alignItems: "stretch", // stretch children to equal height

//     "@media (min-width: 768px)": {
//       gridTemplateColumns: "repeat(3, 1fr)",
//     },
//   },
//   card: {
//     display: "flex",
//     flexDirection: "column",
//     backgroundColor: "#e5d8cf",
//     boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//     marginBottom: "20px",
//   },
//   imageWrapper: {
//     height: "12rem",
//     overflow: "hidden",
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//   },
//   content: {
//     flex: 1,
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     padding: "10px",
//     border: "1px solid black",
//   },
//   title: {
//     fontSize: "35px",
//     fontWeight: "bold",
//     marginBottom: "0.5rem",
//     marginTop: "0.5rem",
//     borderBottom: "1px solid #000",
//     paddingBottom: "0.25rem",
//   },
//   button: {
//     marginTop: "1rem",
//     backgroundColor: "#000",
//     color: "#fff",
//     padding: "0.5rem 1rem",
//     border: "none",
//     cursor: "pointer",
//     alignSelf: "flex-start",
//   },
//   description: {
//     margin: "4px 0",
//   },
// });

// const courseImages = [
//   CourseImage1,
//   CourseImage2,
//   CourseImage3,
//   CourseImage3,
//   CourseImage2,
//   CourseImage1,
// ];

// const courses = [
//   {
//     title: "Essential Competencies of AI/GenAI Leader",
//     audience: "For executives and middle managers",
//     hours: "12 hours",
//     mode: "Instructor-led",
//     delivery: "Online or In-person",
//   },
//   {
//     title: "Generative AI Technical Masterclass",
//     audience: "For Technical professionals",
//     hours: "30 hours",
//     mode: "Instructor-led",
//     delivery: "Online or in-person",
//   },
//   {
//     title: "AI/GenAI Transformation Strategy",
//     audience: "For executives and middle managers",
//     hours: "12  hours",
//     mode: "Instructor-led",
//     delivery: "Online or in-person",
//   },
//   {
//     title: "Essential Competencies of AI Leader",
//     audience: "For executives and middle managers",
//     hours: "12 hours",
//     mode: "Instructor-led",
//     delivery: "Online or In-person",
//   },
//   {
//     title: "Cultivating AI/GenAI Mindset",
//     audience: "For executives and middle managers",
//     hours: "12  hours",
//     mode: "Instructor-led",
//     delivery: "Online or in-person",
//   },
//   {
//     title: "AI/GenAI Operational Readiness",
//     audience: "For executives and middle managers",
//     hours: "12 hours",
//     mode: "Instructor-led",
//     delivery: "Online or In-person",
//   },
// ];

// export default function CourseCards() {
//   const classes = useStyles();

//   return (
//     <div className={classes.gridContainer}>
//       {courses.map((course, index) => (
//         <div key={index} className={classes.card}>
//           <div className={classes.imageWrapper}>
//             <img
//               src={courseImages[index]}
//               alt="Course Visual"
//               className={classes.image}
//             />
//           </div>
//           <div className={classes.content}>
//             <div>
//               <h3 className={classes.title}>{course.title}</h3>
//               <p className={classes.description}>{course.audience}</p>
//               <p className={classes.description}>{course.hours}</p>
//               <p className={classes.description}>{course.mode}</p>
//               <p className={classes.description}>{course.delivery}</p>
//             </div>
//             <button className={classes.button} >Explore</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";
import CourseImage1 from "../../../assets/Book cover_final_DSF.jpg";
import CourseImage2 from "../../../assets/Echo_Final.jpg";
import CourseImage3 from "../../../assets/Scaling GenAI_Cover.jpg";

const useStyles = createUseStyles({
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // 3 columns
    gap: "20px",
    backgroundColor: "#e5d8cf",
    padding: "40px",
    fontFamily: 'Georgia, "Times New Roman", serif',
    alignItems: "stretch",

    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr", // Stack on smaller screens
    },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#e5d8cf",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    overflow: "hidden",
    width: "100%",
  },
  imageWrapper: {
    height: "20rem",
    display: "flex",
    paddingTop: "20px",
    paddingBottom: "20px",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
    overflow: "hidden",
  },
  image: {
    maxHeight: "100%",
    width: "auto",
    objectFit: "contain",
  },
  content: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "10px",
    border: "1px solid black",
  },
  title: {
    fontSize: "20px",
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
    alignSelf: "flex-start",
  },
  description: {
    margin: "4px 0",
  },
});

const courseImages = [
  CourseImage2,

  CourseImage3,
  CourseImage1,
  CourseImage3,
  CourseImage2,
  CourseImage1,
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
    hours: "12 hours",
    mode: "Instructor-led",
    delivery: "Online or in-person",
  },
  {
    title: "Cultivating AI/GenAI Mindset",
    audience: "For executives and middle managers",
    hours: "12 hours",
    mode: "Instructor-led",
    delivery: "Online or in-person",
  },
  {
    title: "AI/GenAI Operational Readiness",
    audience: "For executives and middle managers",
    hours: "12 hours",
    mode: "Instructor-led",
    delivery: "Online or In-person",
  },
];

export default function CourseCards() {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleExploreClick = (index: number) => {
    navigate(`/courses/course${index + 1}`);
  };

  return (
    <div className={classes.gridContainer}>
      {courses.map((course, index) => (
        <div key={index} className={classes.card}>
          <div className={classes.imageWrapper}>
            <img
              src={courseImages[index % courseImages.length]}
              alt={`Image for ${course.title}`}
              className={classes.image}
            />
          </div>
          <div className={classes.content}>
            <div>
              <h3 className={classes.title}>{course.title}</h3>
              <p className={classes.description}>{course.audience}</p>
              <p className={classes.description}>{course.hours}</p>
              <p className={classes.description}>{course.mode}</p>
              <p className={classes.description}>{course.delivery}</p>
            </div>
            <button
              className={classes.button}
              onClick={() => handleExploreClick(index)}
            >
              Explore
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
