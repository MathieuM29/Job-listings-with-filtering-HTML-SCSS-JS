const app = {
    init: function () {
        console.log('init !');
        app.createJobCard();
    },
    datas: [
        {
          "id": 1,
          "company": "Photosnap",
          "logo": "./images/photosnap.svg",
          "new": true,
          "featured": true,
          "position": "Senior Frontend Developer",
          "role": "Frontend",
          "level": "Senior",
          "postedAt": "1d ago",
          "contract": "Full Time",
          "location": "USA Only",
          "languages": ["HTML", "CSS", "JavaScript"],
          "tools": []
        },
        {
          "id": 2,
          "company": "Manage",
          "logo": "./images/manage.svg",
          "new": true,
          "featured": true,
          "position": "Fullstack Developer",
          "role": "Fullstack",
          "level": "Midweight",
          "postedAt": "1d ago",
          "contract": "Part Time",
          "location": "Remote",
          "languages": ["Python"],
          "tools": ["React"]
        },
        {
          "id": 3,
          "company": "Account",
          "logo": "./images/account.svg",
          "new": true,
          "featured": false,
          "position": "Junior Frontend Developer",
          "role": "Frontend",
          "level": "Junior",
          "postedAt": "2d ago",
          "contract": "Part Time",
          "location": "USA Only",
          "languages": ["JavaScript"],
          "tools": ["React", "Sass"]
        },
        {
          "id": 4,
          "company": "MyHome",
          "logo": "./images/myhome.svg",
          "new": false,
          "featured": false,
          "position": "Junior Frontend Developer",
          "role": "Frontend",
          "level": "Junior",
          "postedAt": "5d ago",
          "contract": "Contract",
          "location": "USA Only",
          "languages": ["CSS", "JavaScript"],
          "tools": []
        },
        {
          "id": 5,
          "company": "Loop Studios",
          "logo": "./images/loop-studios.svg",
          "new": false,
          "featured": false,
          "position": "Software Engineer",
          "role": "Fullstack",
          "level": "Midweight",
          "postedAt": "1w ago",
          "contract": "Full Time",
          "location": "Worldwide",
          "languages": ["JavaScript"],
          "tools": ["Ruby", "Sass"]
        },
        {
          "id": 6,
          "company": "FaceIt",
          "logo": "./images/faceit.svg",
          "new": false,
          "featured": false,
          "position": "Junior Backend Developer",
          "role": "Backend",
          "level": "Junior",
          "postedAt": "2w ago",
          "contract": "Full Time",
          "location": "UK Only",
          "languages": ["Ruby"],
          "tools": ["RoR"]
        },
        {
          "id": 7,
          "company": "Shortly",
          "logo": "./images/shortly.svg",
          "new": false,
          "featured": false,
          "position": "Junior Developer",
          "role": "Frontend",
          "level": "Junior",
          "postedAt": "2w ago",
          "contract": "Full Time",
          "location": "Worldwide",
          "languages": ["HTML", "JavaScript"],
          "tools": ["Sass"]
        },
        {
          "id": 8,
          "company": "Insure",
          "logo": "./images/insure.svg",
          "new": false,
          "featured": false,
          "position": "Junior Frontend Developer",
          "role": "Frontend",
          "level": "Junior",
          "postedAt": "2w ago",
          "contract": "Full Time",
          "location": "USA Only",
          "languages": ["JavaScript"],
          "tools": ["Vue", "Sass"]
        },
        {
          "id": 9,
          "company": "Eyecam Co.",
          "logo": "./images/eyecam-co.svg",
          "new": false,
          "featured": false,
          "position": "Full Stack Engineer",
          "role": "Fullstack",
          "level": "Midweight",
          "postedAt": "3w ago",
          "contract": "Full Time",
          "location": "Worldwide",
          "languages": ["JavaScript", "Python"],
          "tools": ["Django"]
        },
        {
          "id": 10,
          "company": "The Air Filter Company",
          "logo": "./images/the-air-filter-company.svg",
          "new": false,
          "featured": false,
          "position": "Front-end Dev",
          "role": "Frontend",
          "level": "Junior",
          "postedAt": "1mo ago",
          "contract": "Part Time",
          "location": "Worldwide",
          "languages": ["JavaScript"],
          "tools": ["React", "Sass"]
        }
      ],
      
    createJobCard: function () {

        class JobCard extends HTMLElement {

            constructor() {
                super();
                this.datas = app.datas;
                this.languages = app.datas.languages;
                
                
            }

            connectedCallback() {
                console.log("My component is connected");
                
                const template = document.querySelector('template');
                template.innerHTML = `
                <style>
                    .main__content__card {
                        width: 100%; 
                        height: auto;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        border: 1px solid black; 
                    }

                </style>

                ${app.datas.map((data) => `<div class="main__content__card">

                <div class="main__content__card__infos">

                    <img class="main__content__card__infos--img" src=${data.logo} alt="" /> 

                    <div class="main__content__card__infos__details">

                    <div class="main__content__card__infos__top">

                        <p class="main__content__card__infos__top--company">${data.company}</p>
                        <p class="main__content__card__infos__top--new">${data.new}</p>
                        <p class="main__content__card__infos__top--feature">${data.featured}</p>

                    </div>

                    <div class="main__content__card__infos__jobTitle">

                        <p class="main__content__card__infos__jobTitle--title">${data.position}r</p>

                    </div>

                    <div class="main__content__card__infos__bottom">

                        <p class="main__content__card__infos__bottom--date">${data.postedAt}</p>
                        <p class="main__content__card__infos__bottom--contract">${data.contract}</p>
                        <p class="main__content__card__infos__bottom--location">${data.location}</p>
                        
                    </div>

                    </div>

                </div>

                <div class="main__content__card__tags">

                    <p class="main__content__card__tags--tag">${data.role}</p>
                    <p class="main__content__card__tags--tag">${data.level}</p>
                    
                    ${data.languages.map((language) => `<p>${language}</p>`)}
                    
                    
                
                </div>

        </div>`)}
                
            `;
                
                const clone = document.importNode(template.content, true);
                this.attachShadow({ mode: 'open'});
                this.shadowRoot.appendChild(clone);
                console.log(this.datas);

                
            };

            disconnectedCallback() {

                console.log("My component is disconnected"); 
            };

        }

        customElements.define('job-card', JobCard);
        const newElement = new JobCard();
        console.log(newElement);
    },
    


};

document.addEventListener('DOMContentLoaded', app.init);