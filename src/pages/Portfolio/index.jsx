import SearchIcon from '../../assets/search.svg'
import ProjectImage from "../../assets/project-image.png";
import ProjectCard from '../../components/ProjectCard';
import ContactUs from '../../components/ContactUs';
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase";

function Porfolio() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "projects"));
      let data = [];
      querySnapshot.forEach((doc) => {
        let obj = {
          id: doc.id,
          ...doc.data(),
        };
        data.push(obj);
      });
      console.log({ data });
      setProjects(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="text-center container mx-auto">
        <h1 className="text-[40px] font-bold mt-16">
          Discover Our Portfolio of Creations
        </h1>
        <p className="text-[18px] mt-5">
          Explore our diverse portfolio of digital solutions tailored to meet
          the unique needs of our clients. From stunning website designs to
          intuitive mobile applications, our work showcases our commitment to
          innovation and excellence in every project.
        </p>
        <div
          className="flex justify-between gap-8 rounded-[16px] w-fit mx-auto mt-10"
          style={{ border: "1px solid #C5C5C5" }}
        >
          <input
            type="text"
            placeholder="Search a project..."
            className="bg-transparent border-none outline-none p-[1rem] text-[18px]"
          />
        </div>
        <div className="mt-10 flex gap-14 flex-wrap justify-center">
          {projects.map((project, ind) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
        <ContactUs />
      </div>
    </>
  );
}

export default Porfolio