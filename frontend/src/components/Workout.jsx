const Workout = ({workoutData}) => {
    return ( <section>
        <p>{workoutData.title}</p>
        <p>{workoutData.reps}</p>
        <p>{workoutData.load}</p>
    </section> );
}
 
export default Workout;