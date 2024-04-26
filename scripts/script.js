const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const menuBackground = document.getElementById('menu-background');
const content = document.getElementById('content-opacity');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menuBackground.classList.toggle('hidden', 'opacity-20');
    content.classList.toggle('opacity-20'); // Adiciona ou remove a classe de opacidade
});

function openWhatsApp() {
    // Definir o número de telefone e a mensagem
    var phoneNumber = '42998353821';
    var message = 'Olá Gabriel! Espero que esteja bem. Conheci você através do seu portfólio.';

    // Formatar o número de telefone para o formato internacional (se necessário)
    phoneNumber = phoneNumber.replace(/\D/g, '');

    // Construir a URL do WhatsApp com o número e a mensagem
    var url = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);

    // Abrir a URL em uma nova aba
    window.open(url, '_blank');
}

const projectItems = document.querySelectorAll('.project-item');

projectItems.forEach(projectItem => {
    const overlay = projectItem.querySelector('.overlay');
    const description = projectItem.querySelector('.description');

    projectItem.addEventListener('mouseenter', function() {
        if(window.innerWidth >= 768) {
            overlay.classList.add('opacity-90', 'duration-900', 'ease-in-out');
            description.classList.remove('hidden');
            description.classList.add('flex', 'flex-col', 'justify-center', 'items-center');
            projectItem.classList.add('border-purple-700', 'transition', 'delay-150', 'translate-y-1', 'scale-105', 'bg-slate-900');
        }
    });

    projectItem.addEventListener('mouseleave', function() {
        if(window.innerWidth >= 768) {
            overlay.classList.remove('opacity-90', 'duration-900', 'ease-in-out');
            description.classList.add('hidden');
            projectItem.classList.remove('border-purple-700', 'transition', 'delay-150', 'translate-y-1', 'scale-105', 'bg-slate-900');
        }
    });
});


const certificateItems = document.querySelectorAll('.certificate-item');

certificateItems.forEach(certificateItem => {
    certificateItem.addEventListener('mouseenter', function() {
        certificateItem.classList.add('transition', 'ease-in-out', 'delay-150', '-translate-y-1', 'scale-105', 'duration-900', 'border-purple-700', 'bg-slate-900');
    });

    certificateItem.addEventListener('mouseleave', function() {
        certificateItem.classList.remove('transition', 'ease-in-out', 'delay-150', '-translate-y-1', 'scale-105', 'duration-900', 'border-purple-700', 'bg-slate-900');
    });
});

const btnIndex = document.querySelectorAll('.btn-item');

btnIndex.forEach(indexItem => {
    indexItem.addEventListener('mouseenter', function() {
        indexItem.classList.add('transition', 'ease-in-out', 'delay-150', '-translate-y-1', 'scale-105', 'duration-900');
        indexItem.querySelector('button').classList.add('border-purple-700');
    });

    indexItem.addEventListener('mouseleave', function() {
        indexItem.classList.remove('transition', 'ease-in-out', 'delay-150', '-translate-y-1', 'scale-105', 'duration-900');
        indexItem.querySelector('button').classList.remove('border-purple-700');
    });
});

const navAnimates = document.querySelectorAll("#nav-animate");

navAnimates.forEach(navAnimate => {
  navAnimate.addEventListener("mouseenter", function() {
    this.classList.add('transition', 'ease-in-out', 'delay-300', '-translate-y-2', 'scale-110', 'duration-900');
  });

  navAnimate.addEventListener("mouseleave", function() {
    this.classList.remove('transition', 'ease-in-out', 'delay-300', '-translate-y-2', 'scale-110', 'duration-900');
  });
});

var opac = anime({
    targets: '.letter',
      opacity:1,
      scale:1,
      easing:'easeInBounce',
      delay: function(el, index) {
        return index * 80;
      },
    direction: 'alternate',
    loop: false
});