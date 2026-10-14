const books = [
  { title: "The Hobbit", author: "J. R. R. Tolkien", genre: "Fantasy", description: "A home-loving hobbit joins a company of dwarves on a quest to reclaim their mountain home.", audience: "All Ages", year: 1937, beginner: true, bestseller: true },
  { title: "A Wizard of Earthsea", author: "Ursula K. Le Guin", genre: "Fantasy", description: "A gifted young wizard’s education leads him into a perilous struggle with a shadow from his past.", audience: "Young Adults", year: 1968 },
  { title: "Harry Potter and the Philosopher’s Stone", author: "J. K. Rowling", genre: "Fantasy", description: "An orphan discovers he is a wizard and begins school in a hidden magical world.", audience: "All Ages", year: 1997, beginner: true, bestseller: true },
  { title: "The Name of the Wind", author: "Patrick Rothfuss", genre: "Fantasy", description: "A gifted musician recounts the events that shaped his reputation as a legendary figure.", audience: "Adults", year: 2007 },
  { title: "Piranesi", author: "Susanna Clarke", genre: "Fantasy", description: "A solitary man explores an immense, mysterious house filled with statues and tides.", audience: "Adults", year: 2020 },
  { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", description: "Elizabeth Bennet navigates family expectations and her changing opinions of the reserved Mr. Darcy.", audience: "Adults", year: 1813 },
  { title: "The Notebook", author: "Nicholas Sparks", genre: "Romance", description: "A man reads the story of a passionate young romance to a woman in a care home.", audience: "Adults", year: 1996, beginner: true, bestseller: true },
  { title: "The Kiss Quotient", author: "Helen Hoang", genre: "Romance", description: "A successful woman hires an escort to help her gain confidence in dating, with unexpected results.", audience: "Adults", year: 2018, beginner: true },
  { title: "Red, White & Royal Blue", author: "Casey McQuiston", genre: "Romance", description: "The son of the U.S. president and a British prince move from public rivalry toward a private connection.", audience: "Adults", year: 2019, beginner: true },
  { title: "Book Lovers", author: "Emily Henry", genre: "Romance", description: "A literary agent and an editor keep crossing paths during a small-town getaway.", audience: "Adults", year: 2022, beginner: true },
  { title: "The Hound of the Baskervilles", author: "Arthur Conan Doyle", genre: "Mystery", description: "Sherlock Holmes investigates a family legend surrounding a frightening hound on the moors.", audience: "All Ages", year: 1902, beginner: true },
  { title: "The Murder of Roger Ackroyd", author: "Agatha Christie", genre: "Mystery", description: "Hercule Poirot investigates a country-house killing where every guest has a possible motive.", audience: "Adults", year: 1926 },
  { title: "The No. 1 Ladies’ Detective Agency", author: "Alexander McCall Smith", genre: "Mystery", description: "Precious Ramotswe opens Botswana’s first women-run detective agency and takes on an assortment of cases.", audience: "Adults", year: 1998, beginner: true },
  { title: "In the Woods", author: "Tana French", genre: "Mystery", description: "A detective investigating a child’s murder finds the case connected to an unresolved mystery from his own childhood.", audience: "Adults", year: 2007 },
  { title: "The Thursday Murder Club", author: "Richard Osman", genre: "Mystery", description: "Four retirement-home residents put their crime-solving hobby to use when a real murder occurs nearby.", audience: "Adults", year: 2020, beginner: true },
  { title: "The Day of the Jackal", author: "Frederick Forsyth", genre: "Thriller", description: "A meticulous assassin plans a high-profile attack while investigators race to identify him.", audience: "Adults", year: 1971 },
  { title: "The Bourne Identity", author: "Robert Ludlum", genre: "Thriller", description: "A man rescued at sea has no memory of his identity and discovers others are searching for him.", audience: "Adults", year: 1980 },
  { title: "The Da Vinci Code", author: "Dan Brown", genre: "Thriller", description: "A symbologist and a cryptologist follow clues hidden in art and historical sites.", audience: "Adults", year: 2003, beginner: true, bestseller: true },
  { title: "Gone Girl", author: "Gillian Flynn", genre: "Thriller", description: "A wife’s disappearance puts her husband under scrutiny as their relationship is examined from different perspectives.", audience: "Adults", year: 2012 },
  { title: "The Silent Patient", author: "Alex Michaelides", genre: "Thriller", description: "A therapist becomes determined to understand why a painter stopped speaking after a shocking event.", audience: "Adults", year: 2019 },
  { title: "Frankenstein", author: "Mary Shelley", genre: "Science Fiction", description: "A young scientist creates a living being and confronts the consequences of his experiment.", audience: "Adults", year: 1818 },
  { title: "Dune", author: "Frank Herbert", genre: "Science Fiction", description: "On a desert planet vital to the empire, a young noble becomes caught up in political and ecological conflict.", audience: "Adults", year: 1965 },
  { title: "The Left Hand of Darkness", author: "Ursula K. Le Guin", genre: "Science Fiction", description: "An envoy visits a world whose people challenge his assumptions about gender, politics, and loyalty.", audience: "Adults", year: 1969 },
  { title: "The Martian", author: "Andy Weir", genre: "Science Fiction", description: "An astronaut stranded on Mars uses ingenuity and science to try to survive.", audience: "Adults", year: 2011, beginner: true },
  { title: "Project Hail Mary", author: "Andy Weir", genre: "Science Fiction", description: "A lone astronaut wakes far from Earth with a mission to solve a threat to humanity.", audience: "Adults", year: 2021, beginner: true },
  { title: "Dracula", author: "Bram Stoker", genre: "Horror", description: "A group of people piece together accounts of a mysterious figure spreading fear across Europe.", audience: "Adults", year: 1897 },
  { title: "The Haunting of Hill House", author: "Shirley Jackson", genre: "Horror", description: "A researcher and his guests investigate a house said to have a disturbing history.", audience: "Adults", year: 1959 },
  { title: "The Shining", author: "Stephen King", genre: "Horror", description: "A family’s winter stay at an isolated hotel becomes increasingly frightening.", audience: "Adults", year: 1977 },
  { title: "Coraline", author: "Neil Gaiman", genre: "Horror", description: "A curious girl discovers a strange parallel home that seems welcoming at first.", audience: "All Ages", year: 2002, beginner: true },
  { title: "Mexican Gothic", author: "Silvia Moreno-Garcia", genre: "Horror", description: "A young woman visits her cousin at a remote English-style mansion in the Mexican countryside.", audience: "Adults", year: 2020 },
  { title: "Things Fall Apart", author: "Chinua Achebe", authorCountry: "Nigeria", genre: "Historical Fiction", description: "A respected Igbo leader faces personal and community upheaval as colonial rule arrives.", audience: "Adults", year: 1958 },
  { title: "The Book Thief", author: "Markus Zusak", genre: "Historical Fiction", description: "In Nazi Germany, a girl finds refuge in books and small acts of kindness amid danger.", audience: "Young Adults", year: 2005, beginner: true },
  { title: "All the Light We Cannot See", author: "Anthony Doerr", genre: "Historical Fiction", description: "A blind French girl and a German boy experience the Second World War from different sides.", audience: "Adults", year: 2014 },
  { title: "The Nightingale", author: "Kristin Hannah", genre: "Historical Fiction", description: "Two sisters in occupied France make very different choices as they try to survive the war.", audience: "Adults", year: 2015, beginner: true },
  { title: "Pachinko", author: "Min Jin Lee", authorCountry: "South Korea", genre: "Historical Fiction", description: "A Korean family’s lives unfold across generations amid migration, discrimination, and change.", audience: "Adults", year: 2017 },
  { title: "Treasure Island", author: "Robert Louis Stevenson", genre: "Adventure", description: "A boy joins a voyage to find buried treasure, where danger and divided loyalties await.", audience: "All Ages", year: 1883, beginner: true },
  { title: "Around the World in Eighty Days", author: "Jules Verne", genre: "Adventure", description: "A meticulous Englishman attempts to circle the globe against a tight deadline.", audience: "All Ages", year: 1872, beginner: true },
  { title: "The Count of Monte Cristo", author: "Alexandre Dumas", genre: "Adventure", description: "After an unjust imprisonment, a young sailor builds a new identity and plans his future.", audience: "Adults", year: 1844 },
  { title: "Hatchet", author: "Gary Paulsen", genre: "Adventure", description: "After a plane crash, a boy must learn to survive alone in the wilderness.", audience: "Young Adults", year: 1987, beginner: true },
  { title: "Life of Pi", author: "Yann Martel", genre: "Adventure", description: "A teenager survives a shipwreck and faces an extraordinary journey across the ocean.", audience: "Adults", year: 2001 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Literary Fiction", description: "A child observes her community’s response to a trial and the injustices surrounding it.", audience: "Adults", year: 1960, beginner: true },
  { title: "Beloved", author: "Toni Morrison", genre: "Literary Fiction", description: "A formerly enslaved woman and her family struggle with the lasting effects of their past.", audience: "Adults", year: 1987 },
  { title: "The God of Small Things", author: "Arundhati Roy", genre: "Literary Fiction", description: "Twins in Kerala grow up amid family tensions and the strict social rules of their community.", audience: "Adults", year: 1997 },
  { title: "The Kite Runner", author: "Khaled Hosseini", genre: "Literary Fiction", description: "A man looks back on a childhood friendship in Afghanistan and the choices that shaped his life.", audience: "Adults", year: 2003, beginner: true },
  { title: "A Man Called Ove", author: "Fredrik Backman", genre: "Literary Fiction", description: "A rigid, lonely neighbor’s routines are disrupted by the people who move in next door.", audience: "Adults", year: 2012, beginner: true },
  { title: "Don Quixote", author: "Miguel de Cervantes", genre: "Adventure", description: "An idealistic would-be knight and his practical squire set off on comic adventures across Spain.", audience: "Adults", year: 1605, bestseller: true },
  { title: "A Tale of Two Cities", author: "Charles Dickens", genre: "Historical Fiction", description: "Two men with a remarkable resemblance find their lives caught up in the French Revolution.", audience: "Adults", year: 1859, bestseller: true },
  { title: "The Little Prince", author: "Antoine de Saint-Exupéry", genre: "Fantasy", description: "A stranded pilot meets a young traveler whose visits to distant worlds reveal what matters most.", audience: "All Ages", year: 1943, beginner: true, bestseller: true },
  { title: "The Alchemist", author: "Paulo Coelho", genre: "Adventure", description: "A young shepherd travels from Spain toward Egypt in search of treasure and a deeper purpose.", audience: "Adults", year: 1988, beginner: true, bestseller: true },
  { title: "And Then There Were None", author: "Agatha Christie", genre: "Mystery", description: "Ten strangers arrive on an isolated island, where a mysterious voice accuses each of them of a crime.", audience: "Adults", year: 1939, bestseller: true },
  { title: "The Lord of the Rings", author: "J. R. R. Tolkien", genre: "Fantasy", description: "A hobbit and a fellowship undertake a perilous journey to destroy a powerful ring.", audience: "All Ages", year: 1954, bestseller: true },
  { title: "Twilight", author: "Stephenie Meyer", genre: "Romance", description: "A teenager moves to a rainy town and falls for a classmate with a dangerous secret.", audience: "Young Adults", year: 2005, beginner: true, bestseller: true },
  { title: "The Hunger Games", author: "Suzanne Collins", genre: "Science Fiction", description: "A teenager volunteers for a televised survival contest in a divided future society.", audience: "Young Adults", year: 2008, beginner: true, bestseller: true },
  { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", genre: "Mystery", description: "A journalist and a brilliant investigator revisit a wealthy family's decades-old disappearance.", audience: "Adults", year: 2005, bestseller: true },
  { title: "The Fault in Our Stars", author: "John Green", genre: "Romance", description: "Two teenagers meet at a support group and build a thoughtful, funny relationship.", audience: "Young Adults", year: 2012, beginner: true, bestseller: true },
  { title: "The Lion, the Witch and the Wardrobe", author: "C. S. Lewis", genre: "Fantasy", description: "Four siblings enter a winter-bound magical land through an old wardrobe.", audience: "All Ages", year: 1950, beginner: true, bestseller: true },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Literary Fiction", description: "A mysterious millionaire's lavish parties draw a young neighbor into a story of longing and reinvention.", audience: "Adults", year: 1925, beginner: true, bestseller: true },
  { title: "Atomic Habits", author: "James Clear", genre: "Motivational", description: "A practical guide to building lasting routines through small, consistent changes.", audience: "Adults", year: 2018, beginner: true, bestseller: true },
  { title: "Man's Search for Meaning", author: "Viktor E. Frankl", genre: "Motivational", description: "A psychiatrist reflects on finding purpose and inner strength through profound hardship.", audience: "Adults", year: 1946, bestseller: true },
  { title: "The 7 Habits of Highly Effective People", author: "Stephen R. Covey", genre: "Motivational", description: "A guide to personal effectiveness built around values, purposeful choices, and long-term growth.", audience: "Adults", year: 1989, bestseller: true },
  { title: "How to Win Friends and Influence People", author: "Dale Carnegie", genre: "Motivational", description: "A classic guide to communication, relationships, and connecting thoughtfully with others.", audience: "Adults", year: 1936, bestseller: true },
  { title: "The Power of Now", author: "Eckhart Tolle", genre: "Motivational", description: "A spiritual guide to mindfulness and finding greater presence in everyday life.", audience: "Adults", year: 1997, bestseller: true },
  { title: "Little Women", author: "Louisa May Alcott", authorCountry: "United States", genre: "Literary Fiction", description: "The four March sisters grow up, pursue their ambitions, and support one another through life's changes.", audience: "All Ages", year: 1868, beginner: true },
  { title: "Of Mice and Men", author: "John Steinbeck", authorCountry: "United States", genre: "Literary Fiction", description: "Two migrant workers hold on to a shared dream while searching for work during the Great Depression.", audience: "Adults", year: 1937 },
  { title: "The Color Purple", author: "Alice Walker", authorCountry: "United States", genre: "Literary Fiction", description: "A woman in the American South finds her voice, connection, and independence over many years.", audience: "Adults", year: 1982 },
  { title: "Journey to the West", author: "Wu Cheng'en", authorCountry: "China", genre: "Fantasy", description: "A mischievous monkey king joins a monk and companions on a fantastical pilgrimage.", audience: "All Ages", year: 1592 },
  { title: "To Live", author: "Yu Hua", authorCountry: "China", genre: "Historical Fiction", description: "A man looks back on a family's resilience through sweeping changes in twentieth-century China.", audience: "Adults", year: 1993 },
  { title: "The Three-Body Problem", author: "Liu Cixin", authorCountry: "China", genre: "Science Fiction", description: "A secret scientific project connects humanity with a civilization from a distant star system.", audience: "Adults", year: 2008 },
  { title: "The Vegetarian", author: "Han Kang", authorCountry: "South Korea", genre: "Literary Fiction", description: "A woman's decision to stop eating meat unsettles her family and reshapes their relationships.", audience: "Adults", year: 2007 },
  { title: "Kim Jiyoung, Born 1982", author: "Cho Nam-joo", authorCountry: "South Korea", genre: "Literary Fiction", description: "A woman's everyday experiences illuminate the expectations facing women in contemporary South Korea.", audience: "Adults", year: 2016, beginner: true },
  { title: "Please Look After Mom", author: "Shin Kyung-sook", authorCountry: "South Korea", genre: "Literary Fiction", description: "A family searches for their missing mother and reflects on the life and care they took for granted.", audience: "Adults", year: 2008 },
  { title: "Twisted Love", author: "Ana Huang", genre: "Romance", description: "A guarded entrepreneur and his best friend's sister grow closer while confronting secrets from the past.", audience: "Adults", year: 2021, series: "Twisted", seriesOrder: 1 },
  { title: "Twisted Games", author: "Ana Huang", genre: "Romance", description: "A principled princess and the bodyguard assigned to protect her navigate duty and forbidden feelings.", audience: "Adults", year: 2021, series: "Twisted", seriesOrder: 2 },
  { title: "Twisted Hate", author: "Ana Huang", genre: "Romance", description: "Two longtime adversaries find their rivalry complicated by an unexpected attraction.", audience: "Adults", year: 2022, series: "Twisted", seriesOrder: 3 },
  { title: "Twisted Lies", author: "Ana Huang", genre: "Romance", description: "A reserved entrepreneur and his warm-hearted neighbor enter a relationship shaped by secrets and ambition.", audience: "Adults", year: 2022, series: "Twisted", seriesOrder: 4 },
  { title: "If We Ever Meet Again", author: "Ana Huang", genre: "Romance", description: "Two young travelers meet abroad and discover a connection that changes the course of their lives.", audience: "Adults", year: 2020, series: "If Love", seriesOrder: 1 },
  { title: "If the Sun Never Sets", author: "Ana Huang", genre: "Romance", description: "Former lovers get a second chance when their paths cross again years after a painful breakup.", audience: "Adults", year: 2020, series: "If Love", seriesOrder: 2 },
  { title: "If Love Had a Price", author: "Ana Huang", genre: "Romance", description: "A determined young woman and a wealthy businessman make a bargain that complicates their growing attraction.", audience: "Adults", year: 2020, series: "If Love", seriesOrder: 3 },
  { title: "If We Were Perfect", author: "Ana Huang", genre: "Romance", description: "Two former partners confront old feelings and the question of whether love deserves another chance.", audience: "Adults", year: 2021, series: "If Love", seriesOrder: 4 },
  { title: "King of Wrath", author: "Ana Huang", genre: "Romance", description: "A powerful businessman and an independent woman enter an arranged marriage neither expected.", audience: "Adults", year: 2022, series: "Kings of Sin", seriesOrder: 1 },
  { title: "King of Pride", author: "Ana Huang", genre: "Romance", description: "A reserved billionaire and a spirited bartender find their carefully controlled worlds colliding.", audience: "Adults", year: 2023, series: "Kings of Sin", seriesOrder: 2 },
  { title: "King of Greed", author: "Ana Huang", genre: "Romance", description: "An ambitious tycoon must reckon with what he sacrificed when the woman he loves walks away.", audience: "Adults", year: 2023, series: "Kings of Sin", seriesOrder: 3 },
  { title: "King of Sloth", author: "Ana Huang", genre: "Romance", description: "A driven publicist tries to motivate a laid-back heir, but their professional arrangement grows personal.", audience: "Adults", year: 2024, series: "Kings of Sin", seriesOrder: 4 },
  { title: "King of Envy", author: "Ana Huang", genre: "Romance", description: "A guarded billionaire's fixation on a woman engaged to another man sets a dangerous romance in motion.", audience: "Adults", year: 2025, series: "Kings of Sin", seriesOrder: 5 },
  { title: "King of Gluttony", author: "Ana Huang", genre: "Romance", description: "Two people from powerful families must decide whether duty or desire will shape their future.", audience: "Adults", year: 2026, series: "Kings of Sin", seriesOrder: 6 },
  { title: "King of Lust", author: "Ana Huang", genre: "Romance", description: "A new Kings of Sin romance about desire, ambition, and the cost of getting what you want.", audience: "Adults", year: 2026, series: "Kings of Sin", seriesOrder: 7, comingSoon: true },
  { title: "The Striker", author: "Ana Huang", genre: "Romance", description: "A world-famous footballer and a determined woman find their ambitions and attraction on a collision course.", audience: "Adults", year: 2024, series: "Gods of the Game", seriesOrder: 1 },
  { title: "The Defender", author: "Ana Huang", genre: "Romance", description: "A star football defender faces a complicated connection that challenges his focus on the game.", audience: "Adults", year: 2025, series: "Gods of the Game", seriesOrder: 2 },
  { title: "The Keeper", author: "Ana Huang", genre: "Romance", description: "A football goalkeeper finds that protecting his heart may be harder than protecting the net.", audience: "Adults", year: 2026, series: "Gods of the Game", seriesOrder: 3 },
  { title: "Half of a Yellow Sun", author: "Chimamanda Ngozi Adichie", authorCountry: "Nigeria", genre: "Historical Fiction", description: "Three lives intersect during the Nigerian-Biafran War, amid upheaval, loyalty, and loss.", audience: "Adults", year: 2006 },
  { title: "Palace Walk", author: "Naguib Mahfouz", authorCountry: "Egypt", genre: "Historical Fiction", description: "A Cairo family navigates tradition and change during the early twentieth century.", audience: "Adults", year: 1956 },
  { title: "Norwegian Wood", author: "Haruki Murakami", authorCountry: "Japan", genre: "Literary Fiction", description: "A quiet university student looks back on love, grief, and growing up in 1960s Tokyo.", audience: "Adults", year: 1987 },
  { title: "The Tale of Genji", author: "Murasaki Shikibu", authorCountry: "Japan", genre: "Literary Fiction", description: "A classic court novel follows Prince Genji's relationships and changing fortunes in Heian-era Japan.", audience: "Adults", year: 1008 },
  { title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", authorCountry: "Colombia", genre: "Literary Fiction", description: "Several generations of the Buendía family live through love, conflict, and change in the town of Macondo.", audience: "Adults", year: 1967 },
  { title: "Love in the Time of Cholera", author: "Gabriel García Márquez", authorCountry: "Colombia", genre: "Romance", description: "Two people revisit a youthful love and the choices that shaped their lives over many years.", audience: "Adults", year: 1985 },
  { title: "The House of the Spirits", author: "Isabel Allende", authorCountry: "Chile", genre: "Literary Fiction", description: "The Trueba family story spans generations amid political change and extraordinary events.", audience: "Adults", year: 1982 },
  { title: "My Name Is Red", author: "Orhan Pamuk", authorCountry: "Turkey", genre: "Mystery", description: "An investigation in sixteenth-century Istanbul unfolds among artists working for the Sultan.", audience: "Adults", year: 1998 },
  { title: "The Name of the Rose", author: "Umberto Eco", authorCountry: "Italy", genre: "Mystery", description: "A Franciscan friar investigates a series of deaths at a remote medieval monastery.", audience: "Adults", year: 1980 },
  { title: "The Stranger", author: "Albert Camus", authorCountry: "France", genre: "Literary Fiction", description: "An emotionally detached man faces a trial that questions his actions and place in society.", audience: "Adults", year: 1942 },
  { title: "Crime and Punishment", author: "Fyodor Dostoevsky", authorCountry: "Russia", genre: "Literary Fiction", description: "A former student in St. Petersburg wrestles with guilt after committing a serious crime.", audience: "Adults", year: 1866 },
  { title: "Anna Karenina", author: "Leo Tolstoy", authorCountry: "Russia", genre: "Literary Fiction", description: "Two Russian families navigate love, marriage, and society through intersecting lives.", audience: "Adults", year: 1878 },
  { title: "The White Tiger", author: "Aravind Adiga", authorCountry: "India", genre: "Literary Fiction", description: "An entrepreneur recounts his journey from a village to the business world of modern India.", audience: "Adults", year: 2008 },
  { title: "The Shadow of the Wind", author: "Carlos Ruiz Zafón", authorCountry: "Spain", genre: "Mystery", description: "A boy in postwar Barcelona searches for the truth about an elusive novelist and his forgotten books.", audience: "Adults", year: 2001 },
  { title: "Disgrace", author: "J. M. Coetzee", authorCountry: "South Africa", genre: "Literary Fiction", description: "A professor's life changes after a personal scandal, prompting a reckoning with dignity and responsibility.", audience: "Adults", year: 1999 },
  { title: "A Thousand Splendid Suns", author: "Khaled Hosseini", authorCountry: "Afghanistan", genre: "Historical Fiction", description: "Two Afghan women form a bond and endure decades of political upheaval and personal hardship.", audience: "Adults", year: 2007 }
];

const coverPalettes = [
  ["#405749", "#e2c99d"], ["#405b70", "#dfc88e"], ["#77534b", "#e5c9a3"],
  ["#3a4b63", "#d4b674"], ["#69735b", "#ead7b5"], ["#a36650", "#f0d3a2"],
  ["#66566b", "#e6cfab"], ["#406e70", "#d6c396"], ["#83544c", "#e8c39a"]
];
const genreNames = ["All", ...new Set(books.map((book) => book.genre))];
const grid = document.querySelector("#book-grid");
const genreFilters = document.querySelector("#genre-filters");
const searchInput = document.querySelector("#search-input");
const sortSelect = document.querySelector("#sort-select");
const emptyState = document.querySelector("#empty-state");
const savedToggle = document.querySelector("#saved-toggle");
const savedCount = document.querySelector("#saved-count");
const collectionTitle = document.querySelector("#collection-title");
const resultsSummary = document.querySelector("#results-summary");
const activeFilterLabel = document.querySelector("#active-filter-label");
const footerCount = document.querySelector("#footer-count");
const savedBooks = new Set(JSON.parse(localStorage.getItem("reading-room-saved") || "[]"));
const chatPanel = document.querySelector("#chat-panel");
const chatLauncher = document.querySelector("#chat-launcher");
const chatMessages = document.querySelector("#chat-messages");
const chatForm = document.querySelector("#chat-form");
const chatInput = document.querySelector("#chat-input");
const chatMood = document.querySelector("#chat-mood");
const chatAge = document.querySelector("#chat-age");
const chatGenre = document.querySelector("#chat-genre");
let activeGenre = "All";
let showingSaved = false;
let chatBusy = false;
const chatHistory = [];

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function renderGenres() {
  genreFilters.innerHTML = genreNames.map((genre) => `
    <button class="genre-chip" type="button" data-genre="${escapeHtml(genre)}" aria-pressed="${genre === activeGenre}">${escapeHtml(genre)}</button>
  `).join("");
}

function makeCoverArtwork(genre, index, cover, accent) {
  const centerX = 64 + (index * 17 % 23) - 11;
  const centerY = 89 + (index * 13 % 25) - 12;
  const artwork = {
    Fantasy: `<path d="M${centerX - 31} 150V${centerY + 8}a31 31 0 0 1 62 0v${150 - centerY - 8}" fill="none" stroke="${accent}" stroke-width="2" opacity=".78"/><circle cx="${centerX}" cy="${centerY - 5}" r="10" fill="${accent}" opacity=".82"/><path d="m${centerX - 42} ${centerY + 28} 7-13 7 13m45 0 7-13 7 13" fill="${accent}" opacity=".8"/>`,
    Romance: `<circle cx="${centerX}" cy="${centerY}" r="24" fill="none" stroke="${accent}" stroke-width="1" opacity=".6"/><path d="M${centerX} ${centerY - 20}c-17-20-28 1 0 22 28-21 17-42 0-22Zm-20 0c-20-17-28 5-2 23-27 20-10 35 8 8 18 27 35 12 8-8 26-18 18-40-2-23Z" fill="${accent}" opacity=".68"/>`,
    Mystery: `<circle cx="${centerX}" cy="${centerY}" r="22" fill="${accent}" opacity=".82"/><circle cx="${centerX + 10}" cy="${centerY - 8}" r="21" fill="${cover}"/><path d="M18 150h92M30 160h72" stroke="${accent}" stroke-width="1" opacity=".48"/><circle cx="91" cy="48" r="1.5" fill="${accent}"/>`,
    Thriller: `<path d="m-12 ${centerY + 40} 66-94m-36 105 85-120m-45 132 76-107m-39 119 62-87" stroke="${accent}" stroke-width="2" opacity=".56"/><path d="M0 145h128" stroke="${accent}" opacity=".6"/>`,
    "Science Fiction": `<ellipse cx="${centerX}" cy="${centerY}" rx="43" ry="16" fill="none" stroke="${accent}" stroke-width="1.5" transform="rotate(-25 ${centerX} ${centerY})" opacity=".78"/><ellipse cx="${centerX}" cy="${centerY}" rx="43" ry="16" fill="none" stroke="${accent}" stroke-width="1" transform="rotate(35 ${centerX} ${centerY})" opacity=".55"/><circle cx="${centerX}" cy="${centerY}" r="12" fill="${accent}" opacity=".85"/><circle cx="93" cy="51" r="2" fill="${accent}"/>`,
    Horror: `<circle cx="${centerX}" cy="${centerY}" r="34" fill="none" stroke="${accent}" stroke-width="1" opacity=".38"/><circle cx="${centerX}" cy="${centerY}" r="22" fill="none" stroke="${accent}" stroke-width="1" opacity=".57"/><circle cx="${centerX}" cy="${centerY}" r="9" fill="${accent}" opacity=".7"/><path d="M0 139q32-20 64 0t64 0v40H0Z" fill="${cover}" opacity=".8"/>`,
    "Historical Fiction": `<circle cx="${centerX}" cy="${centerY}" r="24" fill="${accent}" opacity=".72"/><path d="M12 ${centerY + 27}h104m-95 8h86m-76 8h66" stroke="${accent}" stroke-width="1" opacity=".56"/>`,
    Adventure: `<path d="m5 147 35-54 19 26 23-40 42 68H5Z" fill="${accent}" opacity=".68"/><path d="m40 93 10 15-11-4-9 9m42-34 13 21-13-6-9 9" fill="${cover}" opacity=".76"/><circle cx="${centerX}" cy="${centerY - 48}" r="9" fill="${accent}" opacity=".76"/>`,
    "Literary Fiction": `<path d="M${centerX} 158V${centerY - 17}m0 53q-31-17-29-45 28 3 29 35m0-16q28-24 34-48-29 3-34 38" fill="none" stroke="${accent}" stroke-width="2" opacity=".72"/><path d="M${centerX} ${centerY + 19}q-20-18-19-34 19 3 19 24m0 1q19-18 25-36-22 5-25 27" fill="${accent}" opacity=".5"/>`,
    Motivational: `<circle cx="${centerX}" cy="${centerY}" r="26" fill="none" stroke="${accent}" stroke-width="1" opacity=".48"/><circle cx="${centerX}" cy="${centerY}" r="17" fill="none" stroke="${accent}" stroke-width="1" opacity=".7"/><circle cx="${centerX}" cy="${centerY}" r="8" fill="${accent}" opacity=".84"/><path d="M15 156h22v-10h19v-10h19v-10h19v-10h19" fill="none" stroke="${accent}" stroke-width="2" opacity=".7"/>`
  }[genre] || `<circle cx="${centerX}" cy="${centerY}" r="27" fill="none" stroke="${accent}" stroke-width="1.5" opacity=".68"/><path d="M${centerX - 35} ${centerY + 37}h70" stroke="${accent}" opacity=".58"/>`;
  return `<svg class="cover-art" viewBox="0 0 128 183" role="presentation" aria-hidden="true"><defs><linearGradient id="cover-gradient-${index}" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${cover}"/><stop offset="1" stop-color="${cover}" stop-opacity=".56"/></linearGradient></defs><path fill="url(#cover-gradient-${index})" d="M0 0h128v183H0z"/>${artwork}<path d="M8 8h112v167H8z" fill="none" stroke="${accent}" stroke-opacity=".5"/></svg>`;
}

function makeBookCard(book, index) {
  const [cover, accent] = coverPalettes[index % coverPalettes.length];
  const safeTitle = escapeHtml(book.title);
  const saved = savedBooks.has(book.title);
  return `
    <article class="book-card">
      <div class="cover-wrap">
        <div class="book-cover" style="--cover:${cover};--accent:${accent}" aria-label="Original illustrated cover for ${safeTitle}">
          ${makeCoverArtwork(book.genre, index, cover, accent)}
          <span class="cover-top">${book.comingSoon ? "COMING SOON" : book.bestseller ? "A WORLDWIDE FAVORITE" : book.beginner ? "A LOVELY PLACE TO START" : "A STORY TO GET LOST IN"}</span>
          <span class="cover-title">${safeTitle}</span>
          <span class="cover-author">${escapeHtml(book.author)}</span>
        </div>
        <button class="save-book" type="button" data-save="${safeTitle}" aria-label="${saved ? "Remove" : "Add"} ${safeTitle} ${saved ? "from" : "to"} My shelf" aria-pressed="${saved}">
          <svg viewBox="0 0 20 20" fill="${saved ? "currentColor" : "none"}" aria-hidden="true"><path d="M5.5 3.5h9a1 1 0 0 1 1 1v12l-5.5-3-5.5 3v-12a1 1 0 0 1 1-1Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
        </button>
        <span class="genre-label">${escapeHtml(book.genre)}</span>
      </div>
      <div class="book-info">
        <h3 class="book-title" title="${safeTitle}">${safeTitle}</h3>
        <p class="book-author">${escapeHtml(book.author)}${book.authorCountry ? ` · ${escapeHtml(book.authorCountry)}` : ""}${book.series ? ` · ${escapeHtml(book.series)} #${book.seriesOrder}` : ""}</p>
        <p class="book-description">${escapeHtml(book.description)}</p>
        <div class="book-meta"><span>${book.comingSoon ? `Coming ${book.year}` : book.year}</span><span class="audience">${escapeHtml(book.audience)}</span></div>
      </div>
    </article>`;
}

function renderBooks() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  let filteredBooks = books.filter((book) => {
    const matchesGenre = activeGenre === "All" || book.genre === activeGenre;
    const matchesSaved = !showingSaved || savedBooks.has(book.title);
    const searchable = `${book.title} ${book.author} ${book.authorCountry || ""} ${book.series || ""} ${book.genre} ${book.description} ${book.audience} ${book.year}`.toLocaleLowerCase();
    return matchesGenre && matchesSaved && (!query || searchable.includes(query));
  });

  if (sortSelect.value === "title") filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
  if (sortSelect.value === "newest") filteredBooks.sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
  if (sortSelect.value === "oldest") filteredBooks.sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));

  grid.innerHTML = filteredBooks.map((book) => makeBookCard(book, books.indexOf(book))).join("");
  grid.hidden = filteredBooks.length === 0;
  emptyState.hidden = filteredBooks.length !== 0;
  collectionTitle.innerHTML = showingSaved
    ? 'Your personal bookshelf<span class="heading-period">.</span>'
    : 'Stories worth getting lost in<span class="heading-period">.</span>';
  resultsSummary.textContent = showingSaved
    ? `${filteredBooks.length} saved ${filteredBooks.length === 1 ? "story" : "stories"}, just for you.`
    : "Explore a growing collection of novels from authors around the world.";
  activeFilterLabel.textContent = `${activeGenre === "All" ? "Showing all genres" : `Showing ${activeGenre}`} · ${filteredBooks.length} ${filteredBooks.length === 1 ? "book" : "books"}`;
  footerCount.textContent = `${filteredBooks.length} ${filteredBooks.length === 1 ? "BOOK" : "BOOKS"} · ${genreNames.length - 1} GENRES`;
  savedCount.textContent = savedBooks.size;
}

genreFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-genre]");
  if (!button) return;
  activeGenre = button.dataset.genre;
  renderGenres();
  renderBooks();
});

searchInput.addEventListener("input", renderBooks);
sortSelect.addEventListener("change", renderBooks);

savedToggle.addEventListener("click", () => {
  showingSaved = !showingSaved;
  savedToggle.setAttribute("aria-pressed", String(showingSaved));
  activeGenre = "All";
  renderGenres();
  renderBooks();
  document.querySelector("#collection").scrollIntoView({ behavior: "smooth", block: "start" });
});

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-save]");
  if (!button) return;
  const title = button.dataset.save;
  if (savedBooks.has(title)) savedBooks.delete(title);
  else savedBooks.add(title);
  localStorage.setItem("reading-room-saved", JSON.stringify([...savedBooks]));
  savedCount.textContent = savedBooks.size;
  renderBooks();
});

function resetFilters() {
  activeGenre = "All";
  showingSaved = false;
  searchInput.value = "";
  sortSelect.value = "featured";
  savedToggle.setAttribute("aria-pressed", "false");
  renderGenres();
  renderBooks();
}

document.querySelector("#clear-filters").addEventListener("click", resetFilters);
document.querySelector("#empty-reset").addEventListener("click", resetFilters);

const recommendationGenres = {
  Fantasy: ["fantasy", "magical", "magic", "wizard", "dragon", "mythical"],
  Romance: ["romance", "romantic", "love story", "love stories", "relationship"],
  Mystery: ["mystery", "mysterious", "detective", "whodunit", "cozy", "cosy", "puzzle", "sleuth"],
  Thriller: ["thriller", "suspense", "suspenseful", "fast-paced", "fast paced", "page-turner", "page turner"],
  "Science Fiction": ["science fiction", "sci-fi", "scifi", "space", "spaceship", "futuristic", "dystopian", "astronaut"],
  Horror: ["horror", "scary", "spooky", "creepy", "haunted", "supernatural"],
  "Historical Fiction": ["historical fiction", "historical", "history", "wartime", "world war", "period drama"],
  Adventure: ["adventure", "adventurous", "exploration", "quest", "survival", "journey"],
  "Literary Fiction": ["literary fiction", "literary", "character-driven", "character driven", "thought-provoking", "thought provoking"],
  Motivational: ["motivational", "motivation", "inspirational", "inspiration", "self-help", "self help", "personal growth"]
};
const recommendationMoods = {
  cozy: { label: "cozy & comforting", genres: ["Mystery", "Literary Fiction"], terms: ["cozy", "cosy", "gentle", "comforting", "warm", "small-town", "neighbor"] },
  funny: { label: "funny & light", genres: ["Adventure", "Literary Fiction", "Romance"], terms: ["comic", "comedy", "funny", "humor", "humour", "witty", "light-hearted"] },
  uplifting: { label: "uplifting & hopeful", genres: ["Adventure", "Fantasy", "Literary Fiction", "Romance", "Motivational"], terms: ["hope", "hopeful", "kindness", "purpose", "friendship", "inspiring", "strength", "growth", "mindfulness"] },
  romantic: { label: "romantic", genres: ["Romance"], terms: ["romance", "love", "relationship"] },
  adventurous: { label: "adventurous", genres: ["Adventure", "Fantasy", "Science Fiction"], terms: ["adventure", "journey", "quest", "voyage", "travel", "survive"] },
  mysterious: { label: "mysterious & suspenseful", genres: ["Mystery", "Thriller"], terms: ["mystery", "mysterious", "investigat", "clue", "secret", "suspense"] },
  "thought-provoking": { label: "thought-provoking", genres: ["Literary Fiction", "Science Fiction", "Historical Fiction"], terms: ["question", "assumption", "injustice", "consequence", "society", "meaning"] },
  spooky: { label: "spooky", genres: ["Horror"], terms: ["frightening", "haunted", "fear", "disturbing", "strange", "supernatural"] }
};
const beginnerPrompt = /\b(beginner|beginning|easy|easier|accessible|approachable|simple|new to reading|getting back into reading|starting out|quick read|short read)\b/i;
const bestsellerPrompt = /\b(best[\s-]?sell(?:er|ers|ing)|most popular|popular novels|world(?:'s)? best|global(?:ly)? popular|worldwide favorite|famous novels)\b/i;
const audiencePrompt = /\b(young adult|young adults|ya|teen|teens|teenager|teenagers)\b/i;
const allAgesPrompt = /\b(all ages|family friendly|family-friendly|for kids|for children|child friendly|children)\b/i;
const adultPrompt = /\b(for adults|adult fiction|grown-up|grown up)\b/i;
const anaHuangPrompt = /\bana huang\b/i;
const anaHuangSeries = ["Twisted", "If Love", "Kings of Sin", "Gods of the Game"];
const authorCountryPrompts = {
  "United States": /\b(united states|u\.?s\.?a?\.?|american)\b/i,
  China: /\b(china|chinese)\b/i,
  "South Korea": /\b(south korea|south korean|korea|korean)\b/i,
  Nigeria: /\b(nigeria|nigerian)\b/i,
  Egypt: /\b(egypt|egyptian)\b/i,
  Japan: /\b(japan|japanese)\b/i,
  Colombia: /\b(colombia|colombian)\b/i,
  Chile: /\b(chile|chilean)\b/i,
  Turkey: /\b(turkey|turkish)\b/i,
  Italy: /\b(italy|italian)\b/i,
  France: /\b(france|french)\b/i,
  Russia: /\b(russia|russian)\b/i,
  India: /\b(india|indian)\b/i,
  Spain: /\b(spain|spanish)\b/i,
  "South Africa": /\b(south africa|south african)\b/i,
  Afghanistan: /\b(afghanistan|afghan)\b/i
};
const chatStopWords = new Set(["a", "an", "and", "are", "book", "books", "for", "i", "in", "is", "it", "me", "of", "one", "read", "recommend", "recommendation", "recommendations", "something", "story", "stories", "the", "to", "want", "with"]);

function detectRequestedGenre(message) {
  let normalizedMessage = message.toLocaleLowerCase();
  for (const [mood, preferences] of Object.entries(recommendationMoods)) {
    normalizedMessage = normalizedMessage.replaceAll(mood, " ").replaceAll(preferences.label, " ");
  }
  return Object.entries(recommendationGenres).find(([, terms]) =>
    terms.some((term) => normalizedMessage.includes(term))
  )?.[0];
}

function detectRequestedMood(message) {
  const normalizedMessage = message.toLocaleLowerCase();
  return Object.entries(recommendationMoods).find(([mood, preferences]) =>
    normalizedMessage.includes(mood) || normalizedMessage.includes(preferences.label)
  )?.[0];
}

function getBookRecommendations(message) {
  const requestedGenre = detectRequestedGenre(message);
  const requestedMood = detectRequestedMood(message);
  const moodPreferences = requestedMood ? recommendationMoods[requestedMood] : null;
  const bestsellerOnly = bestsellerPrompt.test(message);
  const beginnerOnly = beginnerPrompt.test(message);
  const requestedSeries = anaHuangSeries.find((series) => message.toLocaleLowerCase().includes(series.toLocaleLowerCase())) || null;
  const requestedAuthor = anaHuangPrompt.test(message) || requestedSeries ? "Ana Huang" : null;
  const requestedCountry = Object.entries(authorCountryPrompts).find(([, prompt]) => prompt.test(message))?.[0];
  const requestedAudience = audiencePrompt.test(message)
    ? "Young Adults"
    : allAgesPrompt.test(message)
      ? "All Ages"
      : adultPrompt.test(message)
        ? "Adults"
        : null;
  const queryWords = message.toLocaleLowerCase().match(/[\p{L}\p{N}]+/gu) || [];
  const keywords = queryWords.filter((word) => word.length > 2 && !chatStopWords.has(word));
  const matches = books
    .filter((book) => !requestedGenre || book.genre === requestedGenre)
    .filter((book) => !requestedAuthor || book.author === requestedAuthor)
    .filter((book) => !requestedSeries || book.series === requestedSeries)
    .filter((book) => !requestedCountry || book.authorCountry === requestedCountry)
    .filter((book) => !bestsellerOnly || book.bestseller)
    .filter((book) => !beginnerOnly || book.beginner)
    .filter((book) => !requestedAudience || book.audience === requestedAudience)
    .map((book, index) => {
      const title = book.title.toLocaleLowerCase();
      const searchable = `${book.title} ${book.author} ${book.authorCountry || ""} ${book.series || ""} ${book.genre} ${book.description}`.toLocaleLowerCase();
      const keywordScore = keywords.reduce((score, word) => {
        if (title.includes(word)) return score + 5;
        if (book.author.toLocaleLowerCase().includes(word)) return score + 4;
        if (book.genre.toLocaleLowerCase().includes(word)) return score + 3;
        return score + (searchable.includes(word) ? 1 : 0);
      }, 0);
      const moodScore = moodPreferences
        ? (moodPreferences.genres.includes(book.genre) ? 2 : 0) + (moodPreferences.terms.some((term) => searchable.includes(term)) ? 4 : 0)
        : 0;
      const score = keywordScore + moodScore + (book.beginner && beginnerOnly ? 1 : 0) + (book.bestseller && bestsellerOnly ? 10 : 0);
      return { book, score, index };
    })
    .filter(({ score }) => score > 0 || requestedGenre || requestedCountry || bestsellerOnly || beginnerOnly || requestedAudience)
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .filter((candidate, index, ranked) => !bestsellerOnly || requestedGenre || ranked.findIndex((match) => match.book.genre === candidate.book.genre) === index)
    .slice(0, requestedAuthor ? 30 : 3)
    .map(({ book }) => book);
  return { matches, requestedGenre, requestedMood, requestedAuthor, requestedSeries, requestedCountry, bestsellerOnly, beginnerOnly, requestedAudience, hasSpecificRequest: Boolean(requestedGenre || requestedMood || requestedAuthor || requestedSeries || requestedCountry || bestsellerOnly || beginnerOnly || requestedAudience || keywords.length) };
}

function addChatMessage(text, className) {
  const message = document.createElement("div");
  message.className = `chat-message ${className}`;
  message.textContent = text;
  chatMessages.append(message);
  return message;
}

function normalizeBookText(value) {
  return value.toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();
}

function findBookMention(message) {
  const normalizedMessage = normalizeBookText(message);
  return [...books]
    .sort((a, b) => b.title.length - a.title.length)
    .find((book) => normalizedMessage.includes(normalizeBookText(book.title)));
}

function getBookDetailsAnswer(book, question) {
  const normalizedQuestion = normalizeBookText(question);
  const asks = (pattern) => pattern.test(normalizedQuestion);
  const details = [];
  const asksUnavailableDetail = asks(/\b(chapter|chapters|page|pages|publisher|isbn|ending|content warning|trigger warning|where to buy|price)\b/);

  if (asks(/\b(who wrote|who is the author|author|writer|written by)\b/)) {
    details.push(`${book.title} is by ${book.author}${book.authorCountry ? `, from ${book.authorCountry}` : ""}.`);
  }
  if (asks(/\b(genre|type of book|category)\b/)) {
    details.push(`It is ${book.genre}.`);
  }
  if (asks(/\b(when|what year|year|published|publication|released|release date)\b/)) {
    details.push(book.comingSoon
      ? `It is listed as coming in ${book.year}.`
      : `It was published in ${book.year}.`);
  }
  if (asks(/\b(age|ages|suitable|appropriate|audience|kids|children|teen|adult)\b/)) {
    details.push(`The catalog lists its audience as ${book.audience}.`);
  }
  if (asks(/\b(country|nationality|from|where is the author)\b/)) {
    if (!asks(/\b(author|who wrote|writer|written by)\b/)) {
      details.push(book.authorCountry
        ? `${book.author} is listed as being from ${book.authorCountry}.`
        : `The author's country is not listed in this collection.`);
    }
  }
  if (asks(/\b(series|series order|reading order|part of|standalone)\b/)) {
    details.push(book.series
      ? `${book.title} is ${book.seriesOrder ? `book ${book.seriesOrder} in` : "part of"} the ${book.series} series.`
      : `Series information for ${book.title} is not included in this catalog.`);
  }
  if (asks(/\b(about|plot|summary|story|what happens|tell me|details|describe)\b/) || (details.length === 0 && !asksUnavailableDetail)) {
    details.push(book.description);
  }
  if (asks(/\b(bestseller|best seller|popular|famous|well known)\b/)) {
    details.push(book.bestseller
      ? "It is marked as a widely read favorite in this collection; this is not a live sales ranking."
      : "This collection does not include a bestseller ranking for this title.");
  }
  if (asksUnavailableDetail) {
    details.push("That detail is not included in this book collection, and can vary by edition.");
  }

  return details.join(" ");
}

function addBookLinks(booksToShow) {
  const list = document.createElement("div");
  list.className = "chat-recommendations";
  for (const book of booksToShow) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chat-book-link";
    button.dataset.recommendBook = book.title;
    const details = document.createElement("span");
    const title = document.createElement("strong");
    title.textContent = book.title;
    const author = document.createElement("small");
    author.textContent = `${book.author}${book.authorCountry ? ` · ${book.authorCountry}` : ""}${book.series ? ` · ${book.series} #${book.seriesOrder}` : ""} · ${book.genre}${book.bestseller ? " · Worldwide favorite" : ""}`;
    details.append(title, author);
    const year = document.createElement("span");
    year.textContent = String(book.year);
    button.append(details, year);
    list.append(button);
  }
  chatMessages.append(list);
}

function replyToChat(messageText) {
  const mentionedBook = findBookMention(messageText);
  const detailQuestion = /\b(what|who|when|where|is|are|does|did|how|author|writer|genre|type|published|publication|release|year|age|audience|suitable|appropriate|country|nationality|about|plot|summary|story|series|sequel|prequel|standalone|chapter|chapters|page|pages|publisher|isbn|ending|content warning|trigger warning|where to buy|price|bestseller|best seller|popular|details|tell me|describe)\b/i.test(messageText);
  const seriesQuestion = books.find((book) =>
    book.series && normalizeBookText(messageText).includes(normalizeBookText(book.series))
  )?.series;
  if (!mentionedBook && seriesQuestion && /\b(series|books|order|reading order|how many)\b/i.test(messageText)) {
    const seriesBooks = books.filter((book) => book.series === seriesQuestion).sort((a, b) => a.seriesOrder - b.seriesOrder);
    addChatMessage(`The ${seriesQuestion} series has ${seriesBooks.length} books in this collection, in order:`, "bot-message");
    addBookLinks(seriesBooks);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return;
  }
  if (mentionedBook && detailQuestion) {
    addChatMessage(getBookDetailsAnswer(mentionedBook, messageText), "bot-message");
    addBookLinks([mentionedBook]);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return;
  }
  if (!mentionedBook && detailQuestion) {
    addChatMessage("I can answer book-detail questions about titles in this collection. Include the book’s title and ask about its author, genre, publication year, audience, series, or summary. Details like chapter counts may vary by edition and are not in the catalog.", "bot-message");
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return;
  }

  const { matches, requestedGenre, requestedMood, requestedAuthor, requestedSeries, requestedCountry, bestsellerOnly, beginnerOnly, requestedAudience, hasSpecificRequest } = getBookRecommendations(messageText);
  if (!hasSpecificRequest) {
    addChatMessage("I can suggest books by genre, mood, age group, reading level, author, or country. Ask for a country such as Japan, Nigeria, India, or Colombia, or tell me what kind of story you enjoy.", "bot-message");
    return;
  }
  if (matches.length === 0) {
    addChatMessage("I couldn’t find a close match in this collection. Try another genre, mood, or age group, and I’ll look again.", "bot-message");
    return;
  }

  const preferences = [
    requestedGenre?.toLocaleLowerCase(),
    requestedMood && `${requestedMood} mood`,
    requestedSeries && `the ${requestedSeries} series`,
    requestedAuthor && `${requestedAuthor}'s books`,
    requestedCountry && `authors from ${requestedCountry}`,
    bestsellerOnly && "widely read favorites",
    beginnerOnly && "easy reads",
    requestedAudience && `for ${requestedAudience.toLocaleLowerCase()}`
  ].filter(Boolean);
  const opening = `Here ${matches.length === 1 ? "is a good pick" : "are a few good picks"}${preferences.length ? ` for ${preferences.join(", ")}` : ""}:`;
  addChatMessage(opening, "bot-message");
  addBookLinks(matches);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBookCatalogForAssistant() {
  return books.map(({ title, author, authorCountry, genre, description, audience, year, series, seriesOrder, comingSoon }) => ({
    title, author, authorCountry, genre, description, audience, year, series, seriesOrder, comingSoon
  }));
}

function addBookLinksMentionedInAnswer(answer) {
  const normalizedAnswer = normalizeBookText(answer);
  const mentionedBooks = books
    .filter((book) => normalizedAnswer.includes(normalizeBookText(book.title)))
    .slice(0, 5);
  if (mentionedBooks.length) addBookLinks(mentionedBooks);
}

async function submitChatMessage(text) {
  const message = text.trim();
  if (!message || chatBusy) return;
  addChatMessage(message, "user-message");
  chatHistory.push({ role: "user", content: message });
  chatMessages.scrollTop = chatMessages.scrollHeight;
  chatBusy = true;
  chatForm.querySelector("button[type='submit']").disabled = true;
  document.querySelector("#chat-find-books").disabled = true;
  chatInput.disabled = true;

  const typingMessage = addChatMessage("Thinking of a good answer…", "bot-message chat-typing");
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: chatHistory.slice(-12),
        catalog: getBookCatalogForAssistant()
      })
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || `The assistant request failed (${response.status}).`);
    if (typeof result.answer !== "string" || !result.answer.trim()) {
      throw new Error("The assistant returned an empty answer. Please try again.");
    }
    typingMessage.remove();
    chatHistory.push({ role: "assistant", content: result.answer });
    addChatMessage(result.answer, "bot-message");
    addBookLinksMentionedInAnswer(result.answer);
  } catch (error) {
    typingMessage.remove();
    addChatMessage(`I couldn’t reach the AI assistant. ${error.message} Check that the Reading Room server is running and configured.`, "bot-message chat-error");
  } finally {
    chatBusy = false;
    chatForm.querySelector("button[type='submit']").disabled = false;
    document.querySelector("#chat-find-books").disabled = false;
    chatInput.disabled = false;
    chatInput.focus();
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

function setChatOpen(open) {
  chatPanel.hidden = !open;
  chatLauncher.setAttribute("aria-expanded", String(open));
  if (open) chatInput.focus();
}

chatLauncher.addEventListener("click", () => setChatOpen(chatPanel.hidden));
chatGenre.innerHTML += genreNames.slice(1).map((genre) => `<option value="${escapeHtml(genre)}">${escapeHtml(genre)}</option>`).join("");
document.querySelector("#chat-find-books").addEventListener("click", () => {
  const preferences = [
    chatMood.value && recommendationMoods[chatMood.value].label,
    chatAge.value && `for ${chatAge.value.toLocaleLowerCase()}`,
    chatGenre.value
  ].filter(Boolean);
  if (preferences.length === 0) {
    addChatMessage("Choose at least one mood, age group, or genre, and I’ll find matching novels.", "bot-message");
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return;
  }
  void submitChatMessage(`Recommend a novel: ${preferences.join(", ")}`);
});
document.querySelector("#chat-close").addEventListener("click", () => {
  setChatOpen(false);
  chatLauncher.focus();
});
chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  void submitChatMessage(chatInput.value);
  chatInput.value = "";
});
document.querySelector("#chat-suggestions").addEventListener("click", (event) => {
  const suggestion = event.target.closest("button");
  if (!suggestion) return;
  void submitChatMessage(suggestion.textContent);
});
chatMessages.addEventListener("click", (event) => {
  const recommendation = event.target.closest("[data-recommend-book]");
  if (!recommendation) return;
  const book = books.find((candidate) => candidate.title === recommendation.dataset.recommendBook);
  if (!book) return;
  showingSaved = false;
  activeGenre = book.genre;
  searchInput.value = book.title;
  savedToggle.setAttribute("aria-pressed", "false");
  renderGenres();
  renderBooks();
  setChatOpen(false);
  chatLauncher.focus();
  document.querySelector("#collection").scrollIntoView({ behavior: "smooth", block: "start" });
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !chatPanel.hidden) {
    setChatOpen(false);
    chatLauncher.focus();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === "Escape" && document.activeElement === searchInput) {
    searchInput.value = "";
    renderBooks();
    searchInput.blur();
  }
});

renderGenres();
renderBooks();
