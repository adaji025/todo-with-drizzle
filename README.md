# To-Do App with Next.js, Drizzle, and Neon

This is a simple To-Do application built with Next.js, Drizzle ORM, and a serverless Postgres database from Neon.

## Features

- Add new todos
- View a list of existing todos
- Mark todos as complete
- Delete todos

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team/)
- **Database:** [Neon](https://neon.tech/) Serverless Postgres
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/) (based on `radix-ui`)
- **Form Management:** [React Hook Form](https://react-hook-form.com/)
- **Validation:** [Zod](https://zod.dev/)
- **Icons:** [Lucide React](https://lucide.dev/guide/packages/lucide-react)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v20 or later)
- [Bun](https://bun.sh/) (or npm/yarn/pnpm)
- A [Neon](https://neon.tech/) account and a database connection string.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**

    ```bash
    bun install
    ```

3.  **Set up environment variables:**

    Create a `.env.local` file in the root of the project and add your Neon database connection string:

    ```
    DATABASE_URL="your_neon_database_connection_string"
    ```

4.  **Run database migrations:**

    ```bash
    bun run drizzle-kit:push
    ```

    This will push the schema from `src/db/schema.ts` to your Neon database.

5.  **Run the development server:**

    ```bash
    bun run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `bun run dev`: Starts the development server.
- `bun run build`: Builds the application for production.
- `bun run start`: Starts a production server.
- `bun run lint`: Lints the codebase.
- `bun run drizzle-kit:generate`: Generates SQL migration files based on schema changes.
- `bun run drizzle-kit:push`: Pushes schema changes directly to the database (for development).
- `bun run drizzle-kit:migrate`: Applies generated migration files to the database.

    For more about `drizzle-kit` commands, see the [official documentation](https://orm.drizzle.team/kit-docs/overview).
