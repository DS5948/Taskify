import Navbar from "../Components/Home Navbar/Navbar"
import Footer from '../Components/Footer/Footer'
import Hero from '../Components/Hero/Hero'
import Column from '../Components/Tasks Column/Column'
import './CSS/Home.css'
import DailiesColumn from "../Components/Dailies Column/DailiesColumn"
import TasksSearchBarDiv from "../Components/TasksSearchBarDiv/TasksSearchBarDiv"
import ToDoEditContainer from "../Components/ToDo Edit Container/ToDoEditContainer"
import { useAppContext } from "../Components/context"

const Home = () => {
  const { isComponentVisible} = useAppContext();
  console.log(isComponentVisible);
  return (
    <div className='home'>
      <Navbar />
      <Hero />
      <div className="todo-edit-container" style={{display: isComponentVisible===true? 'block':'none'}}>
        <div className="fade"></div>
      <ToDoEditContainer />
      </div>
      <TasksSearchBarDiv />
      <div className="tasks-columns">
      <Column />
      <DailiesColumn />
      <Column />
      <Column />
      </div>
      <Footer />
    </div>
  )
}

export default Home;