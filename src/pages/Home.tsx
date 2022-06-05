import { useEffect } from "react";

interface IHotel {
  name: string;
  cuisines: string;
  featured_image: string;
  id: string;
}

const Home = () => {
  useEffect(() => {
    async function getHotels() {
      const hotels = await fetch("./hotel.json");
      const hotelsArr: { restaurant: IHotel }[] = await hotels.json();
      console.log(hotelsArr.map((x) => x.restaurant));
    }
    getHotels();
  }, []);
  return <div>Hotels</div>;
};

export default Home;
