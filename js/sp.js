

const projects = {
    "PHP compiler": "Compiler implementation for imperative language IFJ22 (based on PHP). This is a team project, created in the C programming language. 4 people worked on this project. My work on the project was lexical analysis, symbol table, abstract data structures stack and hash table. The result is a program that receives the code written in IFJ22 at the input and returns compiled intermediate code similar to assembler. During the project, I had the opportunity to enhance my teamwork skills while putting my practical knowledge of the versioning system Git into action. Furthermore, I was able to apply my solid foundation in C programming, which proved beneficial to the success of the project.",
    "l4-port-scanner": "A tool for scanning TCP/UDP ports, inspired by the nmap tool. The program is developed in C/C++ language, utilizing the pcap-library. The result is a program capable of scanning TCP/UDP ports on both IPv4 and IPv6 addresses. The program supports scanning using hostnames and allows specifying specific ports or port ranges. Through this project, I gained knowledge about the functioning of TCP, UDP protocols, as well as IPv4 and IPv6 protocols. Additionally, I acquired experience in object-oriented programming in C++.",
    "dhcp-stats": "The project aimed to create a tool that monitors assigned IPv4 addresses. If allocations surpass 50%, the tool generates a syslog record. The monitoring is based on analyzing captured DHCP packets or a .pcap file with DHCP communication. The entire implementation is in C++. This project gave me a deep understanding of DHCP and provided experience with pcaplib.",
    "IS for event management": "This project aimed to develop an information system for managing events. It was a team effort involving three people. My role was to design and implement the user interface and design the database. We used HTML, CSS, JavaScript, and PHP for the implementation. This project gives me valuable experience in developing information systems and web interfaces.",
    "Bluetooth Metronome": "The project's objective was to develop an embedded application on the ESP32 platform, functioning as a metronome controllable through WebBluetooth. The metronome includes essential features such as speed, rhythm, and volume adjustments. The development used the esp-idf framework, and the WebBluetooth client was created with JavaScript, along with a simple interface in HTML and CSS. This project provided me with insights into embedded application development and working with peripherals like timers and Bluetooth.",
    "Steganography": "A program for finding a hidden message within an image using pixels on prime number indexes. The program is written in C language and utilizes a bit array, combined with a simple implementation of the Sieve of Eratosthenes, to find prime numbers. The result is a program capable of finding the hidden message within an image. Additionally, the program can output the last 10 prime numbers smaller than 300,000. Throughout the project, I primarily improved my programming skills in C and learned to work more effectively with pointers and memory indexing. I also experimented with potential compiler optimizations and compared the speed of macros against inline functions in C.",
    "Hash table": "Implementation of a data structure called a hash table in the C language. The program is implemented in C and includes functions for working with the hash table, including dynamic resizing based on its current occupancy. The result is an abstract data structure - a hash table, along with a program that can count the occurrences of individual words in a given text document. This project helped me improve my programming skills in the C language. Additionally, I gained experience in creating static and dynamic libraries in C.",
    "Client to remote server": "A client that can connect to a remote calculator. The implementation is done in C/C++ language and uses TCP/UDP protocols based on the chosen variant. The program is capable of receiving and sending messages using TCP/UDP protocol to a specified IP address or hostname through a selected port. Throughout this project, I gained knowledge about the functioning principles of TCP and UDP protocols. I also had the opportunity to practice handling program interruption in C/C++.",
    "IPPcode23 Interpreter": "A program that interprets code written in the language of symbolic instructions IPPcode23, which is processed from an XML file. This program is implemented in Python. Through this project, I improved my knowledge of the Python language and also had the opportunity to practice object-oriented programming.",
    "Database for construction company": "An SQL script that creates a database for a construction company. The database design was created using an ER diagram that meets the company's requirements. The script includes commands for creating tables, implementing database triggers, procedures, materialized views, and also an explain plan to monitor the optimization of SQL queries. Through this project, I learned how to work with SQL, use SQL queries, triggers, procedures, and other useful SQL constructs."
}


function switch_sp(sItem, project_name){

    if (!sItem.classList.contains('selected-item')){  
        const nameLabel = document.getElementById('sp-name');
        const textP = document.getElementById('sp-text');
    
        const spList = Array.from(sItem.parentNode.getElementsByClassName('sp-item'));
        spList.forEach(item => {
            item.classList.remove('selected-item');
        });
    
        sItem.classList.add('selected-item');
    
        nameLabel.textContent = project_name;
        textP.textContent = projects[project_name];
    }
}