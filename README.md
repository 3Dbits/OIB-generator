# Croatian OIB Generator 🇭🇷

Generate Croatian OIB (Osobni identifikacijski broj) numbers instantly. This tool creates unique personal identification numbers using the ISO 7064, MOD 11,10 standard.

## 🌐 Live Demo

Check out the live version of the application: [OIB Generator](https://oib-generator.netlify.app/)

## 📋 About

OIB Generator is a web application built to generate valid Croatian personal identification numbers (OIB). It follows the official ISO 7064, MOD 11,10 standard to ensure all generated numbers are valid and could theoretically be used in Croatian systems.

### Features

- 🔢 Instant OIB number generation
- ✅ Validation according to ISO 7064, MOD 11,10
- 🎯 100% accuracy in following Croatian OIB format
- 💻 Modern, responsive user interface
- ⚡ Lightning-fast performance with Vite
- 🎨 Beautiful UI with Chakra UI components

## 🚀 Tech Stack

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Chakra UI](https://chakra-ui.com/) - A simple, modular and accessible component library

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/3Dbits/OIB-generator.git
```

2. Navigate to the project directory:
```bash
cd OIB-generator
```

3. Install dependencies:
```bash
yarn install
```

4. Start the development server:
```bash
yarn dev
```

5. Build for production:
```bash
yarn build
```

## 🔍 Usage

1. Visit [OIB Generator](https://oib-generator.netlify.app/) or run locally
2. Click the "Generate OIB" button
3. Your new valid OIB number will be displayed

## ⚙️ Algorithm

The OIB is generated following these steps:
1. Generate a random 10-digit number
2. Calculate the control digit using ISO 7064, MOD 11,10
3. Append the control digit to create the final 11-digit OIB


Live Demo: [https://oib-generator.netlify.app/](https://oib-generator.netlify.app/)

---
Made with ❤️ in Croatia
