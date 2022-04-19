import App from './js/App.js';
import Router from './js/Router.js';
import Api from './js/Api.js';
import { ComponentDog } from './js/Component.js';

const app = new App('#app');
const router = new Router(app);

//template
const dogTempleate = (dog)=>`
<section class="dog-listing">
    <a href="#/dogs/${dog.id}">
        <h3 class="name">${dog.name}</h3>
        <section>
            <figure>
                <img src="${dog.url}" alt="${dog.name}">
            </figure>
            <p>${dog.description}</p>
        </section>
    </a>
</section>
`;

customElements.define('component-dog', ComponentDog);

app.addComponent({
    name: 'dogs',
    model:{
        dogs:[]
    },
    view(model){
        /*
        return `
            <ul clas="dogs">
                ${model.dogs.map(dog=>`<li>${dogTempleate(dog)}</li>`).join('')}
            </ul>
        `;*/
        return `
            <ul class="dogs">
            ${model.dogs.map(dog=>`<li>
                <component-dog name="${dog.name}" id="${dog.id} dogimg="${dog.url}" descrip="${dog.description}">
                </component-dog>
                </li>`).join('')}
            </ul>
        `;
    },
    async controller(model){
        const dogs = await Api.getDogs();
        
        //console.log(dogs);
        model.dogs = dogs;
    }

})

app.addComponent({
    name: 'dog',
    model:{
        dog:{}
    },
    view(model){
        return dogTempleate(model.dog);
    },
    async controller(model){
        const dog = await Api.getDog(router.params[1]);
        
        //console.log(dogs);
        model.dog = dog;
    }

})

app.addComponent({
    name: 'home',
    model:{
        data:"Welcome to the dog app"
    },
    view(model){
        return `
            <h1>${model.data}</h1>`;
    },

})
router.addRoute('home', '^#/home$');
router.addRoute('dogs', '^#/dogs$');
router.addRoute('dog', '^#/dogs/([0-9]+)$');