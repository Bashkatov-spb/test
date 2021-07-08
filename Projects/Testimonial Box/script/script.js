const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
    {
        name: 'Miyah Myles',
        position: 'Marketing',
        photo: 'https://randomuser.me/api/portraits/women/46.jpg',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam nemo itaque, magni dolor at odit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum maiores culpa quis excepturi quibusdam accusamus ducimus laboriosam officia dolore harum?'
    },
    {
        name: 'Miyah Myles',
        position: 'Marketing',
        photo: 'https://randomuser.me/api/portraits/women/45.jpg',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam nemo itaque, magni dolor at odit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum maiores culpa quis excepturi quibusdam accusamus ducimus laboriosam officia dolore harum?'
    },
    {
        name: 'Miyah Myles',
        position: 'Marketing',
        photo: 'https://randomuser.me/api/portraits/women/47.jpg',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam nemo itaque, magni dolor at odit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum maiores culpa quis excepturi quibusdam accusamus ducimus laboriosam officia dolore harum?'
    },
    {
        name: 'Miyah Myles',
        position: 'Marketing',
        photo: 'https://randomuser.me/api/portraits/women/48.jpg',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam nemo itaque, magni dolor at odit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum maiores culpa quis excepturi quibusdam accusamus ducimus laboriosam officia dolore harum?'
    },
    {
        name: 'Miyah Myles',
        position: 'Marketing',
        photo: 'https://randomuser.me/api/portraits/women/49.jpg',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam nemo itaque, magni dolor at odit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum maiores culpa quis excepturi quibusdam accusamus ducimus laboriosam officia dolore harum?'
    }
];


let idx = 1;

function updateTestimonial() {
   const { name, position, photo, text } = testimonials[idx];

   testimonial.innerHTML = text;
    userImage.src = photo;
    username.innerHTML = name;
    role.innerHTML = position;

    idx++;

    if(idx > testimonials.length - 1) {
        idx = 0;
    }

}

setInterval(updateTestimonial, 10000);

updateTestimonial();