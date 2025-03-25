import css from './Home.module.css';
import {Link} from 'react-router-dom';

export default function Home () {

return <div>

    <h1 className={css.titleh1}>
        A flower doesn't think about competing with the flower next to it. It just blooms.
    </h1>

    <p className={css.text}>
        Welcome to YOUR GARDEN - Your Online Gardening 
        Companion! 
    </p>
    <p className={css.text}>
        Our website is designed for those who love their garden, care for plants, and want to enjoy gardening even more. We bring together people who are passionate about growing flowers, trees, and vegetables, making plant care easier and more enjoyable.
    </p>
    <p className={css.text}>
        Inspiration & Community Experience
        Browse through photos of gardens and plants shared by other users. Share your own gardening successes and find inspiration for your green space!
    </p>
    <p className={css.text}>
        Tips & Discussions
        Have questions about plant care? Our website is the perfect place to ask for advice or share your own gardening knowledge. From soil selection to flower care - you'll always find helpful insights!
    </p>
    <p className={css.text}>
        Everything for Your Garden
    </p>

    <ul className={css.text}>
        We offer a wide range of gardening products:
    
    <li className={css.text}>
        <Link to="/plants">Seedlings and seeds</Link>
    </li>
    <li className={css.text}>
        <Link to="/plants">Flowers and decorative plants</Link>
    </li>

    <li className={css.text}>
    <Link to="/garden_helpers">
        Fertilizers for healthy plants</Link>
    </li>
    <li className={css.text}>
    <Link to="/garden_helpers">
        Tools for garden care</Link>
    </li>

    <li className={css.text}>        
        And many other useful items for your green oasis!
    </li>
    </ul>

    <p className={css.text}>
        Expert Help from Experienced Gardeners
    </p>
    <p className={css.text}>
        Our website is created by passionate and experienced gardeners who are always ready to help. If you're facing issues with your plants, simply upload a photo and describe the problem - our experts will provide useful advice to bring your garden back to life! 
    </p>
    <p className={css.text}>
        Our platform is tailored for private gardeners and plant lovers who want to take care of their gardens with ease, without wasting time searching for the right products and advice.
    </p>
    <p className={css.text}>
        Join our community, get inspired, share your experiences, and make your garden even more beautiful with us! 🌿💚
    </p>

</div>

}