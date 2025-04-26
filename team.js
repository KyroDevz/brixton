// Staff data
const staffMembers = [
    {
      username: "khriss1111",
      userId: "330730245",
      role: "Management",
      bio: "Community Owner of Brixton RPC, ensuring the project stays on track."
    },
    {
      username: "Memeszef",
      userId: "3460035395",
      role: "Management",
      bio: "Keeping the community safe and enforcing the rules and Media Head."
    },
    {
      username: "X_manX92",
      userId: "1588919374",
      role: "Management",
      bio: "Keeping the community safe and enforcing the rules and Moderation Head."
    },
    {
      username: "xJen_za",
      userId: "1384090861",
      role: "Developer",
      bio: "Mastermind behind this website, and coding at Brixton RPC."
    }
  ];
  
  // Role badge colors
  const roleColors = {
    "Management": "#8B5CF6", // Purple
    "Moderator": "#3B82F6",  // Blue
    "Developer": "#22C55E",  // Green
    "Contributor": "#F59E0B" // Amber
  };
  
  // Role badge icons (custom SVGs with color already set to white)
  const roleIcons = {
    "Management": '<img src="https://api.iconify.design/mdi/crown.svg?color=white" alt="Management Icon" class="role-icon">',
    "Moderator": '<img src="https://api.iconify.design/mdi/shield-check.svg?color=white" alt="Moderator Icon" class="role-icon">',
    "Developer": '<img src="https://api.iconify.design/mdi/wrench.svg?color=white" alt="Developer Icon" class="role-icon">',
    "Contributor": '<img src="https://api.iconify.design/mdi/handshake.svg?color=white" alt="Contributor Icon" class="role-icon">'
  };
  
  // Cache for avatars
  const avatarCache = {};
  
  // Get Avatar URL with fallback
  async function getAvatarURL(userId) {
    if (avatarCache[userId]) {
      return avatarCache[userId];
    }
  
    try {
      const response = await fetch(`https://corsproxy.io/?https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${userId}&size=150x150&format=Png`);
      const data = await response.json();
  
      if (data && data.data && data.data[0] && data.data[0].imageUrl) {
        avatarCache[userId] = data.data[0].imageUrl;
        return data.data[0].imageUrl;
      }
    } catch (err) {
      console.error('Error fetching avatar:', err);
    }
  
    return 'https://via.placeholder.com/150'; // Default avatar if fails
  }
  
  // Render staff members
  const teamGrid = document.getElementById('teamGrid');
  async function renderStaffMembers() {
    for (const member of staffMembers) {
      const card = document.createElement('div');
      card.className = 'team-card';
      
      // Fetch avatar URL
      const avatarUrl = await getAvatarURL(member.userId);
  
      card.innerHTML = `
        <img src="${avatarUrl}" alt="${member.username}" class="team-avatar">
        <h3>${member.username}</h3>
        <span class="role-badge" style="background-color: ${roleColors[member.role]};">
          ${roleIcons[member.role]} ${member.role}
        </span>
        <p class="team-bio">${member.bio}</p>
      `;
  
      teamGrid.appendChild(card);
    }
  }
  
  // Initialize staff rendering
  renderStaffMembers();
  