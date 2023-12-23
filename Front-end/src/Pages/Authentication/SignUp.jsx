import ButtonPrimary from "../../Components/ButtonPrimary";
import Input from "../../Components/Input";

export default function SignUp({ setState }) {
  return (
    <>
      <div className="space-y-4">
        <h1 className="font-inter text-2xl md:text-3xl lg:text-4xl font-medium">
          Create an account
        </h1>
        <p className="text-sm font-inter font-normal">
          Enter Your details below
        </p>
        <form className="space-y-4">
          <div>
            <Input placeholder="Full Name " />
          </div>

          <div>
            <Input placeholder="Email or Phon Number" />
          </div>

          <div>
            <Input type="password" placeholder="Password" />
          </div>

          <div className="flex flex-col-reverse md:flex-row gap-3 items-center justify-between">
            <ButtonPrimary type="submit">
              <span> Create Account </span>
            </ButtonPrimary>

            <a
              className="text-base text-primary hover:underline capitalize"
              href="#"
            >
              forget password
            </a>
          </div>
        </form>
        <p>
          {" "}
          Already have account?{" "}
          <a
            onClick={() => setState("login")}
            className="text-primary hover:underline cursor-pointer"
          >
            {" "}
            log in?{" "}
          </a>
        </p>
      </div>
    </>
  );
}
