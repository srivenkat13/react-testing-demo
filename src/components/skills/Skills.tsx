type SkillsProps = {
  skills?: string[];
  styles?: React.CSSProperties;
};

export const Skills = (props: SkillsProps) => {
  const { skills } = props;
  return (
    <>
      <ul style={props.styles}>
        {skills &&
          skills.map((skill) => {
            return <li key={skill}>{skill}</li>;
          })}
      </ul>
    </>
  );
};
