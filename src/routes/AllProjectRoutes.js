import AdventurePage from "../containers/AdventurePage";
import CartPage from "../containers/CartPage";
import CheckoutPage from "../containers/CheckoutPage";
import EntertainmentPage from "../containers/EntertainmentPage";
import HistoryPage from "../containers/HistoryPage";
import HomePage from "../containers/HomePage";
import HotelDetailPage from "../containers/HotelDetailPage";
import HotelPage from "../containers/HotelPage";
import MapPage from "../containers/MapPage";
import NotFoundPage from "../containers/NotFoundPage";
import OrderCompletedPage from "../containers/OrderCompletedPage";
import PlaceDetailPage from "../containers/PlaceDetailPage";
import ProductDetailPage from "../containers/ProductDetailPage";
import ProductPage from "../containers/ProductPage";
import RegisterPage from "../containers/RegisterPage";
import RestaurantDetailPage from "../containers/RestaurantDetailPage";
import RestaurantPage from "../containers/RestaurantPage";
import TourDetailPage from "../containers/TourDetailPage";
import TourPage from "../containers/TourPage";
import WishlistPage from "../containers/WishlistPage";

const AllProjectRoutes = [
    {
        path: '/cart',
        element: <CartPage />
    },
    {
        path: '/cart-2',
        element: <CheckoutPage />
    },
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/hotel-detail/:id',
        element: <HotelDetailPage />
    },
    {
        path: '/hotel',
        element: <HotelPage />
    },
    {
        path: '/product-detail/:id',
        element: <ProductDetailPage />
    },
    {
        path: '/product',
        element: <ProductPage />
    },
    {
        path: '/restaurant-detail/:id',
        element: <RestaurantDetailPage />
    },
    {
        path: '/restaurant',
        element: <RestaurantPage />
    },
    {
        path: '/tour-detail/:id',
        element: <TourDetailPage />
    },
    {
        path: '/place-detail/:id',
        element: <PlaceDetailPage />
    },
    {
        path: '/tour',
        element: <TourPage />
    },
    {
        path: '/adventure',
        element: <AdventurePage />
    },
    {
        path: '/history',
        element: <HistoryPage />
    },
    {
        path: '/entertainment',
        element: <EntertainmentPage />
    },
    {
        path: '/wishlist',
        element: <WishlistPage />
    },
    {
        path: '/map',
        element: <MapPage />
    },
    {
        path: '/wish-list',
        element: <WishlistPage />
    },
    {
        path: '/register',
        element: <RegisterPage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    },
    {
        path: '/cart-3',
        element: <OrderCompletedPage />
    },
];

export default AllProjectRoutes;