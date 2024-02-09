# DestinationsRN

## Introduction
DestinationsRN is a mobile application developed with React Native and TypeScript, aimed at exploring and discovering tourist destinations. It leverages Redux Toolkit (RTK) and Normalizr for efficient state management and data structuring.

## Features

### Normalizr
We employ Normalizr to normalize nested API responses, transforming complex data structures into a flat format for easier data manipulation and state management.

### Redux Toolkit and RTK Query
Redux Toolkit streamlines the setup of the Redux store. RTK Query is used for efficiently performing queries and mutations against our API, automatically managing caching, data invalidation, and logic reuse.

## Architecture
The app is structured in clear, modular components following React Native development best practices. Business logic is encapsulated within Redux Toolkit slices, ensuring maintainable and scalable code.

## Getting Started

### Installation
Follow these steps to install and set up the app locally, including cloning the repository and installing dependencies.

```bash
git clone <repository-url>
cd DestinationsRN
yarn install
cd ios && pod install && cd ..


# For iOS
yarn ios
# Or run directly from Xcode by opening the project folder in `ios/`

# For Android
yarn android
