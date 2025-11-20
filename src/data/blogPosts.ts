export interface BlogPost {
  id: string;
  projectSlug: string;
  title: string;
  content: string;
  date: string;
  author: string;
}

export interface ProjectBlog {
  slug: string;
  title: string;
  description: string;
  posts: BlogPost[];
}

// Sample blog posts data
export const projectBlogs: ProjectBlog[] = [
  {
    slug: 'unity-game-project',
    title: 'Unity Game Project',
    description: 'A 2D platformer game built with Unity and C#. Features include player movement, enemy AI, collectibles, and multiple levels.',
    posts: [
      {
        id: '1',
        projectSlug: 'unity-game-project',
        title: 'Project Kickoff - Getting Started with Unity',
        content: `I'm excited to announce the start of my Unity game development journey! This project is a 2D platformer that will showcase my skills in game development and C# programming.

## What I'm Building

The game will feature:
- Smooth player movement with jumping and dashing mechanics
- Enemy AI with patrol and combat behaviors
- Collectible items scattered throughout levels
- Multiple levels with increasing difficulty
- A checkpoint system for player progression

## Current Progress

I've set up the basic Unity project structure and started working on the player controller. The movement feels responsive, and I'm implementing the jump mechanics next.

Stay tuned for more updates!`,
        date: '2024-01-15',
        author: 'Arjun Singh',
      },
      {
        id: '2',
        projectSlug: 'unity-game-project',
        title: 'Enemy AI Implementation',
        content: `Made great progress on the enemy AI system this week! I've implemented a base enemy class that can be extended for different enemy types.

## What's New

- **Patrol System**: Enemies now follow waypoints and patrol designated areas
- **Edge Detection**: Enemies automatically turn around when they reach platform edges
- **Combat System**: Enemies can detect and attack the player
- **Health System**: Both enemies and the player have health bars

## Challenges Faced

The most challenging part was getting the edge detection to work smoothly. I had to experiment with different raycast configurations to ensure enemies don't fall off platforms.

## Next Steps

I'm planning to add:
- Different enemy types (flying, ranged, etc.)
- Death animations
- Sound effects for combat

More updates coming soon!`,
        date: '2024-01-22',
        author: 'Arjun Singh',
      },
      {
        id: '3',
        projectSlug: 'unity-game-project',
        title: 'Level Design and Polish',
        content: `The game is really coming together! I've been focusing on level design and adding polish to make the game feel complete.

## Recent Updates

- **Level 1 Complete**: First playable level with multiple checkpoints
- **Collectibles**: Added coins and power-ups throughout the level
- **Visual Polish**: Improved sprites and added particle effects
- **Audio**: Integrated background music and sound effects

## What I Learned

Level design is harder than I thought! Balancing difficulty while keeping the game fun is a delicate process. I've been playtesting extensively to get the feel just right.

The game is almost ready for a demo release. I'll share more details in the next update!`,
        date: '2024-02-01',
        author: 'Arjun Singh',
      },
    ],
  },
  {
    slug: 'web-application',
    title: 'Web Application',
    description: 'A full-stack web application built with modern technologies. Features user authentication, database integration, and responsive design.',
    posts: [
      {
        id: '1',
        projectSlug: 'web-application',
        title: 'Starting the Full-Stack Journey',
        content: `I've begun working on a comprehensive full-stack web application that will demonstrate my skills in modern web development.

## Tech Stack

- **Frontend**: Next.js 16 with TypeScript
- **Backend**: Node.js with Express
- **Database**: PostgreSQL for data persistence
- **Styling**: Tailwind CSS for responsive design
- **Authentication**: NextAuth.js for secure user sessions

## Project Goals

This application will include:
- User registration and authentication
- Dashboard with user-specific data
- Real-time features using WebSockets
- RESTful API design
- Responsive mobile-first design

## Current Status

I've set up the Next.js project with TypeScript and configured the basic routing structure. Next, I'll be implementing the authentication system.

Check back for progress updates!`,
        date: '2024-01-10',
        author: 'Arjun Singh',
      },
      {
        id: '2',
        projectSlug: 'web-application',
        title: 'Authentication System Complete',
        content: `Great news! I've successfully implemented the authentication system using NextAuth.js.

## What's Working

- **User Registration**: New users can create accounts with email verification
- **Login System**: Secure login with password hashing
- **Session Management**: Persistent sessions with JWT tokens
- **Protected Routes**: Middleware to protect authenticated routes

## Security Features

- Passwords are hashed using bcrypt
- CSRF protection enabled
- Secure cookie handling
- Rate limiting on auth endpoints

## Next Steps

Now that authentication is in place, I can focus on building the core features:
- User dashboard
- Database schema design
- API endpoints for data operations

The foundation is solid, and I'm excited to build on top of it!`,
        date: '2024-01-18',
        author: 'Arjun Singh',
      },
      {
        id: '3',
        projectSlug: 'web-application',
        title: 'Database Integration and API Development',
        content: `The backend is really taking shape! I've completed the database schema and started building the REST API.

## Database Design

I've designed a normalized database schema with:
- User profiles with extended information
- Related data tables with proper foreign keys
- Indexes for performance optimization
- Migration scripts for version control

## API Endpoints

So far, I've implemented:
- GET/POST/PUT/DELETE operations for main resources
- Proper error handling and status codes
- Input validation and sanitization
- Pagination for list endpoints

## Challenges

The most interesting challenge was designing the database relationships. I spent time ensuring the schema is scalable and maintainable.

## What's Next

I'll be working on the frontend components to consume these APIs and create a seamless user experience.`,
        date: '2024-01-25',
        author: 'Arjun Singh',
      },
    ],
  },
];

export function getProjectBlog(slug: string): ProjectBlog | undefined {
  return projectBlogs.find((blog) => blog.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projectBlogs.map((blog) => blog.slug);
}

