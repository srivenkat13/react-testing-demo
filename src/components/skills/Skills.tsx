import { useEffect, useState } from "react";

type SkillsProps = {
  skills?: string[];
  styles?: React.CSSProperties;
};

export const Skills = (props: SkillsProps) => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const { skills } = props;
  useEffect(() => {
    const interval = setTimeout(() => {
      setIsLoggedin(true);
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <ul style={props.styles}>
        {skills &&
          skills.map((skill) => {
            return <li key={skill}>{skill}</li>;
          })}
      </ul>
      {isLoggedin ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setIsLoggedin(true)}>Login</button>
      )}
    </>
  );
};
