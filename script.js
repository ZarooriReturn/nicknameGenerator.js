 const specialSymbols = [
        '᪲', '᪳', 'き', '√', 'ҩ', 'Ҩ', 'あ', '〆', 'Ⓥ', '', '×͜×', '×᷼×', '╰╯', '╰‿╯', '༄ᵈʳᵏ᭄', '★᭄ꦿ᭄',
        '♡֟፝', 'ᜰ', '꙰', '❁', '✿', '⚚', '☠', '꧁', '꧂', '༺', '༻', '▪', 'ꪇ༊', '๖', '࿐', '—͟͞͞★', 'ϟ',
        'ꨄ', 'დ', 'ꔪ', 'ᴺᴳ┊', '☕', 'ᖫᖭ', '☬', '᭄', 'ᬊᬁ', 'ᬊ᭄', '୧୨', '❖', '♡᭄ꦿ', 'ぷ', 'ᯓ', '༗',
        'ᯓ', 'ᵖᶜ', '모', 'Ѽ', 'ѽ', 'Ѿ', '🝪', 'Ꮤ', '⨈', 'Ѯ', 'ㆅ', 'ѯ', 'Ѱ', 'ជ', '〃', 'ဗ', '﹅', '﹆',
        'Ⓥ', '♥︎', '❥', '❦', '❧', '☙', '♠§', '»', '❣', '❢', 'ᰔ', 'ᰔᩚ', 'ෆ', 'ʚ', 'ɞ', 'დ', 'ლ', 'এ',
        'ঞ', 'ଓᜊ', 'ꨄ', 'ஐ', 'ᦗ', '␌', '⸙', '♠', '◉', '๏', '☯', '㋡', '㊜', '★', '☢', '㉿', '〄', '࿃',
        '࿊', '♋', '࿋', '𖣐', '࿌', 'ꪶ࿋྄ིᤢꫂ', 'ꪶ☯ꫂ', '࿗', 'ʕ˖͜͡˖ʔ', 'ʕ•ᴥ•ʔ', '憶', '⎋', '࿀', 'ܔ',
        '֟፝', 'ꤪꤨꤪ', 'ꨄꤪꤨ', '♚', '⳻᷼⳺', '⳻፝֟͜⳺', '࿅', 'ꗃ', '豈', '高', ':)', '𖤍', '𐇲', 'ꗈ', 'ㅤ♪ㅤ',
        '෴', '☎', '☂', '☔', '™', 'ꙮ', '⚓', '☸', '♨', '༆', '〲', '◣◥', '◇', '☁', '╰', '╯', '╰╮╭╯',
        '╰‿╯', '᭓', '戀', '♔', '⛄', '☃️', '⚡', '֟፝', '〠', '♝', '࿈', '࿂', '♻️', '♻', '༕', '圓', '❔❓',
        '﷽', 'ܫ', 'ོꪾ', 'ʚiɞ', 'ʚɞ', 'ʚĭɞ', '乡', '乂', '乄', 'メ', '火', '米', '✿᭄ꦿ', '么', '⺓', 'ツ',
        '༒', '♛', '×֟፝᷼×', '⳻֟፝᷼⳺', '⳻‿⳺Marshmellow', '⳻‿ꤪꤨꤪ⳺', '⳻࿈⳺', '⳻ ֟፝᷼ ⳺', 'ᯤ⁹⁹⁹⁺',
        '͢', '⟬⟭', '⟁', '⛈', '⛇', '⛏', '⛆', '⚱', '▩', '⑇', '␥', '⏦', '⏧', '⏣', '⎎', '⎗', '⃠', '᳀',
        '᳂', 'ᱪ', 'ᰄ', '᪣', 'ཥཤ', '࿗', '࿃', '༨', 'ᦿ', 'ᦹ', 'ⵕ', 'ⵚ', 'Ⱉ', '⭖', '✌︎', '♘', '⚯', '⩀',
        '๛', 'ム', '⟴', '亗', '帝', '⨳', '◎', '❐', '❏', '⚠', '⛩', '⛱', '⛶', '⌤', '☰', '♩', '☰', '┆',
        '┇', '╎', '╏', '║', '╽', '▏', '▎', '▕', '⑆', '⎇', '⌥', '⌔', '⚠️', '💝', '♡᭄ꦿ', '❤', '💓', '💕',
        '💒', '🏩', '💖', '💗', '💞', '💟', '💙', '💚', '💛', '💜', '💘', '💔', '💝', '♡', '♥', '❥', '❦', '☙',
        '🖤', 'ꨄ', '😍', '💋', '░', '▒', '▓', '▢', '▣', '⎚', '⎔', '⌒', '⌵', '⌾', '⍟', '⌢', '⌖', '⌭',
        'ꐠ', 'ꐡ', 'ꐕ', 'ꌇ', 'ꌈ', 'ꉕ', 'ꆛ', 'ꆜ', '⚖', '卐', '⚶', '⚠', '⎚\\࿈/⎚', '⎚\\⌣/⎚', '⎚\\/⎚',
        '⟬᳂⌣᳂⟭', '◉‿◉', '❀᭄ꦿ', '❀', '❁', '❃', '✿', '✾', '⚜', '⚘', '☘', '✥', '✤', 'ꕥ', '✣', '❇',
        '❈', '❉', '❊', '❋', '✽', '✼', '✻', 'ꕤ', 'ꕥ', '᪥', 'ꙮ', '𓇋', '𓁙', '𓆹', '𓇑', '𓇊', '𓇬',
        '𓆱', '𑁈', '𑁚', '𑀼', '𐍈', '𐌵', '𐌺', '𐍂', '𐌴', '𐌰', '𐌴', '𑁚', '𑀼', '𑀻', '𐍆', '𐌽',
        '𑂖', '𑄡', '𐍀', '𓆈', '𑀠', '𑁐', '𑁉', '𑁊', '𑁎', '𓃉', '𓄷', '𓄸', '𓇠', '𓇱', '𓇬', '𑀾',
        '𑀻', '𑁄', '𑀲', '𓄏', '𑂤', '𐌳', '𑁡', '𑀠', '𑀦', '𑀢', '𑀖', '𑀆', '𑀉', '𑀌', '𐌱', '𑀲',
        '𑁆', '𑁈', '𑁐', '𑁉', '𐍂', '𑁈', '𐌱', '𐌸', '𑁌', '𐌼', '𑁃', '𑂒', '𑂒', '𑀠', '𑀣', '𐌽',
        '𐌲', '𐌸', '𐌷', '𐌾', '𐌴', '𐍈', '𐌷', '𐍂', '𐌻', '𐌰', '𑀻', '𐌱', '𐌰', '𐌴', '𐌻', '𑀽',
        '𐌲', '𑀺', '𑀸', '𐌴', '𐍁', '𐌾', '𐌲', '𐍂', '𐌳', '𑀿', '𑀿', '𑁐', '𑁎', '𑁃', '𑀹'
    ];
        const stylishFonts = {
        square_text: {
            'a': '🅰', 'b': '🅱', 'c': '🅲', 'd': '🅳', 'e': '🅴',
            'f': '🅵', 'g': '🅶', 'h': '🅷', 'i': '🅸', 'j': '🅹',
            'k': '🅺', 'l': '🅻', 'm': '🅼', 'n': '🅽', 'o': '🅾',
            'p': '🅿', 'q': '🆀', 'r': '🆁', 's': '🆂', 't': '🆃',
            'u': '🆄', 'v': '🆅', 'w': '🆆', 'x': '🆇', 'y': '🆈', 
            'z': '🆉'
        },
        circled_text: {
            'a': 'Ⓐ', 'b': 'Ⓑ', 'c': 'Ⓒ', 'd': 'Ⓓ', 'e': 'Ⓔ',
            'f': 'Ⓕ', 'g': 'Ⓖ', 'h': 'Ⓗ', 'i': 'Ⓘ', 'j': 'Ⓙ',
            'k': 'Ⓚ', 'l': 'Ⓛ', 'm': 'Ⓜ', 'n': 'Ⓝ', 'o': 'Ⓞ',
            'p': 'Ⓟ', 'q': 'Ⓠ', 'r': 'Ⓡ', 's': 'Ⓢ', 't': 'Ⓣ',
            'u': 'Ⓤ', 'v': 'Ⓥ', 'w': 'Ⓦ', 'x': 'Ⓧ', 'y': 'Ⓨ',
            'z': 'Ⓩ'
        },
        bold_box_text: {
            'a': '🄰', 'b': '🄱', 'c': '🄲', 'd': '🄳', 'e': '🄴',
            'f': '🄵', 'g': '🄶', 'h': '🄷', 'i': '🄸', 'j': '🄹',
            'k': '🄺', 'l': '🄻', 'm': '🄼', 'n': '🄽', 'o': '🄾',
            'p': '🄿', 'q': '🅀', 'r': '🅁', 's': '🅂', 't': '🅃',
            'u': '🅄', 'v': '🅅', 'w': '🅆', 'x': '🅇', 'y': '🅈',
            'z': '🅉'
        },
        double_square_outline: {
            'A': '🄐', 'B': '🄑', 'C': '🄒', 'D': '🄓', 'E': '🄔', 
            'F': '🄕', 'G': '🄖', 'H': '🄗', 'I': '🄘', 'J': '🄙', 
            'K': '🄚', 'L': '🄛', 'M': '🄜', 'N': '🄝', 'O': '🄞', 
            'P': '🄟', 'Q': '🄠', 'R': '🄡', 'S': '🄢', 'T': '🄣', 
            'U': '🄤', 'V': '🄥', 'W': '🄦', 'X': '🄧', 'Y': '🄨', 
            'Z': '🄩'
        },
        negative_square: {
            'A': '🅐', 'B': '🅑', 'C': '🅒', 'D': '🅓', 'E': '🅔', 
            'F': '🅕', 'G': '🅖', 'H': '🅗', 'I': '🅘', 'J': '🅙', 
            'K': '🅚', 'L': '🅛', 'M': '🅜', 'N': '🅝', 'O': '🅞', 
            'P': '🅟', 'Q': '🅠', 'R': '🅡', 'S': '🅢', 'T': '🅣', 
            'U': '🅤', 'V': '🅥', 'W': '🅦', 'X': '🅧', 'Y': '🅨', 
            'Z': '🅩'
        },
        bold_script: {
            'a': '𝕒', 'b': '𝕓', 'c': '𝕔', 'd': '𝕕', 'e': '𝕖', 
            'f': '𝕗', 'g': '𝕘', 'h': '𝕙', 'i': '𝕚', 'j': '𝕛', 
            'k': '𝕜', 'l': '𝕝', 'm': '𝕞', 'n': '𝕟', 'o': '𝕠', 
            'p': '𝕡', 'q': '𝕢', 'r': '𝕣', 's': '𝕤', 't': '𝕥', 
            'u': '𝕦', 'v': '𝕧', 'w': '𝕨', 'x': '𝕩', 'y': '𝕪', 
            'z': '𝕫', 'A': '𝔸', 'B': '𝔹', 'C': 'ℂ', 'D': '𝔻', 
            'E': '𝔼', 'F': '𝔽', 'G': '𝔾', 'H': 'ℍ', 'I': '𝕀', 
            'J': '𝕁', 'K': '𝕂', 'L': '𝕃', 'M': '𝕄', 'N': 'ℕ', 
            'O': '𝕆', 'P': 'ℙ', 'Q': 'ℚ', 'R': 'ℝ', 'S': '𝕊', 
            'T': '𝕋', 'U': '𝕌', 'V': '𝕍', 'W': '𝕎', 'X': '𝕏', 
            'Y': '𝕐', 'Z': '𝕎'
        },
        black_square: {
            'A': '◼️🄰', 'B': '◼️🄱', 'C': '◼️🄲', 'D': '◼️🄳', 
            'E': '◼️🄴', 'F': '◼️🄵', 'G': '◼️🄶', 'H': '◼️🄷', 
            'I': '◼️🄸', 'J': '◼️🄹', 'K': '◼️🄺', 'L': '◼️🄻', 
            'M': '◼️🄼', 'N': '◼️🄽', 'O': '◼️🄾', 'P': '◼️🄿', 
            'Q': '◼️🅀', 'R': '◼️🅁', 'S': '◼️🅂', 'T': '◼️🅃', 
            'U': '◼️🅄', 'V': '◼️🅅', 'W': '◼️🅆', 'X': '◼️🅇', 
            'Y': '◼️🅈', 'Z': '◼️🅉'
        },
        circular_outline: {
            'A': '⭕🄰', 'B': '⭕🄱', 'C': '⭕🄲', 'D': '⭕🄳', 
            'E': '⭕🄴', 'F': '⭕🄵', 'G': '⭕🄶', 'H': '⭕🄷', 
            'I': '⭕🄸', 'J': '⭕🄹', 'K': '⭕🄺', 'L': '⭕🄻', 
            'M': '⭕🄼', 'N': '⭕🄽', 'O': '⭕🄾', 'P': '⭕🄿', 
            'Q': '⭕🅀', 'R': '⭕🅁', 'S': '⭕🅂', 'T': '⭕🅃', 
            'U': '⭕🅄', 'V': '⭕🅅', 'W': '⭕🅆', 'X': '⭕🅇', 
            'Y': '⭕🅈', 'Z': '⭕🅉'
        },
        decorative: {
            'A': '𝓐', 'B': '𝓑', 'C': '𝓒', 'D': '𝓓', 
            'E': '𝓔', 'F': '𝓕', 'G': '𝓖', 'H': '𝓗', 
            'I': '𝓘', 'J': '𝓙', 'K': '𝓚', 'L': '𝓛', 
            'M': '𝓜', 'N': '𝓝', 'O': '𝓞', 'P': '𝓟', 
            'Q': '𝓠', 'R': '𝓡', 'S': '𝓢', 'T': '𝓣', 
            'U': '𝓤', 'V': '𝓥', 'W': '𝓦', 'X': '𝓨', 
            'Y': '𝓨', 'Z': '𝓩'
        },
    };

