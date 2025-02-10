// Language Toggle Functionality
const languageToggle = document.getElementById('language-toggle');
const elementsToTranslate = {
    'nav-home': { pt: 'Início', es: 'Inicio' },
    'nav-plans': { pt: 'Planos', es: 'Planes' },
    'nav-paths': { pt: 'Trilhas', es: 'Caminos' },
    'nav-test': { pt: 'Teste Seu Inglês', es: 'Prueba Tu Inglés' },
    'nav-blog': { pt: 'Blog', es: 'Blog' },
    'text-01': { pt: 'Aprender Inglês pelo WhatsApp é a solução perfeita para quem busca praticidade e flexibilidade. Com aulas personalizadas e no seu ritmo, você pode estudar de qualquer lugar, a qualquer hora. Além disso, o contato direto com o professor via mensagens permite tirar dúvidas instantaneamente e receber feedbacks rápidos. É a maneira mais moderna e eficiente de dominar o Inglês sem sair de casa!', es: 'Aprender inglés por WhatsApp es la solución perfecta para quienes buscan practicidad y flexibilidad. Con clases personalizadas y a tu ritmo, puedes estudiar desde cualquier lugar, a cualquier hora. Además, el contacto directo con el profesor vía mensajes te permite resolver dudas instantáneamente y recibir retroalimentación rápida. ¡Es la forma más moderna y eficiente de dominar el inglés sin salir de casa!' },
    'home-text': { pt: 'Aprenda inglês de forma simples e prática via WhatsApp.', es: 'Aprende inglés de forma simple y práctica vía WhatsApp.' },
    'plans-title': { pt: 'Planos', es: 'Planes' },
    'plans-text': { pt: 'Escolha o plano que melhor se adapta às suas necessidades.', es: 'Elige el plan que mejor se adapte a tus necesidades.' },
    'paths-title': { pt: 'Caminhos de Aprendizado', es: 'Caminos de Aprendizaje' },
    'paths-text': { pt: 'Selecione o seu nível: Iniciante, Intermediário ou Avançado.', es: 'Selecciona tu nivel: Principiante, Intermedio o Avanzado.' },
    'test-title': { pt: 'Teste Seu Inglês', es: 'Prueba Tu Inglés' },
    'test-text': { pt: 'Descubra o seu nível de inglês com nosso teste rápido.', es: 'Descubre tu nivel de inglés con nuestra prueba rápida.' },
    'blog-title': { pt: 'Blog', es: 'Blog' },
    'blog-text': { pt: 'Dicas e artigos para melhorar o seu inglês.', es: 'Consejos y artículos para mejorar tu inglés.' },
};

let currentLanguage = 'pt';

languageToggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'pt' ? 'es' : 'pt';
    languageToggle.textContent = currentLanguage === 'pt' ? 'Español' : 'Português';
    translatePage(currentLanguage);
});

