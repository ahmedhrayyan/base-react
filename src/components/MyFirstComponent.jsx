import PropTypes from "prop-types";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

export default function MyFirstComponent({ pageName }) {
  const { toast } = useToast();
  return (
    <div className="text-center">
      <h1 className="text-2xl mb-2">Welcome from {pageName}</h1>
      <Button
        onClick={() => {
          toast({
            description: "You clicked!",
          });
        }}
      >
        Click me
      </Button>
    </div>
  );
}

MyFirstComponent.propTypes = {
  pageName: PropTypes.string.isRequired,
};
