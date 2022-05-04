import Stack from "../component/Stack";

export default {
  title: "Component/stack",
  component: Stack,
  argTypes: {
    childrenNumber: { type: "number", defaultValue: 5 },
  },
};

const paradigm = ({ childrenNumber, ...args }) => {

    return (
        <Stack {...args}>
          {[...Array(childrenNumber).keys()].map((n) => (
            <div style = {{
                width: "70px",
                height: "70px",
                backgroundColor: "blue",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>{"love"}</div>
          ))}
        </Stack>
      );
}

export const Horizontal = paradigm.bind({});

Horizontal.args={
    direction:"",
    spacing:2,
    wrap:false
}