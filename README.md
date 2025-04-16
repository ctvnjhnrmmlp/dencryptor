# Dencryptor

_A simple yet powerful tool for secure encryption and decryption using substitution ciphers_

> _A privacy-first utility built for anyone who values simplicity, security, and accessibility._

## Overview

**Dencryptor** is a web-based application that allows users to **encrypt and decrypt sensitive information** using a basic substitution cipher.

It solves the need for a **lightweight, accessible, and privacy-respecting** tool for text-based encryption. Whether you’re a developer, student, or privacy-conscious individual, Dencryptor provides a **streamlined experience** with **zero data storage**.

## Why This Project?

Most encryption tools either require account sign-ups, store user data, or are overly complex for basic use cases. Dencryptor addresses these challenges by:

- Providing a **user-friendly interface** for basic encryption tasks
- Ensuring **no data is ever stored or logged**
- Supporting **multi-language compatibility** for global inclusivity
- Offering **quick copy-to-clipboard functionality** to enhance workflow

This project was inspired by the need for **easy-to-use tools that prioritize user privacy** without sacrificing usability.

## Features

- **Text Encryption & Decryption** via substitution cipher
- **Multi-language support** for global accessibility
- **Copy encrypted/decrypted text to clipboard**
- **No data logging or storage** — privacy by design
- **Built with modern UI libraries** for a responsive experience

## Roadmap

- [x] MVP: Substitution cipher encryption/decryption
- [x] Multi-language UI support
- [x] Copy-to-clipboard functionality
- [ ] Add support for custom ciphers
- [ ] Add local theme preferences (dark/light mode)
- [ ] Expand cipher options (Caesar, Vigenère, etc.)
- [ ] PWA support for offline encryption

## Tech Stack

**Web:**
TypeScript · React.js · Vite.js · Tailwind CSS · Flowbite

**Tools & Libraries:**
Clipboard API · i18n for multi-language support

## Getting Started

### Prerequisites

- Node.js & npm
- Git

### Installation

```bash
git clone https://github.com/yourusername/dencryptor.git
cd dencryptor
npm install
npm run dev
```

## Environment Variables

This project currently does not require any external environment variables. All encryption happens locally in the browser.

## Usage

To use Dencryptor:

```bash
# Start the development server
npm run dev
```

- Open your browser and go to `http://localhost:5173`
- Enter your text and choose to encrypt or decrypt
- Copy results directly using the clipboard button

## Architecture

```
[Frontend (React + Vite + Tailwind)] -> [Browser Local Cipher Engine]
```

All operations are handled client-side to maximize privacy and minimize risk.

## Deployment

- **Cloud:** Deployable to Vercel, Netlify, GitHub Pages, or any static host
- **Privacy-first:** No backend or database required
- **Live Demo:** [https://dencryptor.app](https://dencryptor.app) _(replace with actual link)_

## Contributing

We welcome contributions!

1. Fork this repo
2. Create your branch: `git checkout -b feature/feature-name`
3. Commit your changes
4. Push: `git push origin feature/feature-name`
5. Open a pull request

## License

This project is licensed under the [MIT License](LICENSE).

## Credits

- Inspired by the need for **accessible personal encryption tools**
- Built by John Rommel Octaviano
- Powered by React, Vite, Flowbite, and Tailwind CSS
