export default function Signup() {
  return (
    //username,email (unique),password,repeat password
    <>
    <h2 className="text-amber-600 px-24 pt-4 text-5xl">Sign up</h2>
      <div className="flex flex-col m-20 justify-around p-20 border-amber-600 border-2 rounded-3xl">
        <label htmlFor="name" className="text-amber-600 font-bold">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          required="true"
          placeholder="Username"
          className="input input-ghost w-full max-w-xs m-5 text-white focus:outline-amber-600 focus:text-amber-600"
        />
        <label htmlFor="email" className="text-amber-600 font-bold">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required="true"
          placeholder="Email"
          className="input input-ghost w-full max-w-xs m-5 text-white focus:outline-amber-600 focus:text-amber-600"
        />

        <label htmlFor="password" className="text-amber-600 font-bold">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          required="true"
          placeholder="Password"
          className="input input-ghost w-full max-w-xs m-5 text-white focus:outline-amber-600 focus:text-amber-600"
        />
        <input
          type="password"
          name="repeat-password"
          id="repeat-password"
          required="true"
          placeholder="Repeat Password"
          className="input input-ghost w-full max-w-xs m-5 text-white focus:outline-amber-600 focus:text-amber-600"
        />
        <button className="btn md:btn-md m-10 bg-amber-600 text-black hover:text-white">
          Submit
        </button>
      </div>
    </>
  );
}
