import { Link } from "react-router-dom";
import SignupForm from "../components/SignupForm"

const Home = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-4 min-h-screen">
      <div className="bg-blue-light text-white pl-10 pt-8 pr-4">
        <h1 className="font-raleway font-extrabold text-xl mb-16">Surge</h1>
        <h3 className="font-biotif text-4xl font-medium mb-7">Let us build Africa's next biggest product together</h3>

        <p className="font-biotif mb-9">Our talents at KJK build solutions for the world's most respectable technology-driven companies. By joining our network that will occupy your mind and a community of top-fields techies that will offer you opportunities for continuos growth</p>

        <div className="font-biotif mb-16">
          <h5 className="mb-2 text-lg">Upon your form submission</h5>
          <ul className="hyphen-list">
            <li>A short English proficiency test (10 mins)</li>
            <li>A coding challenge (1 hour)</li>
            <li>A live technical interview with our experts (1 hour)</li>
          </ul>
        </div>

        <div className="text-lg underline mb-16">
          <Link to="/">Sign up and be a step closer to joining our tech base.</Link>
        </div>
      </div>
      <div>
        <SignupForm />
      </div>
    </div>
  );
}

export default Home;
