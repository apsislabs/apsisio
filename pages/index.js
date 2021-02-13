import { Arrow } from "../components/Arrow";
import { Clients } from "../components/Clients";
import { LogoType } from "../components/LogoType";

const Button = ({ children, EndIcon, ...props }) => {
  return (
    <button {...props}>
      {children}
      {EndIcon && <EndIcon />}{" "}
    </button>
  );
};

const Navbar = () => {
  return (
    <nav>
      <LogoType />
      <h2>A Code Company</h2>
    </nav>
  );
};

const Hero = () => {
  return (
    <section>
      <div>
        <h3>
          Simple software built by <span>apsis</span>
        </h3>
      </div>
      <div>
        <p>
          We believe the right software isn’t just innovative: it’s inspiring.
          At Apsis, our team of dedicated engineers works hard to provide
          solutions that will work today without sacrificing tomorrow.
        </p>
        <p>
          Born and raised in the Pacific North West, we have worked with
          everyone from startups to enterprise, and we’re looking forward to
          discovering what we can do working with you.
        </p>
        <Button EndIcon={Arrow}>Let's get to work</Button>
      </div>
    </section>
  );
};

export const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <div>Hello world</div>
    </>
  );
};

export default IndexPage;
