// Zadanie 1.
const jobGrid = document.querySelector('.jobs__grid');

/* const jobOffer = document.createElement('article');
jobOffer.classList.add('job__card');
jobOffer.innerHTML = `<div
style="background-color: hsl(36, 87%, 49%)"
class="company__logo company__logo--small">
<h5>Scoot</h5>
</div>
<div class="job__infos">
<p>5h ago</p>
<span class="job__infos__divider"></span>
<p>Full Time</p>
</div>
<a href="">
<h3 class="job__card__position">Senior Software Engineer</h3>
</a>
<p>Scoot</p>
<h4 class="job__card__location">United Kingdom</h4>`;

/* jobGrid.append(jobOffer); */ 

const firstJobOffer = document.querySelector('.job__card');
const secondJobOffer = firstJobOffer.cloneNode(true);
const thirdJobOffer = firstJobOffer.cloneNode(true);
const fourJobOffer = firstJobOffer.cloneNode(true);

firstJobOffer.insertAdjacentElement('afterend',secondJobOffer);
secondJobOffer.insertAdjacentElement('afterend',thirdJobOffer);
thirdJobOffer.insertAdjacentElement('afterend',fourJobOffer);



// Zadanie 2.

secondJobOffer.querySelector('h3').innerText = 'Junior JavaScript Developer';
thirdJobOffer.querySelector('h3').innerText = 'Python Developer';
fourJobOffer.querySelector('h3').innerText = 'Senior Java Developer';
// Zadanie 3.

// Zadanie 4.

// Zadanie 5.

// Zadanie 6.