// Function to apply a random font style
function applyRandomFont(baseName) {
    const fontStyles = Object.keys(stylishFonts);
    const randomFontKey = fontStyles[Math.floor(Math.random() * fontStyles.length)];

    return baseName.split('').map(char => {
        const stylishChar = stylishFonts[randomFontKey][char.toLowerCase()];
        return stylishChar || char; // Return stylish char or original char
    }).join(''); // Return a readable string
}

function setTrending(name) {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = name; // Directly set the name without decoding
    const styledName = applyRandomFont(decodeHtmlEntities(searchInput.value)); // Decode before styling
    updateNicknames(styledName);
}

function generateStylishNicknames(baseName, quantity = 10) {
    const nicknames = [];
    
    for (let i = 0; i < quantity; i++) {
        const prefix = getRandomSymbol();
        const suffix = getRandomSymbol();
        const stylishName = applyRandomFont(baseName); // Apply font styles correctly
        nicknames.push(`${prefix}${stylishName}${suffix}`); // Ensure correct symbol concatenation
    }
    return nicknames;
}

function getRandomSymbol() {
    return getRandomElement(specialSymbols);
}

function randomLikesDislikes() {
    const likes = Math.floor(Math.random() * 1000);
    const dislikes = Math.floor(Math.random() * 100);
    return `💖 ${likes} Likes | 👎 ${dislikes} Dislikes`;
}

