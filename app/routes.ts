import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("menu", "routes/menu.tsx"),
    route("menu/:id", "routes/product.tsx"),
    route("cart", "routes/cart.tsx")
] satisfies RouteConfig;

