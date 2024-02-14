import { SpinnerCircularFixed as Spinner } from "spinners-react";

const Loader = () => {
  return (
    <div className="flex justify-center">
      <Spinner
        size={24}
        thickness={200}
        speed={150}
        color="white"
        secondaryColor="rgba(255, 255, 255, 0.25)"
      />
    </div>
  );
};

export { Loader };
