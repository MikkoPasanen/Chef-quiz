const questions = [
    {
        question: 'What does "Mise en place" mean?',
        answers: [
            {
                text: "Restaurant where the owner is the chef",
                correct: "false",
            },
            {
                text: "The area where all pots and pans are stored",
                correct: "false",
            },
            {
                text: "The preparation and organisation of ingridients before cooking",
                correct: "true",
            },
            { text: "Traditional french dessert", correct: "false" },
        ],
        img: "./pics/mise-en-place.webp",
    },
    {
        question:
            "What is the Italian term for pasta that is cooked until is just tender to the bite?",
        answers: [
            {
                text: "Al dente",
                correct: "true",
            },
            {
                text: "Al forno",
                correct: "false",
            },
            {
                text: "Al pomodoro",
                correct: "false",
            },
            { text: "Al pesto", correct: "false" },
        ],
        img: "./pics/al-dente.webp",
    },
    {
        question:
            "What fruit is the primary ingredient in a classic French tarte Tatin?",
        answers: [
            {
                text: "Cherry",
                correct: "false",
            },
            {
                text: "Apple",
                correct: "true",
            },
            {
                text: "Peach",
                correct: "false",
            },
            { text: "Mango", correct: "false" },
        ],
        img: "./pics/tarte-tatin.webp",
    },
    {
        question: 'What does it mean to "cream" the butter and sugar',
        answers: [
            {
                text: "Mix them together until smooth",
                correct: "false",
            },
            {
                text: "Beat them until light and fluffy",
                correct: "true",
            },
            {
                text: "Heat them to a liquid state",
                correct: "false",
            },
            { text: "Add cream to the mixture", correct: "false" },
        ],
        img: "./pics/cream.webp",
    },
    {
        question:
            "Which type of sugar is oftern used for making a glossy caramel topping on desserts?",
        answers: [
            {
                text: "Granulated sugar",
                correct: "false",
            },
            {
                text: "Powdered sugar",
                correct: "false",
            },
            {
                text: "Caster sugar",
                correct: "false",
            },
            { text: "Demerara sugar", correct: "true" },
        ],
        img: "./pics/sugars.webp",
    },
    {
        question: "What gives croissants their characteristic flaky texture?",
        answers: [
            {
                text: "Baking powder",
                correct: "false",
            },
            {
                text: "Layers of butter and dough",
                correct: "true",
            },
            {
                text: "Yeast",
                correct: "false",
            },
            { text: "Milk", correct: "false" },
        ],
        img: "./pics/croissants.webp",
    },
    {
        question: "What is traditionally the butchers cut of beef?",
        answers: [
            {
                text: "Hanger",
                correct: "true",
            },
            {
                text: "Entrecote",
                correct: "false",
            },
            {
                text: "Flank",
                correct: "false",
            },
            { text: "Loin", correct: "false" },
        ],
        img: "./pics/butchers-cut.webp",
    },
    {
        question: "How many in a bakers dozen?",
        answers: [
            {
                text: "12",
                correct: "false",
            },
            {
                text: "11",
                correct: "false",
            },
            {
                text: "13",
                correct: "true",
            },
            { text: "16", correct: "false" },
        ],
        img: "./pics/bakers-dozen.webp",
    },
    {
        question: "What chef ranks between a Sous Chef and a Commie Chef?",
        answers: [
            {
                text: "Pastry Chef",
                correct: "false",
            },
            {
                text: "Chef de Cuisine",
                correct: "false",
            },
            {
                text: "Chef de Partie",
                correct: "true",
            },
            { text: "Executive Chef", correct: "false" },
        ],
        img: "./pics/chef-de-partie.webp",
    },
    {
        question: "What kind of pasta is this?",
        answers: [
            {
                text: "Spagetti",
                correct: "false",
            },
            {
                text: "Penne",
                correct: "false",
            },
            {
                text: "Tortelloni",
                correct: "false",
            },
            { text: "Linguine", correct: "true" },
        ],
        img: "./pics/linguine.webp",
    },
    {
        question:
            "What cooking technique involves briefly immersing food in boiling water and then immediately placing it in ice?",
        answers: [
            {
                text: "Braising",
                correct: "false",
            },
            {
                text: "Steaming",
                correct: "false",
            },
            {
                text: "Blanching",
                correct: "true",
            },
            { text: "Searing", correct: "false" },
        ],
        img: "./pics/blanching.webp",
    },
    {
        question:
            "Which of the following is not a traditional ingredient in a Tiramisu dessert?",
        answers: [
            {
                text: "Marsala wine",
                correct: "false",
            },
            {
                text: "Cocoa powder",
                correct: "false",
            },
            {
                text: "Ladyfingers",
                correct: "false",
            },
            { text: "Cream cheese", correct: "true" },
        ],
        img: "./pics/tiramisu.webp",
    },
    {
        question: 'What does the term "flambé" mean in cooking?',
        answers: [
            {
                text: "To ignite alcohol and create flames briefly",
                correct: "true",
            },
            {
                text: "To marinade food",
                correct: "false",
            },
            {
                text: "To steam food over hot water",
                correct: "false",
            },
            { text: "To cook food in intense heat", correct: "false" },
        ],
        img: "./pics/flambe.webp",
    },
    {
        question:
            "What is the term for the process of cooking by submerging food in fat or oil at a low temperature",
        answers: [
            {
                text: "Frying",
                correct: "false",
            },
            {
                text: "Searing",
                correct: "false",
            },
            {
                text: "Confit",
                correct: "true",
            },
            { text: "Sous vide", correct: "false" },
        ],
        img: "./pics/confit.webp",
    },
    {
        question: "What is the reccomended internal temperature for chicken?",
        answers: [
            {
                text: "75°C",
                correct: "true",
            },
            {
                text: "70°C",
                correct: "false",
            },
            {
                text: "80°C",
                correct: "false",
            },
            { text: "65°C", correct: "false" },
        ],
        img: "./pics/chicken.webp",
    },
    {
        question: "What is a Dead plate?",
        answers: [
            {
                text: "A decorative plate used for presentation",
                correct: "false",
            },
            {
                text: "A tool used to tenderize meat",
                correct: "false",
            },
            {
                text: "A type of special plate for spesific cuisines",
                correct: "false",
            },
            {
                text: "A dish that has gone bad and is inedible",
                correct: "true",
            },
        ],
        img: "./pics/plating.webp",
    },
    {
        question: "In a professional kithcen, what is a family meal?",
        answers: [
            {
                text: "Meal made for families that come in to eat",
                correct: "false",
            },
            {
                text: "Large sized portion of a dish",
                correct: "false",
            },
            {
                text: "Where employees eat together before service",
                correct: "true",
            },
            {
                text: "Old fashioned dishes that are familiar to home cooked food",
                correct: "false",
            },
        ],
        img: "./pics/family-meal.webp",
    },
    {
        question: "What is this herb called?",
        answers: [
            {
                text: "Rosemary",
                correct: "false",
            },
            {
                text: "Dill",
                correct: "true",
            },
            {
                text: "Parsley",
                correct: "false",
            },
            {
                text: "Thyme",
                correct: "false",
            },
        ],
        img: "./pics/dill.webp",
    },
    {
        question: 'In baking what does the term "proofing" refer to?',
        answers: [
            {
                text: "Checking the temperature of the oven",
                correct: "false",
            },
            {
                text: "Adding salt to the mixture",
                correct: "false",
            },
            {
                text: "Brushing pastries with egg wash",
                correct: "false",
            },
            {
                text: "Letting dough rise",
                correct: "true",
            },
        ],
        img: "./pics/proofing.webp",
    },
    {
        question: "What is the term for a pâté made from various fish or seafood?",
        answers: [
            {
                text: "Pâté de poisson",
                correct: "true",
            },
            {
                text: "Rillettes",
                correct: "false",
            },
            {
                text: "Foie gras",
                correct: "false",
            },
            {
                text: "Terrine",
                correct: "false",
            },
        ],
        img: "./pics/pate.webp",
    },
];

export { questions };
