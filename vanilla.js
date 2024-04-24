/*Scroll reveal*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '0px',
    duration: 2000,
    reset: true
});

/* Home Scroll */
sr.reveal('.wtar',{delay:200}); 
sr.reveal('#ej',{delay: 200}); 
sr.reveal('.changecontent',{delay: 100}); 
sr.reveal('.DPAAR',{delay:200}); 
sr.reveal('.content',{delay: 100});

/* Packages Scroll */
/*sr.reveal('#container',{delay:200 , distance:'5px'}); */
sr.reveal('#card1',{delay:200 , distance:'25px'}); 
sr.reveal('#card2',{delay:300 , distance:'25px'}); 


/* Amenities Scroll */
/*sr.reveal('#amenities',{delay:200,  distance:'5px'}); */
sr.reveal('#amenities1',{delay:100,  distance:'25px'}); 
sr.reveal('#amenities2',{delay:150,  distance:'25px'}); 
sr.reveal('#amenities3',{delay:200,  distance:'25px'}); 
sr.reveal('#amenities4',{delay:250,  distance:'25px'}); 
sr.reveal('#amenities5',{delay:300,  distance:'25px'}); 
sr.reveal('#amenities6',{delay:350,  distance:'25px'}); 

/* Gallery Scroll */
sr.reveal('#hero-carousel',{origin:'top', delay:200, distance:'25px'});


/* About Scroll */
sr.reveal('#about_image',{origin:'left', delay:100, distance:'20px'});
sr.reveal('#about_welcome',{origin:'right', delay:100, distance:'20px'});
sr.reveal('#about_nestled',{origin:'right', delay:200, distance:'20px'});
sr.reveal('#about_ourstory',{origin:'right', delay:200, distance:'20px'});

/* Book */ 
sr.reveal('#abc',{delay: 100}); 
sr.reveal('#img',{delay: 200}); 
sr.reveal('#book',{delay: 200}); 
sr.reveal('#bookForm',{delay: 100}); 



/* Feedback */ 
sr.reveal('#form',{delay: 200}); 
sr.reveal('#select',{delay: 100}); 
sr.reveal('.form-control',{delay: 100}); 