function updateNicknames() {
    const baseName = document.getElementById('searchInput').value.trim(); // Get raw input value
    const nicknameContainer = document.getElementById('nicknameContainer');
    nicknameContainer.innerHTML = ''; // Clear previous names

    if (baseName) {
        const decodedBaseName = decodeHtmlEntities(baseName); // Decode HTML entities
        const nicknames = generateStylishNicknames(decodedBaseName, 100);
        displayNicknames(nicknames);
    } else {
        showError("Please enter a valid name.");
    }
}

function displayNicknames(nicknames) {
    const nicknameContainer = document.getElementById('nicknameContainer');
    
    nicknames.forEach(nickname => {
        const nicknameCard = createNicknameCard(nickname);
        nicknameContainer.appendChild(nicknameCard);
    });
}

function createNicknameCard(nickname) {
    const nicknameCard = document.createElement('div');
    nicknameCard.className = 'nickname-card';
    nicknameCard.textContent = nickname; // Ensure proper display of text content
    nicknameCard.onclick = () => copyToClipboard(nickname);

    const likesDislikes = document.createElement('div');
    likesDislikes.className = 'likes';
    likesDislikes.textContent = randomLikesDislikes(); // Use textContent for safe output

    nicknameCard.appendChild(likesDislikes);
    return nicknameCard;
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert(`Copied: ${text}`);
        })
        .catch(err => {
            console.error('Could not copy text: ', err);
            alert('Failed to copy text. Please try again.');
        });
}

function loadMoreNicknames() {
    const baseName = document.getElementById('searchInput').value.trim();
    if (baseName) {
        const decodedBaseName = decodeHtmlEntities(baseName); // Decode HTML entities
        const nicknames = generateStylishNicknames(decodedBaseName, 100);
        displayNicknames(nicknames);
    } else {
        showError("Please enter a valid name to load more nicknames.");
    }
}

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function showError(message) {
    const errorContainer = document.getElementById('errorContainer');
    errorContainer.textContent = message; // Directly use textContent for safety
    errorContainer.style.display = 'block';
    setTimeout(() => {
        errorContainer.style.display = 'none';
    }, 3000);
}

// Function to decode HTML entities
function decodeHtmlEntities(str) {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = str; // Set the innerHTML to the string
    return textarea.value; // Return the decoded string
}

// Function to decode specific character references
function decodeCustomEntities(str) {
    // Example for decoding additional custom entities if needed
    return str.replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec));
}
