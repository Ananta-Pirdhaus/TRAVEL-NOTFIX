import React, { useEffect, useState } from "react";
import SectionTitle from "../sectionTitle";
import { styled } from "styled-components";
import { MdSearch } from "react-icons/md";
import ServiceItem from "./ServiceItem";
import packageInfo from "../../Assets/Data/assetData";

const ProjectStyles = styled.div`
  font-size: 10px;
  padding: 10rem 0;
  .project__allItem {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects__searchBar {
    position: relative;
    width: 500px;
    margin-top: 5rem;
  }
  .projects__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--blackColor);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .projects__searchBar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 0.5rem;
    margin-top: 1.5rem;
    font-size: 2rem;
  }
  .projects__searchBar .searchIcon path {
    color: var(--textColor);
  }
  @media only screen and (max-width: 768px) {
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input,
    .project__allItem {
      width: 100%;
    }
  }
`;

export default function ServiceSection() {
  const [searchText, setSearchText] = useState("");
  const [projectData, setProjectData] = useState(packageInfo);
  

  useEffect(() => {
    if (searchText === "") return;
    setProjectData(() =>
      packageInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  function handleChange(e) {
    e.preventDefault();
    const inputText = e.target.value;
    
    setSearchText(inputText);
    if (!e.target.value.length > 0) {
      setProjectData(packageInfo);
    }
  }

  
  return (
    <ProjectStyles>
      <div>
        <div className="container">
          <SectionTitle
            heading="Our Package"
            subheading="Some of our Package"
          />
          <div className="projects__searchBar">
            <form>
              <input
                type="text"
                value={searchText}
                onChange={handleChange}
                placeholder="Project Name"
              />
              <MdSearch className="searchIcon" />
            </form>
          </div>
          <div className="project__allItem">
            {projectData.map((item) => (
              <ServiceItem
                key={item.id}
                title={item.name}
                desc={item.desc}
                img={item.img}
                slug={item.slug}
              />
            ))}
          </div>
        </div>
      </div>
    </ProjectStyles>
  );
}
