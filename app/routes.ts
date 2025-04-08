import { type RouteConfig, index, route, prefix} from "@react-router/dev/routes";

export default prefix("react_router_v7-redux-restaurant_app", [
    index("routes/home.tsx"),
    route("menu", "routes/menu.tsx"),
    route("cart", "routes/cart.tsx"),
  ]) satisfies RouteConfig;

