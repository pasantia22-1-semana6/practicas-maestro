class Router{
    constructor(app){
        this.app = app;
        this.routes = [];
        this.hashchange = this.hashchange.bind(this);
        window.addEventListener('hashchange',this.hashchange)
        window.addEventListener('DomContentLoaded',this.hashchange)
    }
    addRoute(name, path){
        this.routes.push({
            name,
            path
        })
    }
    hashchange() {
        //console.log(window.location.hash);
        const {hash} = window.location;
        const route = this.routes.find(route=>{
            return hash.match(new RegExp(route.path));
        })
        //console.log(route);
        if(route){
            const params = new RegExp(route.path).exec(hash);
            this.params = params;
            this.app.showComponent(route.name);
        }
    }
}

export default Router