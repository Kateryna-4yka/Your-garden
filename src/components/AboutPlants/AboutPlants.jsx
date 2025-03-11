import AboutPlantsItem from '../AboutPlantsItem/AboutPlantsItem';



export default function AboutPlants({ flowerCareList }) {

    return (
        <ul>
          {flowerCareList.map((el) => {return <AboutPlantsItem key={el.id} element={el} />})}
        </ul>
    );
  }