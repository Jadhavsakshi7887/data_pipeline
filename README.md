
## What is Motia?

Motia is an open-source, unified backend framework that eliminates runtime fragmentation by bringing **APIs, background jobs, queueing, streaming, state, workflows, AI agents, observability, scaling, and deployment** into one unified system using a single core primitive, the **Step**.

## About This Data Pipeline Project

This project demonstrates a complete data pipeline using Motia:

File Upload: Users can JSON data via a lightweight frontend.

Data Cleaning: Backend processes uploaded data and cleans the data.

Visualization: Cleaned data is displayed in tables and interactive charts

Frontend: Simple HTML, CSS, and JavaScript hosted on Vercel; interacts with the Motia backend API.

This project showcases how Motia Steps can handle real-world file processing workflows combined with frontend visualization.

## Quick Start

```bash
# Start the development server
npm run dev
```

This starts the Motia runtime and the **Workbench** - a powerful UI for developing and debugging your workflows. By default, it's available at [`http://localhost:3000`](http://localhost:3000).

1. **Open the Workbench** in your browser at [`http://localhost:3000`](http://localhost:3000)
2. **Click the `Tutorial`** button on the top right of the workbench
3. **Complete the `Tutorial`** to get an understanding of the basics of Motia and using the Workbench

## Step Types

Every Step has a `type` that defines how it triggers:

| Type | When it runs | Use case |
|------|--------------|----------|
| **`api`** | HTTP request | REST APIs, webhooks |
| **`event`** | Event emitted | Background jobs, workflows |
| **`cron`** | Schedule | Cleanup, reports, reminders |

## Development Commands

```bash
# Start Workbench and development server
npm run dev


# Start production server (without hot reload)
npm run start
```

## Project Structure

```
steps/              # backend
public/             # Frontend files (index.html, app.js)
src/                # Shared services and utilities
motia.config.ts     # Motia configuration
```

Steps are auto-discovered from your `steps/` or `src/` directories - no manual registration required.

## Learn More

- [Documentation](https://motia.dev/docs) - Complete guides and API reference
- [Quick Start Guide](https://motia.dev/docs/getting-started/quick-start) - Detailed getting started tutorial
- [Core Concepts](https://motia.dev/docs/concepts/overview) - Learn about Steps and Motia architecture
- [Discord Community](https://discord.gg/motia) - Get help and connect with other developers
