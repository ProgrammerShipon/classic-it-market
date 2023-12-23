import ButtonPrimary from "../../Components/ButtonPrimary";
import Input from "../../Components/Input";

export default function Login({ setState }) {
  return (
    <>
      <div className="space-y-4">
        <h1 className="font-inter text-2xl md:text-3xl lg:text-4xl font-medium">
          Log in to Exclusive
        </h1>
        <p className="text-sm font-inter font-normal">
          Enter Your details below
        </p>
        <form className="space-y-4">
          <div>
            <Input placeholder="Email or Phon Number" />
          </div>

          <div>
            <Input type="password" placeholder="Password" />
          </div>

          <div className="flex flex-col-reverse md:flex-row gap-3 items-center justify-between">
            <ButtonPrimary type="submit">
              <span> Login in </span>
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
          I don't have an account?{" "}
          <a
            onClick={() => setState("signUp")}
            className="text-primary hover:underline cursor-pointer"
          >
            {" "}
            Sign Up?{" "}
          </a>
        </p>
      </div>
    </>
  );
}
