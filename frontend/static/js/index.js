import Earth from "./pages/Earth.js"
import Fire from "./pages/Fire.js"
import Air from "./pages/Air.js"
import Water from "./pages/Water.js"
import NotFound from "./pages/Notfound.js"

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: Earth },
        { path: "/water", view: Water },
        { path: "/air", view: Air },
        { path: "/fire", view: Fire },
    ];

    const pageMatches = routes.map((route)=>{
        return{
            route,
            isMatch: route.path === location.pathname,
        }
    });

    let match = pageMatches.find((pageMatch) => pageMatch.isMatch);
    
    if (!match) {
        match = {
            route: location.pathname,
            isMatch: true,
        };
        const page = new NotFound();
        document.querySelector("#root").innerHTML = await page.getHtml();
    } else {
        const page = new match.route.view();
        document.querySelector("#root").innerHTML = await page.getHtml();
    }
}


// 뒤로 가기 할 때 데이터 나오게 하기 위함
window.addEventListener("popstate", () => {
    router();
});

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
});