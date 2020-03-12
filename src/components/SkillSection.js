import React from "react";

const SkillSection = props => {
  const CreateSkillList = skills => {
    const iconList = skills.map(skill => {
      return (
        <div className="skill_logo">
          <img src={skill.logo} alt={skill.name} id={skill.name} />
        </div>
      );
    });
    const nameList = skills.map(skill => (
      <div className="skill_name">{skill.name}</div>
    ));
    return (
      <div className="skill_section">
        <div className="column">{iconList}</div>
        <div className="column">{nameList}</div>
      </div>
    );
  };

  return (
    <div className="skill_box">
      <div className="section_title">{props.title}</div>
      {CreateSkillList(props.skills)}
    </div>
  );
};

export default SkillSection;
