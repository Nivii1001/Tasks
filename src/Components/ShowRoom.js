import Bike from "./Bike";
function ShowRoom(){
    const Bikeinfo={brand:"RE",color:"Brown",Model:"xx"}
    const BikeList=[
        {brand:"R15",color:"blue"},
        {brand:"R15",color:"black"},
        {brand:"MT",color:"Red"}

    ]
    return(
        <>
        <h1>Hellooo Who is inside?</h1>
        <ul>
            {BikeList.map((Bikeinfo)=> <li><Bike Bikeinfo={Bikeinfo} /> </li>)}
        </ul>

        </>
    );
}
export default ShowRoom;