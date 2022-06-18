import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setHotels } from "../State/HotelSlice";
// import { fetchHotels } from "../State/HotelSlice";
import IHotel from "../Interfaces/Hotels";
import { useSelector } from "react-redux";
import { AppState } from "../State/Store";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchHotels = async () => {
      const res = await fetch("/hotel.json");
      const json: { restaurant: IHotel }[] = await res.json();
      dispatch(setHotels(json.map((rec) => rec.restaurant)));
    };
    fetchHotels();
    console.log("Data received");
  }, []);
  const hotels = useSelector((state: AppState) => state.hotelSlice);
  return (
    <div>
      {hotels.map((hotel) => (
        <img src={hotel.featured_image}></img>
      ))}
    </div>
  );
};

export default Home;
