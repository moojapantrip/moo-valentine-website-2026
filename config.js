// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Hnin Ei Phoo",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Happy Valentine's Day! to Hnin 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you enjoy talking to me? 😊",                                    // First interaction
            yesBtn: "Yes, a lot!",                                             // Text for "Yes" button
            noBtn: "Maybe...",                                               // Text for "No" button
            secretAnswer: "Actually, you're the highlight of my day! Even while you're busy at your friend wedding. ❤️"           // Secret hover message
        },
        second: {
            text: "Do you like a porky 🐖? ",                          // For the love meter
            startText: "Moo-re than words can say!",                                   // Text before the percentage
            nextBtn: "No, it's too spicy🌶️"                                         // Text for the next button
        },
        third: {
            text: "Are you enjoying our conversation so far? I hope you’re having a wonderful time at the wedding!", // The big question!
            yesBtn: "Yes, definitely! 😊",                                             // Text for "Yes" button
            noBtn: "Just a little bit 😆"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "Slow down! You're totally Moo-re than addicted to me! 😂🐷🔥",  // Shows when they go past 5000%
        high: "Careful! My Moo-meter is about to explode! 🚀💥",              // Shows when they go past 1000%
        normal: "Moving in the right direction... keep going! 😉"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "You just won a 'Moo-ry' Special Person! 🐷🎉",
        message: "Can't wait to hear more about the wedding. Talk to you soon, My Valentine-to-be! 🌹",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dfh8uktwf/video/upload/v1770920205/Jodi_Benson_-_Part_of_Your_World_From__The_Little_Mermaid__eobliz.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 