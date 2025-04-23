# MegaXchange Frontend

## Overview

MegaXchange is a decentralized bridge application that allows users to send Ethereum from the Sepolia testnet to the MegaETH testnet. The frontend application is built with **React** and hosted on **Vercel**, providing a seamless user experience for bridging ETH between testnets.

## Features

- **Input Field**: Users can input a Sepolia transaction hash.
- **Status Display**: Real-time feedback on transaction status.
- **Transaction Validation**: Validates Sepolia transactions before attempting to mint equivalent ETH on MegaETH.
- **Responsive Design**: Optimized for desktop and mobile use.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Next.js**: React framework for server-side rendering and static site generation.
- **Vercel**: Platform for hosting and deploying the frontend application.

## Setup and Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/mredidy/megaxchange-frontend.git
    ```

2. **Navigate to the Project Directory**

    ```bash
    cd megaxchange-frontend
    ```

3. **Install Dependencies**

    Ensure you have **Node.js** and **npm** installed. Then run:

    ```bash
    npm install
    ```

4. **Run the Application Locally**

    Start the development server:

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:3000` in your browser.

5. **Deploy to Vercel**

    - Push the code to your GitHub repository.
    - Connect your GitHub repository to **Vercel** and deploy.

    After deployment, Vercel will provide a public URL where the application is live.

## Project Structure

- `pages/`: Contains all the pages in the application, including the main bridge page.
- `components/`: Reusable components like `TransactionInput`, `StatusMessage`.
- `styles/`: Custom CSS and styling files for the application.
- `public/`: Static assets such as images and icons.

## Contributing

If you wish to contribute to the development of MegaXchange, feel free to fork the repository and submit pull requests. We encourage improvements and enhancements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or inquiries, please contact us at:  
**Email**: misteredidy@gmail.com