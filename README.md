# Citymail Delivery Tracking

A modern delivery tracking interface for Citymail packages, built with Next.js 14 and Tailwind CSS.

![Citymail Logo](public/icon-192x192.png)

## Features

- 📦 Track package status and location
- 🚚 Change delivery options
- ⚡ Early delivery booking
- 🔄 Switch delivery method
- 📱 Mobile-first responsive design
- 🌙 Light/dark mode support

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Icons:** Lucide Icons
- **Language:** TypeScript

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
# Create a .env.local file and add:
NEXT_PUBLIC_LOGO_URL=your_citymail_logo_url
```

3. Start the development server:
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

## Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main tracking page
│   ├── layout.tsx         # Root layout
│   ├── error.tsx          # Error boundary
│   └── loading.tsx        # Loading state
├── components/
│   └── ui/               # UI components
├── public/               # Static assets
└── styles/              # Global styles
```

## UI Components

The project uses shadcn/ui components, including:
- Sheet for bottom drawer modals
- Button for actions
- Checkbox for terms acceptance
- Input for email collection

## Environment Variables

Required environment variables:
- `NEXT_PUBLIC_LOGO_URL`: URL for the Citymail logo

## Browser Support

The app supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
