const REFRESH_INTERVAL = 5 * 60 * 1000; // 5 minutes

const avatarCache = {}; // Avatar cache

// Hard-coded group bans
const hardCodedGroupBans = [
    {
        groupName: "CoolGroup",
        groupId: "987654321",
        reason: "Offensive Content",
        due: null, // Permanent ban
        groupImage: "https://example.com/group1.png", // Custom image for the group
    },
    {
        groupName: "BadGroup",
        groupId: "123456789",
        reason: "Spamming",
        due: "2025-05-01T12:00:00Z", // Expiry date
        groupImage: "https://example.com/group2.png", // Custom image for the group
    },
    {
        groupName: "AnotherGroup",
        groupId: "111222333",
        reason: "Harassment",
        due: "2025-06-01T12:00:00Z", // Expiry date
        groupImage: "https://example.com/group3.png", // Custom image for the group
    },
];

// Fetch Roblox Avatar (for user bans)
async function getAvatarURL(userId) {
    const cacheKey = `avatar_${userId}`;

    // Check localStorage first
    const cachedAvatar = localStorage.getItem(cacheKey);
    if (cachedAvatar) {
        return cachedAvatar;
    }

    try {
        const response = await fetch(`https://corsproxy.io/?https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${userId}&size=150x150&format=Png`);
        const data = await response.json();

        if (data && data.data && data.data[0] && data.data[0].imageUrl) {
            const avatarURL = data.data[0].imageUrl;
            localStorage.setItem(cacheKey, avatarURL); // Save it in localStorage
            return avatarURL;
        }
    } catch (err) {
        console.error('Error fetching avatar:', err);
    }

    return 'https://via.placeholder.com/150'; // fallback avatar
}

// Fetch and render bans (now with hardcoded group bans)
async function fetchBans() {
    console.log("Fetching bans...");

    const loadingSpinner = document.getElementById('loadingSpinner');
    const errorMessage = document.getElementById('errorMessage');
    const bansList = document.getElementById('bansList');

    try {
        loadingSpinner.style.display = 'block';
        errorMessage.textContent = '';

        // Fetch user bans from the API
        const response = await fetch('https://trello-proxy-uhya.onrender.com/bans');
        const bans = await response.json();

        console.log('API Bans:', bans);  // Debug log to see if we fetched the bans correctly

        bansList.innerHTML = '';

        // Merge API bans and hard-coded group bans
        const allBans = [...bans, ...hardCodedGroupBans];

        console.log('All Bans:', allBans);  // Debug log to ensure both are included

        // Process both API and hardcoded group bans
        for (const ban of allBans) {
            const [reason, userOrGroup] = ban.desc ? ban.desc.split('|') : [ban.reason, `${ban.groupName || ban.userId}`];
            const expiry = ban.due ? new Date(ban.due).toLocaleString() : 'Permanent';
            const isPermanent = !ban.due;

            let cardTitle = '';
            let cardDescription = '';
            let avatarURL = '';

            if (ban.groupId) {
                // Handle group ban
                cardTitle = `Group: ${ban.groupName}`;
                cardDescription = `${reason.trim()} | GroupID: ${ban.groupId.trim()}`;
                avatarURL = ban.groupImage; // Use the provided group image
            } else {
                // Handle user ban
                const userId = userOrGroup.trim();
                avatarURL = await getAvatarURL(userId);
                cardTitle = `${ban.name}`;
                cardDescription = `${reason.trim()} | UserID: ${userId.trim()}`;
            }

            const proofLink = ban.attachments && ban.attachments.length > 0
                ? `<a href="${ban.attachments[0].url}" class="proof-link" target="_blank">View Proof</a>`
                : '';

            const badge = `<span class="ban-label ${isPermanent ? 'permanent' : 'temporary'}">${isPermanent ? 'Permanent' : 'Temporary'}</span>`;

            const card = document.createElement('div');
            card.classList.add('ban-card');
            card.innerHTML = `
                <div class="ban-header" style="text-align: center;">
                    ${avatarURL ? `<img src="${avatarURL}" alt="Avatar" class="ban-avatar" style="border-radius: 50%; width: 100px; height: 100px; object-fit: cover; margin-bottom: 1rem;">` : ''}
                    ${badge}
                </div>
                <div class="ban-body" style="margin-top: 1rem;">
                    <h3>${cardTitle}</h3>
                    <p><strong>Reason:</strong> ${cardDescription}</p>
                    <p><strong>Expires:</strong> ${expiry}</p>
                    ${proofLink}
                </div>
            `;
            bansList.appendChild(card);
        }

        loadingSpinner.style.display = 'none';
    } catch (error) {
        document.getElementById('errorMessage').textContent = 'Error loading bans. Please try again later.';
        document.getElementById('loadingSpinner').style.display = 'none';
        console.error('Error fetching bans:', error);
        showToast('Failed to load bans. Please try again!');
    }
}

// Search functionality
document.getElementById('searchBar').addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.ban-card');
    cards.forEach(card => {
        const username = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = username.includes(query) ? 'block' : 'none';
    });
});

// Auto-refresh functionality (if needed)
setInterval(fetchBans, REFRESH_INTERVAL);
fetchBans();

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000); // Toast disappears after 3 seconds
}
