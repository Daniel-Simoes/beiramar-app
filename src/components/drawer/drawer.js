import React from "react";

const Drawer = ({
  onProgressChange,
  content: Content,
  ...props
}) => {
  const {progress} = props;

  React.useEffect(() => {
    onProgressChange(progress);
  }, [progress]);

  return (
    <Content progress={progress} style={{flex: 1}}/>
  );
};

export default Drawer;
