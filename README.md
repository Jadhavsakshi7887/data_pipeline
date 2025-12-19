
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

## 📸 Data Pipeline & Runtime Screenshots

### Motia Data Pipeline (Workbench)
This screenshot shows the complete data pipeline built using Motia Steps.

<img width="1900" height="743" alt="Screenshot 2025-12-16 200710" src="https://github.com/user-attachments/assets/b468a6e9-18df-4fd4-bea0-0fd3e0983c18" />
<img width="1879" height="571" alt="Screenshot 2025-12-19 190052" src="https://github.com/user-attachments/assets/56b58815-f044-4ccb-9502-fba469596e8f" />


### Development Server Running
Motia runtime and Workbench running locally using `npm run dev`.

<img width="1723" height="689" alt="Screenshot 2025-12-19 105211" src="https://github.com/user-attachments/assets/7db8f042-c849-4275-b4d2-a4f75c7a0fca" />
<img width="894" height="675" alt="Screenshot 2025-12-16 225827" src="https://github.com/user-attachments/assets/4148c2a5-ff8a-4cf3-b1c2-d28ed1b35d9e" />

### Frontend Visualization
<img width="1451" height="902" alt="Screenshot 2025-12-19 180257" src="https://github.com/user-attachments/assets/a29e944f-f26b-41b7-b2c8-8c8722111abd" />

### Deployment

<img width="1824" height="862" alt="Screenshot 2025-12-16 223646" src="https://github.com/user-attachments/assets/1ad8cabd-c8f4-49d6-9ce7-1b2e19979c49" />


## Learn More

- [Documentation](https://motia.dev/docs) - Complete guides and API reference
- [Quick Start Guide](https://motia.dev/docs/getting-started/quick-start) - Detailed getting started tutorial
- [Core Concepts](https://motia.dev/docs/concepts/overview) - Learn about Steps and Motia architecture
- [Discord Community](https://discord.gg/motia) - Get help and connect with other developers
