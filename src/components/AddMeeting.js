import classes from '../css-components/Form.module.css';
import styles from '../css-components/AddMeeting.module.css';
import btnstyles from '../css-components/FormBtn.module.css';
import colors from '../css-components/Colors.module.css';
import Input from '../components/Input';
import FormBtn from '../components/FormBtn';
import TimeCard from './TimeCard';
import { Fragment, useState, useEffect } from 'react';
import DaysOfWeek from '../components/DaysOfWeek';
import MeetingDetailCard from './MeetingDetailCard';

const AddMeeting = () => {

    const [taskInput, setTaskInput] = useState({
        id:'',
        enteredTaskName:'',
        enteredTaskDay:'',
        enteredTaskTime:''
    });

    const [tasks, setTasks] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);

    const addComponent = () => {

        if(taskInput.enteredTaskDay === '' ||
        taskInput.enteredTaskTime === ''){
            alert("Task information invalid. Please try again!");
        }
        else{
            setTaskInput({
                ...taskInput,
                id: tasks.length+1,
            });
    
            setTasks(prevTasks =>
                [...prevTasks, taskInput]
            );
            
        }

    }

    const taskNameChangeHandler = (event) => {
        setTaskInput({
            ...taskInput,
            enteredTaskName: event.target.value
        })
    };

    const taskDayChangeHandler = (event) => {
        setTaskInput({
            ...taskInput,
            enteredTaskDay: event.target.value
        })
    };

    const taskTimeChangeHandler = (event) => {
        setTaskInput({
            ...taskInput,
            enteredTaskTime: event.target.value
        })
    };

    //Removing single or all tasks
    const removeAllComponents = () => {
        setTasks([]);
        setFilteredTasks([]);
    }

    const deleteOneTask = (id) => {
        setTasks(tasks.filter((info) => info.id !== id));
        // setFilteredTasks(tasks.filter((info) => info.id !== id));
    }

    const submitHandler = (event) => {
        event.preventDefault();
    }

    //Week days validation
    const [isMondaySelected, setIsMondaySelected] = useState(false);
    const [isTuesdaySelected, setIsTuesdaySelected] = useState(false);
    const [isWednesdaySelected, setIsWednesdaySelected] = useState(false);
    const [isThursdaySelected, setIsThursdaySelected] = useState(false);
    const [isFridaySelected, setIsFridaySelected] = useState(false);
    const [isSaturdaySelected, setIsSaturdaySelected] = useState(false);
    const [isSundaySelected, setIsSundaySelected] = useState(false);

    let DayClasses = (
        isMondaySelected ? colors['redblock'] : 
        isTuesdaySelected ? colors['orangeblock'] : 
        isWednesdaySelected ? colors['yellowblock'] :
        isThursdaySelected ? colors['lightred'] :
        isFridaySelected ? colors['lightorange'] :
        isSaturdaySelected ? colors['lightyellow'] :
        isSundaySelected ? colors['lighterred'] : ''
    )
          

    const WeekDaysHandler = (event) => {

        setIsMondaySelected(false);
        setIsTuesdaySelected(false);
        setIsWednesdaySelected(false);
        setIsThursdaySelected(false);
        setIsFridaySelected(false);
        setIsSaturdaySelected(false);
        setIsSundaySelected(false);
        
        if(event.currentTarget.id === "Monday"){
            setFilteredTasks(tasks.filter((info) => info.enteredTaskDay === 'Monday'));
            setIsMondaySelected(true);
        }

        if(event.currentTarget.id === "Tuesday"){
            setFilteredTasks(tasks.filter((info) => info.enteredTaskDay === 'Tuesday'));
            setIsTuesdaySelected(true);
        }
        

        if(event.currentTarget.id === "Wednesday"){
            setFilteredTasks(tasks.filter((info) => info.enteredTaskDay === 'Wednesday'));
            setIsWednesdaySelected(true);
        }

        if(event.currentTarget.id === "Thursday"){
            setFilteredTasks(tasks.filter((info) => info.enteredTaskDay === 'Thursday'));
            setIsThursdaySelected(true);
        }

        
        if(event.currentTarget.id === "Friday"){
            setFilteredTasks(tasks.filter((info) => info.enteredTaskDay === 'Friday'));
            setIsFridaySelected(true);
        }

        if(event.currentTarget.id === "Saturday"){
            setFilteredTasks(tasks.filter((info) => info.enteredTaskDay === 'Saturday'));
            setIsSaturdaySelected(true);
        }

        if(event.currentTarget.id === "Sunday"){
            setFilteredTasks(tasks.filter((info) => info.enteredTaskDay === 'Sunday'));
            setIsSundaySelected(true);
        }
        
        
    }


    return(
        <Fragment>
            <form onSubmit={submitHandler}>
                <div className={classes.taskaddingdiv}>
                    <Input onChange={taskNameChangeHandler} className={`${classes.taskinput} ${classes.tasknameinput}`} type="text" id="taskname" placeholder="Task or issue"/>
                    <select onChange={taskDayChangeHandler} className={`${classes.taskinput} ${classes.taskdayinput}`}>
                        <option selected disabled>Task day</option>
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                        <option>Saturday</option>
                        <option>Sunday</option>
                    </select>

                    <Input onChange={taskTimeChangeHandler} className={`${classes.taskinput} ${classes.taskdateinput}`} type="time"></Input>

                    <div className={styles.addtaskbuttons}>
                        <FormBtn onClick={addComponent} type="submit" className={`${styles.taskbtn} ${styles.addtaskbtn}`}>+ Add to calendar</FormBtn>
                        <FormBtn onClick={removeAllComponents} type="submit" className={`${styles.taskbtn} ${styles.deletealltasksbtn}`}>- Delete All</FormBtn>
                    </div>
                </div>
            </form>

            <div className={styles.weekdaysdiv}>
            <DaysOfWeek onClick={WeekDaysHandler} id="Monday" className={`${classes.dayblock} ${colors.redblock}`}>Monday</DaysOfWeek>
            <DaysOfWeek onClick={WeekDaysHandler} id="Tuesday" className={`${classes.dayblock} ${colors.orangeblock}`}>Tuesday</DaysOfWeek>
            <DaysOfWeek onClick={WeekDaysHandler} id="Wednesday" className={`${classes.dayblock} ${colors.yellowblock}`}>Wednesday</DaysOfWeek>
            <DaysOfWeek onClick={WeekDaysHandler} id="Thursday" className={`${classes.dayblock} ${colors.lightred}`}>Thursday</DaysOfWeek>
            <DaysOfWeek onClick={WeekDaysHandler} id="Friday" className={`${classes.dayblock} ${colors.lightorange}`}>Friday</DaysOfWeek>
            <DaysOfWeek onClick={WeekDaysHandler} id="Saturday" className={`${classes.dayblock} ${colors.lightyellow}`}>Saturday</DaysOfWeek>
            <DaysOfWeek onClick={WeekDaysHandler} id="Sunday" className={`${classes.dayblock} ${colors.lighterred}`}>Sunday</DaysOfWeek>
            
            </div>

            <TimeCard className={styles.timecard}>Time</TimeCard>
            <div className={styles.scroll}>
                <div className={styles.taskscontainer}>

                    {filteredTasks.map((item)=>{
                            return(
                                <div className={styles.addedtasksdiv} key={item.id}>
                                <div>
                                                <TimeCard className={DayClasses}>{item.enteredTaskTime}</TimeCard>
                                                </div>
                                                <MeetingDetailCard className={DayClasses}>
                                                <h3>{item.enteredTaskName}</h3>
                                                <FormBtn onClick={()=>deleteOneTask(item.id)} className={btnstyles.deleteallbtn} type="button">Delete</FormBtn>
                                                </MeetingDetailCard>
                                            </div>
                                        );
                                    })
                    }
 
                </div>
            </div>

            <div className={styles.notasks}>
               {tasks.length === 0 ? <h1>No tasks yet.</h1> : ''}
            </div>

        </Fragment>
        
    );
}

export default AddMeeting;