function translatePage(language) {
    for (const [id, translations] of Object.entries(elementsToTranslate)) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = translations[language];
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
  const logoImg = document.getElementById('logo-img');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  if (navbarCollapse) {
    navbarCollapse.addEventListener('show.bs.collapse', function () {
      // Change logo to "open" version
      logoImg.src = './images/Logo-Open.png';
    });

    navbarCollapse.addEventListener('hide.bs.collapse', function () {
      // Change logo back to default version
      logoImg.src = './images/Logo.png';
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Initialize PC Carousel
  const carouselPC = new bootstrap.Carousel(document.getElementById('carouselPC'), {
      interval: 5000, // 3 seconds
      wrap: true // Enable looping
  });

  // Initialize Mobile Carousel
  const carouselMobile = new bootstrap.Carousel(document.getElementById('carouselMobile'), {
      interval: 5000, // 3 seconds
      wrap: true // Enable looping
  });
});

    // Initialize the carousel
  const carousel = new bootstrap.Carousel(document.getElementById('overlapCarousel'), {
      interval: 3000, // Auto-rotate every 3 seconds
      wrap: true // Enable looping
  });

  // Thumbnail and caption functionality
  const thumbnails = document.querySelectorAll('.thumbnails img');
  const caption = document.getElementById('caption');

  function currentSlide(index) {
      // Update the carousel to the selected slide
      carousel.to(index);

      // Update the active thumbnail
      thumbnails.forEach((thumb, i) => {
          thumb.classList.toggle('active', i === index);
      });

      // Update the caption
      caption.textContent = thumbnails[index].alt;
  }

  // Add event listeners to thumbnails
  thumbnails.forEach((thumb, index) => {
      thumb.addEventListener('click', () => currentSlide(index));
  });

  // Update thumbnails and captions when the carousel slides
  document.getElementById('overlapCarousel').addEventListener('slid.bs.carousel', (event) => {
      const activeIndex = Array.from(event.relatedTarget.parentElement.children).indexOf(event.relatedTarget);
      currentSlide(activeIndex);
  });

  const questions = [
            { q: "Escolha a frase correta:", options: ["I has a book.", "I have a book.", "I am have a book.", "I having a book."], answer: 1 },
            { q: "Qual é a forma correta do verbo 'to be' no presente para 'he'?", options: ["am", "is", "are", "be"], answer: 1 },
            { q: "Complete a frase: 'She _____ to the gym every day.'", options: ["go", "goes", "going", "is go"], answer: 1 },
            { q: "Qual é o passado simples do verbo 'to eat'?", options: ["eated", "ate", "eaten", "eating"], answer: 1 },
            { q: "Escolha a frase correta no passado contínuo:", options: ["I was reading a book.", "I read a book.", "I am reading a book.", "I reading a book."], answer: 0 },
            { q: "Qual é a forma correta do comparativo de 'good'?", options: ["gooder", "more good", "better", "best"], answer: 2 },
            { q: "Complete a frase: 'If I _____ rich, I would travel the world.'", options: ["am", "was", "were", "will be"], answer: 2 },
            { q: "Qual é a forma correta do presente perfeito para 'they'?", options: ["They has eaten.", "They have ate.", "They have eaten.", "They eating."], answer: 2 },
            { q: "Qual é o plural de 'child'?", options: ["childs", "children", "childes", "childen"], answer: 1 },
            { q: "Complete a frase: 'I _____ a sandwich for lunch yesterday.'", options: ["eat", "eats", "ate", "eating"], answer: 2 },
            { q: "Qual é o antônimo de 'expensive'?", options: ["cheap", "big", "small", "rich"], answer: 0 },
            { q: "Escolha a frase correta no futuro simples:", options: ["I will goes to the park.", "I will go to the park.", "I going to the park.", "I go to the park."], answer: 1 },
            { q: "Qual é a forma correta do superlativo de 'happy'?", options: ["happier", "more happy", "happiest", "most happy"], answer: 2 },
            { q: "Complete a frase: 'She _____ never been to Paris.'", options: ["has", "have", "is", "was"], answer: 0 },
            { q: "Qual é a tradução de 'library' em português?", options: ["Livraria", "Biblioteca", "Escola", "Livro"], answer: 1 },
            { q: "Escolha a frase correta no presente contínuo:", options: ["They is playing soccer.", "They are playing soccer.", "They playing soccer.", "They plays soccer."], answer: 1 },
            { q: "Qual é a forma correta do passado de 'to buy'?", options: ["buyed", "bought", "buying", "buys"], answer: 1 },
            { q: "Complete a frase: 'If I _____ you, I would study more.'", options: ["am", "was", "were", "will be"], answer: 2 },
            { q: "Qual é a tradução de 'however' em português?", options: ["Portanto", "No entanto", "Além disso", "Porque"], answer: 1 },
            { q: "Escolha a frase correta no presente perfeito contínuo:", options: ["I have been working all day.", "I has been working all day.", "I am working all day.", "I working all day."], answer: 0 },
            { q: "Qual é o plural de 'mouse' (animal)?", options: ["mouses", "mice", "mousees", "mices"], answer: 1 },
            { q: "Complete a frase: 'He _____ his homework before dinner.'", options: ["finish", "finishes", "finished", "finishing"], answer: 2 },
            { q: "Qual é a forma correta do comparativo de 'bad'?", options: ["badder", "more bad", "worse", "worst"], answer: 2 },
            { q: "Complete a frase: 'We _____ to the beach last weekend.'", options: ["go", "goes", "went", "going"], answer: 2 },
            { q: "Qual é a forma correta do futuro contínuo para 'I'?", options: ["I will be working.", "I will working.", "I will be work.", "I will works."], answer: 0 }
        ];

        const quizContainer = document.getElementById("questions");
        const questionsPerPage = 5;
        let currentPage = 0;

        function renderQuestions(page) {
            quizContainer.innerHTML = "";
            const start = page * questionsPerPage;
            const end = start + questionsPerPage;
            questions.slice(start, end).forEach((question, index) => {
                const div = document.createElement("div");
                div.classList.add("plan");
                div.innerHTML = `<p>${start + index + 1}. ${question.q}</p>`;
                question.options.forEach((option, i) => {
                    div.innerHTML += `<label><input type="radio" name="q${start + index}" value="${i}"> ${option}</label><br>`;
                });
                quizContainer.appendChild(div);
            });

            document.getElementById("prevPage").disabled = page === 0;
            document.getElementById("nextPage").disabled = page === Math.ceil(questions.length / questionsPerPage) - 1;
        }

        document.getElementById("prevPage").addEventListener("click", () => {
            if (currentPage > 0) {
                currentPage--;
                renderQuestions(currentPage);
            }
        });

        document.getElementById("nextPage").addEventListener("click", () => {
            if (currentPage < Math.ceil(questions.length / questionsPerPage) - 1) {
                currentPage++;
                renderQuestions(currentPage);
            }
        });

        function calculateResult() {
            const userName = document.getElementById("userName").value;
            if (!userName) {
                alert("Por favor, insira seu nome.");
                return;
            }

            let score = 0;
            questions.forEach((question, index) => {
                const selected = document.querySelector(`input[name='q${index}']:checked`);
                if (selected && parseInt(selected.value) === question.answer) {
                    score++;
                }
            });

            let level;
            if (score < 4) {
                level = "Beginner - Start A1";
            } else if (score >= 5 && score <= 11) {
                level = "Basic Intermediate - Recommended to keep in A1";
            } else if (score >= 12 && score <= 19) {
                level = "Intermediate - Start A2";
            } else if (score >= 20 && score <= 25) {
                level = "Advanced - Start B1";
            }

            // Atualizar o conteúdo do modal
            document.getElementById("resultLevel").textContent = level;
            document.getElementById("resultDate").textContent = new Date().toLocaleDateString('en-GB');
            document.getElementById("resultScore").textContent = `${score} de ${questions.length}`;
            document.getElementById("progressBar").style.width = `${(score / questions.length) * 100}%`;

            // Configurar link do WhatsApp
            const resultText = `Olá, meu nome é ${userName}. Eu acertei ${score} de ${questions.length} perguntas. Meu nível de inglês é: ${level}.`;
            const whatsappLink = document.getElementById("whatsappLink");
            whatsappLink.href = `https://wa.me/5511945267469?text=${encodeURIComponent(resultText)}`;

            // Exibir modal
            const resultModal = new bootstrap.Modal(document.getElementById('resultModal'));
            resultModal.show();
        }

        // Renderizar primeira página de perguntas
        renderQuestions(currentPage);