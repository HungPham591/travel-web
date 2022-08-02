const backendRoutes = [
    {
        label: "Trang chủ",
        path: '/',
        element: []
    },
    {
        label: "Tin tức",
        path: '/news',
        element: []
    },
    {
        label: "Bảo tàng - Di tích",
        path: '/history',
        element: []
    },
    {
        label: "Tham quan",
        path: '/adventure',
        element: []
    },
    // du lich
    {
        label: "Du lịch",
        path: null,
        element: [
            {
                label: "Tour du lịch",
                path: '/tour',
                element: []
            },
            {
                label: "Khách sạn & Chỗ ở",
                path: '/hotel',
                element: []
            },
            {
                label: "Địa điểm ăn uống",
                path: '/restaurant',
                element: []
            },
        ]
    },
    {
        label: 'Giải trí',
        path: '/entertainment',
        element: []
    },
    {
        label: 'Ẩm thực',
        path: '/restaurant',
        element: []
    },
    {
        label: "Đặc sản địa phương",
        path: '/product',
        element: []
    },
    {
        label: "Bản đồ",
        path: '/map',
        element: []
    },
];

export default backendRoutes;