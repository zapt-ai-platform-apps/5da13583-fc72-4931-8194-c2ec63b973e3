# New App

## Overview

New App is an interactive educational application designed for children to learn the Arabic alphabet with accompanying images and pronunciation. The app provides an engaging way for kids to familiarize themselves with Arabic letters by associating each letter with a picture and playing the corresponding sound.

## User Journey

1. **Home Page**

   - Upon launching the app, users are greeted with a vibrant home page displaying all the Arabic letters in a grid format.
   - Each letter is presented in a card with large, clear typography suitable for children.

2. **Interacting with Letters**

   - Users can click or tap on any letter card.
   - Upon selection:
     - The app displays a larger view of the letter alongside an image of an object or animal starting with that letter.
     - The app plays an audio pronunciation of the letter and the associated word.

3. **Navigation**

   - Users can navigate between letters using "Previous" and "Next" buttons.
   - A "Back to Home" button allows users to return to the main grid of letters at any time.

4. **Responsive Design**

   - The app is fully responsive and works seamlessly across various devices, including tablets and smartphones.
   - The layout adjusts to ensure usability and accessibility on different screen sizes.

## Features

- **Arabic Alphabet Learning**: Introduces children to all 28 letters of the Arabic alphabet.
- **Visual Aids**: Each letter is accompanied by a colorful image to aid memory and recognition.
- **Audio Pronunciation**: Plays clear audio recordings of each letter and associated word to help with pronunciation.
- **User-Friendly Interface**: Designed with children in mind, featuring large buttons, simple navigation, and engaging visuals.
- **No Authentication Required**: Easy access without the need for sign-ups or logins.

## External API and Assets

- **Speech Synthesis API**: Utilizes the browser's built-in Speech Synthesis API to pronounce letters and words without the need for external audio files.
- **Images**: Placeholder images are used in the app. Developers should replace these with appropriate images located in the `public/images` directory.

## How to Use

1. **Launch the App**: Open the application in a web browser.
2. **Explore Letters**: Browse through the grid of Arabic letters on the home page.
3. **Learn a Letter**:
   - Click on a letter to view it in detail.
   - Listen to the pronunciation and see the associated image.
4. **Navigate Between Letters**: Use the "Previous" and "Next" buttons to move through the letters sequentially.
5. **Return Home**: Click the "Back to Home" button to select a different letter from the grid.

## Note to Developers

- Ensure all images for the letters are placed in the `public/images` folder.
- Image files should be named in English transliteration of the Arabic word for consistency (e.g., `alif.png`, `ba.png`, etc.).
- The app does not include any authentication or backend services.
- Feel free to customize the styling in `tailwind.config.js` and `index.css` to adjust the theme and appearance.

## Environment Variables

No external API keys or environment variables are required for this app.
