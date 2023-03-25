export default function Login() {
    return(
        <div className="flex flex-col m-20 justify-around items-center">
            {/* <label htmlFor="email">Email</label> */}
            <input type="email" name="email" id="email" required="true" placeholder="Email" className="input input-ghost w-full max-w-xs m-5 text-white focus:outline-amber-600 focus:text-amber-600" />
            {/* <label htmlFor="password">Password</label> */}
            <input type="password" name="password" id="password" required="true" placeholder="Password" className="input input-ghost w-full max-w-xs text-white focus:outline-amber-600 focus:text-amber-600"/>
            <div className="m-2">
                <label htmlFor="remember" className="m-4">Remember me</label>
                <input type="checkbox" name="remember" id="remember" className="checkbox checkbox-warning checkbox-xs"/>
            </div>
            <button className="btn md:btn-md m-5 bg-amber-600 text-black hover:text-white">Login</button>
        </div>
    )
}