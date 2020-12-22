baguetteBox.run('.gallery');

const main = document.querySelector('main');
let html ='';

for(let i=1; i <=12; i++ ) {
    html += `
    <div>
        <a href="photos/${i}.jpg">
            <img src="photos/thumbnails/${i}.jpg" alt="Photo display ${i}">
        </a>
    </div>
`;
}

main.innerHTML = html;
