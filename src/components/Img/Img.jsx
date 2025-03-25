import { Link } from 'react-router-dom';

export default function Img({ value }) {
  // Видаляємо дублікати за `id`
  const uniqueImages = value.filter(
    (el, index, self) => index === self.findIndex((item) => item.id === el.id)
  );

  return (
    <ul>
      {uniqueImages.map((el) => (<li key={el.id}>
          <img src={el.urls.small} alt={el.alt_description} width={50} />
          <p>це картинка для коментарів `{el.id}`</p>
          <Link to={`/plant_gallery/${el.id}`}>залишити свій коментар про проблему</Link>
        </li>
      ))}
    </ul>
  );
}
