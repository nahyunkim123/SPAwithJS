import Earth from "./pages/Earth"
import Fire from "./pages/Fire"
import Air from "./pages/Air"
import Water from "./pages/Water"

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
    })
    let match = pageMatches.find((pageMatch)=>{pageMatch.isMatch})
 
}


// document가 로드됐을 때 해당 페이지 정보 띄우기
document.addEventListener("DOMContentLoaded",()=>{
    document.body.addEventListener("click",(e)=>{
        if(e.target.matches("[data-link]")){
            e.preventDefault();
            history.pushState(null, null, e.target.href)
            router()
        }
    })
})
// 뒤로가기, 앞으로 가기
window.addEventListener("popstate", ()=>{
    router()
})