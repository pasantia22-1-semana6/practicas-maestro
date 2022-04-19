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

export class ComponentDog extends HTMLElement{
    constructor(){
        super();
        let shadow = this.attachShadow({mode: 'open'});
        this.sectionWrapper = document.createElement('section');
        shadow.appendChild(this.sectionWrapper);
    }

    connectedCallback(){
        this.sectionWrapper.innerHTML= `
        <a href="#/dogs/${this.getAttribute('id')}">
            <h3 class="name">${this.getAttribute('name')}</h3>
            <section>
                <figure>
                    <img src="${this.getAttribute('dogimg')}" alt="${this.getAttribute('name')}">
                </figure>
                <p>${this.getAttribute('descrip')}}</p>
            </section>
        </a>
        `;
    }

}

