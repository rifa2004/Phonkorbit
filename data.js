// data.js
// ============================================================
// PHASE 1.1: THE DATA LAYER (Model)
// This is our "database" for v2.0. Later, this becomes MongoDB.
// ============================================================
//data-----songs-------trending and brazilian

const songs = [
    // ========== TRENDING SONGS ==========
    {
        id: 1,
        title: "METAMORPHOSIS",
        artist: "INTERWORLD",
        image: "metamorphosis.png",
        category: "trending"
    },
    {
        id: 2,
        title: "MURDER IN MY MIND",
        artist: "KORDHELL",
        image: "murder-in-my-mind.png",
        category: "trending"
    },
    {
        id: 3,
        title: "MONTAGEM MIAU",
        artist: "Lenar",
        image: "montagem-miau.png",
        category: "trending"
    },
    {
        id: 4,
        title: "TAKA LA DENTRO",
        artist: "SEKIMANE",
        image: "TAKA-LA-DENTRO.png",
        category: "trending"
    },

    // ========== BRAZILIAN PHONK ==========
    {
        id: 5,
        title: "GOZALO",
        artist: "Ariis",
        image: "gozalo.png",
        category: "brazilian"
    },
    {
        id: 6,
        title: "MONTAGEM ALQUIMIA",
        artist: "h6itam",
        image: "montagem-alquimia.png",
        category: "brazilian"
    },
    {
        id: 7,
        title: "SEMPERO",
        artist: "QMIIR",
        image: "sempero.png",
        category: "brazilian"
    },
    {
        id: 8,
        title: "OLHA MENSAGEM",
        artist: "Sekimane",
        image: "olha-mensagem.png",
        category: "brazilian"
    },
    {
        id: 9,
        title: "DIA DELÍCIA",
        artist: "Mc Staff, ΣP",
        image: "dia-delícia.png",
        category: "brazilian"
    },
    {
        id: 10,
        title: "TIKI TIKI",
        artist: "QMIIR",
        image: "tiki-tiki.png",
        category: "brazilian"
    }
];

// ============================================================
// EXPORT: Makes this data available to other files
// we will import it into our main app later.
// ============================================================
export { songs };