

const projects = {
    "Secure smart contract coding": {
        description: "Paper about common vulnerabilities in smart contracts and the tools available to improve their security. Smart contracts are a crucial part of decentralized finance (DeFi), but their vulnerabilities can lead to significant financial losses, which makes them unreliable to manage valuable assets. This paper highlights the need to make smart contracts more secure and reliable by providing statistics about crypto crimes, discussing various vulnerabilities, and examining tools to enhance security. By understanding these risks and tools, developers can build safer smart contracts and contribute to a more secure DeFi ecosystem.",
        link: "https://github.com/imiskii/VUT-FIT/tree/main/SCO%20(Secure%20Coding)"
    },
    "Network flow anomaly analysis": {
        description: "This project involves the analysis and creation of tools for automatic anomaly detection in a dataset containing network flows in the CESNET network. The analysis deals with the identification of different types of anomalies and their possible causes. Anomaly detection involves several approaches whether using Isoletion Forest machine learning and neural networks or various statistical methods.",
        link: "https://github.com/imiskii/VUT-FIT/tree/main/PDS%20(Data%20Communications%2C%20Computer%20Networks%20and%20Protocols)"
    },
    "Project management information system": {
        description: "This is a larger team project. The task was to create a robust project management system. I personally worked on the frontend part of this project, which was developed in React. This project was mainly beneficial for me in terms of teamwork, working with the github versioning system but also understanding the React library.",
        link: "https://github.com/AlfredoCode/pis-project"
    },
    "Prolog Rubik's Cube solver": {
        description: "A project focused on logic programming in the Prolog language. The result is a program that can optimally solve a Rubik's cube and provide a sequence of steps to the solution as output.",
        link: "https://github.com/imiskii/VUT-FIT/tree/main/FLP%20(Functional%20and%20Logic%20Programming)/prolog"
    },
    "Haskell Decision tree alg.": {
        description: "A project focused on functional programming in Haskell. The task was to create a program that can classify data for a given decision tree or create a new decision tree from the provided data.",
        link: "https://github.com/imiskii/VUT-FIT/tree/main/FLP%20(Functional%20and%20Logic%20Programming)/haskell"
    },
    "l4-port-scanner": {
        description: "A tool for scanning TCP/UDP ports, inspired by the nmap tool. The program is developed in C/C++ language, utilizing the pcap-library. The result is a program capable of scanning TCP/UDP ports on both IPv4 and IPv6 addresses. The program supports scanning using hostnames and allows specifying specific ports or port ranges. Through this project, I gained knowledge about the functioning of TCP, UDP protocols, as well as IPv4 and IPv6 protocols. Additionally, I acquired experience in object-oriented programming in C++.",
        link: "https://github.com/imiskii/VUT-FIT/tree/main/IPK%20(Computer%20Communications%20and%20Networks)/Project2"
    },
    "dhcp-stats": {
        description: "The project aimed to create a tool that monitors assigned IPv4 addresses. If allocations surpass 50%, the tool generates a syslog record. The monitoring is based on analyzing captured DHCP packets or a .pcap file with DHCP communication. The entire implementation is in C++. This project gave me a deep understanding of DHCP and provided experience with pcaplib.",
        link: "https://github.com/imiskii/VUT-FIT/tree/main/ISA%20(Network%20Applications%20and%20Network%20Administration)/dhcp-stats-project"
    },
    "PHP compiler": {
        description: "Compiler implementation for imperative language IFJ22 (based on PHP). This is a team project, created in the C programming language. 4 people worked on this project. My work on the project was lexical analysis, symbol table, abstract data structures stack and hash table. The result is a program that receives the code written in IFJ22 at the input and returns compiled intermediate code similar to assembler. During the project, I had the opportunity to enhance my teamwork skills while putting my practical knowledge of the versioning system Git into action. Furthermore, I was able to apply my solid foundation in C programming, which proved beneficial to the success of the project.",
        link: "https://github.com/imiskii/VUT-FIT-IFJ"
    },
    "Vein Enhancement tool": {
        description: "Finger Print Vein Enhancement tool for Biometric Systems. This project aims to enhance blood vessel structures in image sets using advanced fusion and image processing techniques (fuse multiple images of finger veins to one better image). It integrates preprocessing, fusion, and postprocessing to improve vessel visibility. Implemented Fusion methods are: Wavelet Fusion, Laplacian Pyramid Fusion, PCA Fusion, Exposure Fusion, Pixel Averaging and HDR (High Dynamic Range) which has the best results.",
        link: "https://github.com/imiskii/BIO-FPVE"
    },
    "OpenMP project": {
        description: "Code vectorization and parallelization with OpenMP. The goal of the project was to vectorize and parallelize C++ code using OpenMP pragmas. This project demonstrates very well the use of vectorization and parallelism in modern processors for programming fast and powerful algorithms.",
        link: "https://github.com/imiskii/VUT-FIT/tree/main/AVS%20(Computation%20Systems%20Architectures)"
    },
    "IS for event management": {
        description: "This project aimed to develop an information system for managing events. It was a team effort involving three people. My role was to design and implement the user interface and design the database. We used HTML, CSS, JavaScript, and PHP for the implementation. This project gives me valuable experience in developing information systems and web interfaces.",
        link: "https://github.com/imiskii/IIS-EventManagerIS"
    },
    "Bluetooth Metronome": {
        description: "The project's objective was to develop an embedded application on the ESP32 platform, functioning as a metronome controllable through WebBluetooth. The metronome includes essential features such as speed, rhythm, and volume adjustments. The development used the esp-idf framework, and the WebBluetooth client was created with JavaScript, along with a simple interface in HTML and CSS. This project provided me with insights into embedded application development and working with peripherals like timers and Bluetooth.",
        link: "https://github.com/imiskii/VUT-FIT/tree/main/IMP%20(Microprocessors%20and%20Embedded%20Systems)/BluetoothMetronom"
    },
    "Steganography": {
        description: "A program for finding a hidden message within an image using pixels on prime number indexes. The program is written in C language and utilizes a bit array, combined with a simple implementation of the Sieve of Eratosthenes, to find prime numbers. The result is a program capable of finding the hidden message within an image. Additionally, the program can output the last 10 prime numbers smaller than 300,000. Throughout the project, I primarily improved my programming skills in C and learned to work more effectively with pointers and memory indexing. I also experimented with potential compiler optimizations and compared the speed of macros against inline functions in C.",
        link: "https://github.com/imiskii/VUT-FIT/tree/main/IJC%20(The%20C%20Programing%20language)/Project1"
    },
    "Hash table": {
        description: "Implementation of a data structure called a hash table in the C language. The program is implemented in C and includes functions for working with the hash table, including dynamic resizing based on its current occupancy. The result is an abstract data structure - a hash table, along with a program that can count the occurrences of individual words in a given text document. This project helped me improve my programming skills in the C language. Additionally, I gained experience in creating static and dynamic libraries in C.",
        link: "https://github.com/imiskii/VUT-FIT/tree/main/IJC%20(The%20C%20Programing%20language)/Project2"
    },
    "Client to remote server": {
        description: "A client that can connect to a remote calculator. The implementation is done in C/C++ language and uses TCP/UDP protocols based on the chosen variant. The program is capable of receiving and sending messages using TCP/UDP protocol to a specified IP address or hostname through a selected port. Throughout this project, I gained knowledge about the functioning principles of TCP and UDP protocols. I also had the opportunity to practice handling program interruption in C/C++.",
        link: "https://github.com/imiskii/VUT-FIT/tree/main/IPK%20(Computer%20Communications%20and%20Networks)/Project1"
    },
    "IPPcode23 Interpreter": {
        description: "A program that interprets code written in the language of symbolic instructions IPPcode23, which is processed from an XML file. This program is implemented in Python. Through this project, I improved my knowledge of the Python language and also had the opportunity to practice object-oriented programming.",
        link: "https://github.com/imiskii/VUT-FIT/tree/main/IPP%20(Principles%20of%20Programming%20Languages)/Project"
    },
    "Database for construction company": {
        description: "An SQL script that creates a database for a construction company. The database design was created using an ER diagram that meets the company's requirements. The script includes commands for creating tables, implementing database triggers, procedures, materialized views, and also an explain plan to monitor the optimization of SQL queries. Through this project, I learned how to work with SQL, use SQL queries, triggers, procedures, and other useful SQL constructs.",
        link: "https://github.com/imiskii/VUT-FIT-IDS"
    }
}


function switch_sp(sItem, project_name){

    if (!sItem.classList.contains('selected-item')){  
        const nameLabel = document.getElementById('sp-name');
        const textP = document.getElementById('sp-text');
        const linkP = document.getElementById('sp-link');
    
        const spList = Array.from(sItem.parentNode.getElementsByClassName('sp-item'));
        spList.forEach(item => {
            item.classList.remove('selected-item');
        });
    
        sItem.classList.add('selected-item');
    
        const project = projects[project_name];

        nameLabel.textContent = project_name;
        textP.textContent = project.description;
        linkP.href = project.link;
    }
}