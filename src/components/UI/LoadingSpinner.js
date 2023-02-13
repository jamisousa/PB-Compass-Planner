import { Fragment } from "react";
import classes from './LoadingSpinner.module.css';

const LoadingSpinner = () => {

    return(
        <Fragment>
           <div className={classes.fullct}>
           <p>Loading...</p>
            <div className={classes.spinnerct}>

                <div className={classes.spinnerload}>
                    
                </div>
            </div>
           </div>
        </Fragment>
    );

}

export default LoadingSpinner;