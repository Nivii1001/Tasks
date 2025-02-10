function Bike(props){
    const {Bikeinfo}=props
    const {brand,color,Model}=Bikeinfo;
    return(
        <>
        <h2>Im a {color} {Model} {brand} bike</h2>
        </>
    );
}
export default Bike;