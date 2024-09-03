$(document).ready(function() {
    $("#next-quote").on("click", function(e) {
        e.preventDefault();

        var randomQuoteNumber = getRandomQuoteNumber();
        updateQuote(randomQuoteNumber);
    });

    var q = location.search.split("?q=")[1];

    if (q >= 0 && q < quotes.length) {
        updateQuote(q);
    } else {
        $("#next-quote").click();
    }
});

$(document).ready(function() {
  $(".menu-toggle").click(function() {
    $(".nav-links").slideToggle(400);
  });

  // Show/hide dropdown menu on mobile
  $(".dropdown > a").click(function(e) {
    e.preventDefault();
    $(this).siblings(".dropdown-content").slideToggle(400);
  });

  // Close dropdown menu when clicking outside
  $(document).on("click", function(event) {
    if (!$(event.target).closest(".dropdown").length) {
      $(".dropdown-content").slideUp(400);
    }
  });
});

// Function to copy the dynamically generated quote
function copyQuoteToClipboard() {
    var quoteText = document.getElementById("quote").innerText;
    
    // Create a temporary textarea element
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = quoteText;
    
    // Append the textarea element to the body
    document.body.appendChild(tempTextArea);
    
    // Select the text in the textarea
    tempTextArea.select();
    
    // Execute the copy command
    document.execCommand("copy");
    
    // Remove the textarea element
    document.body.removeChild(tempTextArea);
  }
  
  // Function to handle mouseenter event and copy the quote
  function handleMouseEnter() {
    // Call the function to copy the quote to clipboard
    copyQuoteToClipboard();
  }
  
  // Attach the event listener after the quote is generated
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("quote-box").addEventListener("mouseenter", handleMouseEnter);
  });

function updateQuote(quoteNumber) {
    var randomQuote = quotes[quoteNumber];

    $("#quote").html(randomQuote.quote);
    $("#author").html(randomQuote.author);
    $("#quote-box").removeClass().addClass("animated bounceIn").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass();
    });

}

function getRandomQuoteNumber() {
    return Math.floor(Math.random() * quotes.length);
}

document.getElementById('copy-button').addEventListener('click', function() {
    var quoteText = document.getElementById('quote').innerText;
    navigator.clipboard.writeText(quoteText).then(function() {
      console.log('Text copied to clipboard: ' + quoteText);
      // Display success message using SweetAlert
      Swal.fire({
        icon: 'Success',
        title: 'Text copied to clipboard!',
        text: quoteText
      });
    }, function(err) {
      console.error('Unable to copy text to clipboard: ', err);
      // Display error message using SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Unable to copy text to clipboard!',
        text: err
      });
    });
  });
  document.getElementById('copy-button').addEventListener('click', function() {
    var quoteText = document.getElementById('quote').innerText;
    navigator.clipboard.writeText(quoteText).then(function() {
      console.log('Text copied to clipboard: ' + quoteText);
      // Display success message using SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Text copied to clipboard!',
        text: quoteText,
        customClass: {
          popup: 'dark-mode'
        }
      });
    }, function(err) {
      console.error('Unable to copy text to clipboard: ', err);
      // Display error message using SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Unable to copy text to clipboard!',
        text: err,
        customClass: {
          popup: 'dark-mode'
        }
      });
    });
  });
    
  


var quotes = [{
        
        "quote": "3D Visualization of Conic Sections in XNA Game Programming Framework"
    },
    {
        "quote": "A 3D Immersive Environment for Visualising Robot Sensor Data"
    },
    {
        "quote": "A calibration system for a visual prosthesis"
    },
    {
        "quote": "A collaborative web-based genome browser for large-scale epigenomic analysis"
    },
    {
        "quote": "A Comparison of the Efficiency of an Atomic Component Operation versus Primitive Operations for Building a Real-Time Collaborative Editing API"
    },
    {
        "quote": "A covert channel based on weak memory"
    },
    {
        "quote": "A DSpace Mobile Theme for San Diego State University"
    },
    {
        "quote": "A Dynamic Database Approach for E-Commerce System Using WordPress"
    },
    {
        "quote": "A Flexible Test Interface and Grading Service For an AJAX Based Course Management System"
    },
    {
        "quote": "A Foundational model of the ARM11 Memory Management Unit"
    },
    {
        "quote": "A Household Mobile Robot"
    },
    {
        "quote": "A Journey through the Lattice"
    },
    {
        "quote": "A Method for Minimizing Computing Core Costs in Cloud Infrastructures That Host Location-Based Advertising Services"
    },
    {
        "quote": "A Mobile Application to Aid Consumers in Accessing Cost Effectiveness in Their Automobile"
    },
    {
        "quote": "A Mobile Device-Controlled Blood Pressure Monitor"
    },
    {
        "quote": "A Mobile Tool about Causes and Distribution of Dramatic Natural Phenomena"
    },
    {
        "quote": "A new Operating System Design for the Argus Multiprocessor platform"
    },
    {
        "quote": "A New RAID Linux Flash File System"
    },
    {
        "quote": "A New Software Project Management Tool"
    },
    {
        "quote": "A PhD Thesis Submission/Examination System for UNSW"
    },
    {
        "quote": "A Preferential Voting System as a Collaboration Software Solution"
    },
    {
        "quote": "A service oriented cross-platform approach to perform thermodynamic calculations"
    },
    {
        "quote": "A System for Retrograde Analysis in Chess"
    },
    {
        "quote": "A System for Verifying Modularity in Action Theories"
    },
    {
        "quote": "A System to Assist with Teaching Allocation"
    },
    {
        "quote": "A usability Analysis of Privacy-preserving mobile applications through crowd sourcing"
    },
    {
        "quote": "A Voting Ballot Web Application as a Collaborative Support System"
    },
    {
        "quote": "ACP Automated Course Portal through Email"
    },
    {
        "quote": "Adaptive Content Replication in Peer to Peer Networks"
    },
    {
        "quote": "Adaptive E-learning"
    },
    {
        "quote": "Adaptive Low Bit Rate Video Streaming Over Wireless Networks"
    },
    {
        "quote": "Adaptive Server Selection in Peer-to-Peer Networks"
    },
    {
        "quote": "Advanced File Manager with Multiple Functions to Manipulate Files with Different Formats"
    },
    {
        "quote": "Advertisement Management System"
    },
    {
        "quote": "Airline Reservation System"
    },
    {
        "quote": "AJAX-based Process and Service Mashup"
    },
    {
        "quote": "Allocation problems in practice"
    },
    {
        "quote": "An AJAX Based Technical Forum for Thermodynamics Community"
    },
    {
        "quote": "An AJAX-Based Event Calendar for a Course Management System"
    },
    {
        "quote": "An Alternative Data Structure to Line Sweep Algorithm"
    },
    {
        "quote": "An Android Application for Crime Analysis in San Diego"
    },
    {
        "quote": "An Efficient Location Information Management System LIMS For Smartphone Applications"
    },
    {
        "quote": "An Insight on a Mobile Friendly Web"
    },
    {
        "quote": "An Intelligent Healthcare Data Management System for Mobile Environment"
    },
    {
        "quote": "An Interactive Economic GIS Tool for Europe Using Map Objects for Java"
    },
    {
        "quote": "An Interactive GIS Tool on Chinese History and Its Topography"
    },
    {
        "quote": "An Interactive GUI Design for Code Analysis"
    },
    {
        "quote": "An Interactive History and Geography of Mexico Using Map Objects for Java"
    },
    {
        "quote": "An Interactive Mitochondrial Database"
    },
    {
        "quote": "Analyzing logs of super computers and data centers for anomaly detection"
    },
    {
        "quote": "Analysis and Classification of Time-Series X-Ray Crystallography Image Sequences"
    },
    {
        "quote": "Analysis and Debugging Techniques of Android Platform"
    },
    {
        "quote": "Analysis of next generation sequencing data of microbial communities"
    },
    {
        "quote": "Analysis of Protocols for High-assurance Networks"
    },
    {
        "quote": "Android App for School of Arts and Design"
    },
    {
        "quote": "Android Application for Library Resource Access"
    },
    {
        "quote": "Android Based Menu Ordering App"
    },
    {
        "quote": "Android based processor for real-time image processing in a bionic eye implant"
    },
    {
        "quote": "Android Based Student Handbook"
    },
    {
        "quote": "Android Implementation of the mSpeed mobile application"
    },
    {
        "quote": "Android Joystick Application using Bluetooth"
    },
    {
        "quote": "Android Mobile Quiz Game"
    },
    {
        "quote": "Android Controlled Car"
    },
    {
        "quote": "Android-Based Class Attendance Monitoring Application using Barcode"
    },
    {
        "quote": "Answer Set Programming for Robot Control"
    },
    {
        "quote": "API development for Application Analysis using CLANG/LLVM"
    },
    {
        "quote": "Application Analysis for Designing Embedded Hardware"
    },
    {
        "quote": "Application Design and Measurement in Cloud Platforms"
    },
    {
        "quote": "Application Locker Android"
    },
    {
        "quote": "Application of Ant-Based Technology in Selection of Glycan Markers for Cancer Detection"
    },
    {
        "quote": "Application of Random Forest Algorithm in Biomarker Discovery for Cancer Detection"
    },
    {
        "quote": "Applying Informed Search Methods to General Single-Player Games"
    },
    {
        "quote": "Arabic Culture Course Management System"
    },
    {
        "quote": "Architecture-driven Security Analysis"
    },
    {
        "quote": "ASIP Design"
    },
    {
        "quote": "Assorted GIS Tools"
    },
    {
        "quote": "Attendance and Monitoring System using Barcode Technology"
    },
    {
        "quote": "Attendance System using Barcode Technology"
    },
    {
        "quote": "Automated Business Permit Issuance System"
    },
    {
        "quote": "Automated Code Partitioning for MPSoC Architectures"
    },
    {
        "quote": "Automated Legacy Code Partitioning for Embedded Systems"
    },
    {
        "quote": "Automated Test Generation with Static Analysis"
    },
    {
        "quote": "Automated Water Dispenser with Purifier with LG Touch Screen"
    },
    {
        "quote": "Automatic extraction of information from textual financial data"
    },
    {
        "quote": "Automatic IP Generation for ARGUS framework in FPGAs"
    },
    {
        "quote": "Automation of Android Application and Bug Tracing Mechanism"
    },
    {
        "quote": "Availability Analysis for Applications in Public Cloud"
    },
    {
        "quote": "Bacterial evolution modeling the dynamics of antibiotic resistance"
    },
    {
        "quote": "Belief Revision for General Game Playing"
    },
    {
        "quote": "Big Data Analytics Hadoop Performance Analysis"
    },
    {
        "quote": "Big Data Platform"
    },
    {
        "quote": "Big Data Provenance"
    },
    {
        "quote": "Bike and Running Trails on Android based on Google Maps API"
    },
    {
        "quote": "Billing System"
    },
    {
        "quote": "Bioinformatics of the immune system"
    },
    {
        "quote": "Bioinformatics software testing"
    },
    {
        "quote": "Biometric authentication on Apple Watch"
    },
    {
        "quote": "Biometrics Projects"
    },
    {
        "quote": "Bluetooth Controlled Robot using Android Mobile CoE/CpE/IT/CS"
    },
    {
        "quote": "Book Catalog Application using Android"
    },
    {
        "quote": "Breadcrumb Recommendation System The Nexus of User Intuition on Conceptual and Statistical Association"
    },
    {
        "quote": "Brgy Certificate Issuance and Record Management System"
    },
    {
        "quote": "Brgy Residents Information System PHP/MySQL"
    },
    {
        "quote": "Building a Web Content Management System"
    },
    {
        "quote": "Building Change Detection Based on Remote Sensed Images"
    },
    {
        "quote": "Building Provably Secure Application"
    },
    {
        "quote": "Burrows-Wheeler Aligner A Parallel Approach"
    },
    {
        "quote": "Business Permit Issuance System"
    },
    {
        "quote": "C-to-HDL Synthesis and Exploration for the ARGUS platform in FPGAs"
    },
    {
        "quote": "Camera-Based Heart Rate Detector using Android"
    },
    {
        "quote": "Car Registration License Plate Detection and Recognition System"
    },
    {
        "quote": "Cascading Style Sheet Generator"
    },
    {
        "quote": "Cashiering and Queuing System"
    },
    {
        "quote": "Causal disease mutation identification in whole genome sequencing data"
    },
    {
        "quote": "CEGAR testbed in Haskell"
    },
    {
        "quote": "Cemetery Mapping and Information System"
    },
    {
        "quote": "Chart feature facility packaged for map object java edition"
    },
    {
        "quote": "CIBER Measurement Repository"
    },
    {
        "quote": "Class Scheduling System"
    },
    {
        "quote": "Class Time Table in Android"
    },
    {
        "quote": "Classroom Management System"
    },
    {
        "quote": "Click Modular Router on seL4"
    },
    {
        "quote": "Client server based guidance system"
    },
    {
        "quote": "Cloud Based File System on Mobile Device"
    },
    {
        "quote": "Cloud-based computing for massively parallel single-cell transcriptomic analysis"
    },
    {
        "quote": "Cloud-in-Cloud Software Defined Data Center for the Next Generation of Cloud Computing"
    },
    {
        "quote": "Coordinating Multiple Cognitive Robotic Agents"
    },
    {
        "quote": "CogenPro Migration from Java Desktop Application to Web Application"
    },
    {
        "quote": "Cognitive vision"
    },
    {
        "quote": "Collaborative Search of Universities for MS in the Southwestern US"
    },
    {
        "quote": "Colonial History of Mexico A Bilingual GIS Application"
    },
    {
        "quote": "Come and talk about topics of mutual interest"
    },
    {
        "quote": "Comparative Analysis of Solutions to the Ramification Problem"
    },
    {
        "quote": "Comparative Performance of Model checkers for epistemic logic"
    },
    {
        "quote": "Comparative Study of Oracle Spatial and Postgres Spatial"
    },
    {
        "quote": "Comparing performance of applications written in native SDK web phone frameworks and HTML5"
    },
    {
        "quote": "Comprehensive Web Application for CITER Center of Industrial Training and Engineering Research"
    },
    {
        "quote": "Computer Assisted Instruction any topic/subject PHP/MySQL Moodle"
    },
    {
        "quote": "Computer Laboratory Time Management System"
    },
    {
        "quote": "Computer-Aided Instruction with Voice Recognition system"
    },
    {
        "quote": "Computerized Assessment of School Fees"
    },
    {
        "quote": "Computerized detection of lung diseases using HRCT images"
    },
    {
        "quote": "Computerized Faculty Evaluation System"
    },
    {
        "quote": "Concurrency theory and distributed systems"
    },
    {
        "quote": "Concurrent Programming Patterns for Scalable Network Platform Node js"
    },
    {
        "quote": "Configurable Low-power FFT Processor Design and Implementation for Synthetic Aperture Radar SAR Applications"
    },
    {
        "quote": "Content Management System for Art Lab SDSU"
    },
    {
        "quote": "Continuous Deployment for Big Data Analytics Applications"
    },
    {
        "quote": "Controlling a mobile robot using speech"
    },
    {
        "quote": "Conversational Agent"
    },
    {
        "quote": "Conversational agents for health communication"
    },
    {
        "quote": "Convert sdo_geometry objectS to esri shapefiles"
    },
    {
        "quote": "Converting American Sign Language to voice using RBFNN"
    },
    {
        "quote": "Coordinated Multi-Robot Security System Using Fuzzy Logic Decision Making"
    },
    {
        "quote": "Coordinating teams of robots"
    },
    {
        "quote": "Course/Program Recommendation System"
    },
    {
        "quote": "Creating Leon 3 platform for ARGUS"
    },
    {
        "quote": "CREST and Process Mashup in the Cloud"
    },
    {
        "quote": "CSE Database Managing Research/Publication Data"
    },
    {
        "quote": "CUDA Implementation of Parallel Algorithms for Animal Noseprint Identification"
    },
    {
        "quote": "Customization for Mobile EBook Readers"
    },
    {
        "quote": "Cystic Fibrosis Patient Monitoring Application"
    },
    {
        "quote": "Data Parallel Haskell Benchmark Suite"
    },
    {
        "quote": "Data Races Detection in Java Programs"
    },
    {
        "quote": "Deadlock Detection and Recovery in Linux"
    },
    {
        "quote": "Decision support for a home telehealth system"
    },
    {
        "quote": "Decision Support in Recommender Systems Using Opinion-Based Reviews"
    },
    {
        "quote": "Decoding the language of life epigenomic determinants for cell-type-specific signalling response"
    },
    {
        "quote": "Deep sequencing analysis of the early infection phase of hepatitis C virus"
    },
    {
        "quote": "Dependable Auditing on Operations of in-Cloud Applications"
    },
    {
        "quote": "Dependable Cloud Operations and Systems"
    },
    {
        "quote": "Deployment of OpenCV for Embedded System"
    },
        {
            "quote": "3D Visualization of Conic Sections in XNA Game Programming Framework"
        },
        {
            "quote": "A 3D Immersive Environment for Visualising Robot Sensor Data"
        },
        {
            "quote": "A Calibration System for a Visual Prosthesis"
        },
        {
            "quote": "A Collaborative Web-Based Genome Browser for Large-Scale Epigenomic Analysis"
        },
        {
            "quote": "A Comparison of the Efficiency of an Atomic Component Operation Versus Primitive Operations for Building a Real-Time Collaborative Editing API"
        },
        {
            "quote": "A Covert Channel Based on Weak Memory"
        },
        {
            "quote": "A DSpace Mobile Theme for San Diego State University"
        },
        {
            "quote": "A Dynamic Database Approach for E-Commerce System Using WordPress"
        },
        {
            "quote": "A Flexible Test Interface and Grading Service For an AJAX Based Course Management System"
        },
        {
            "quote": "A Foundational Model of the ARM11 Memory Management Unit"
        },
        {
            "quote": "A Household Mobile Robot"
        },
        {
            "quote": "A Journey Through the Lattice"
        },
        {
            "quote": "A Method for Minimizing Computing Core Costs in Cloud Infrastructures That Host Location-Based Advertising Services"
        },
        {
            "quote": "A Mobile Application to Aid Consumers in Accessing Cost Effectiveness in Their Automobile"
        },
        {
            "quote": "A Mobile Device-Controlled Blood Pressure Monitor"
        },
        {
            "quote": "A Mobile Tool About Causes and Distribution of Dramatic Natural Phenomena"
        },
        {
            "quote": "A New Operating System Design for the Argus Multiprocessor Platform"
        },
        {
            "quote": "A New RAID Linux Flash File System"
        },
        {
            "quote": "A New Software Project Management Tool"
        },
        {
            "quote": "A PhD Thesis Submission/Examination System for UNSW"
        },
        {
            "quote": "A Preferential Voting System as a Collaboration Software Solution"
        },
        {
            "quote": "A Service Oriented Cross-Platform Approach to Perform Thermodynamic Calculations"
        },
        {
            "quote": "A System for Retrograde Analysis in Chess"
        },
        {
            "quote": "A System for Verifying Modularity in Action Theories"
        },
        {
            "quote": "A System to Assist with Teaching Allocation"
        },
        {
            "quote": "A Usability Analysis of Privacy-Preserving Mobile Applications Through Crowdsourcing"
        },
        {
            "quote": "A Voting Ballot Web Application as a Collaborative Support System"
        },
        {
            "quote": "ACP Automated Course Portal Through Email"
        },
        {
            "quote": "Adaptive Content Replication in Peer to Peer Networks"
        },
        {
            "quote": "Adaptive E-learning"
        },
        {
            "quote": "Adaptive Low Bit Rate Video Streaming Over Wireless Networks"
        },
        {
            "quote": "Adaptive Server Selection in Peer-to-Peer Networks"
        },
        {
            "quote": "Advanced File Manager with Multiple Functions to Manipulate Files with Different Formats"
        },
        {
            "quote": "Advertisement Management System"
        },
        {
            "quote": "Airline Reservation System"
        },
        {
            "quote": "AJAX-Based Process and Service Mashup"
        },
        {
            "quote": "Allocation Problems in Practice"
        },
        {
            "quote": "An AJAX Based Technical Forum for Thermodynamics Community"
        },
        {
            "quote": "An AJAX-Based Event Calendar for a Course Management System"
        },
        {
            "quote": "An Alternative Data Structure to Line Sweep Algorithm"
        },
        {
            "quote": "An Android Application for Crime Analysis in San Diego"
        },
        {
            "quote": "An Efficient Location Information Management System LIMS For Smartphone Applications"
        },
        {
            "quote": "An Insight on a Mobile Friendly Web"
        },
        {
            "quote": "An Intelligent Healthcare Data Management System for Mobile Environment"
        },
        {
            "quote": "An Interactive Economic GIS Tool for Europe Using Map Objects for Java"
        },
        {
            "quote": "An Interactive GIS Tool on Chinese History and Its Topography"
        },
        {
            "quote": "An Interactive GUI Design for Code Analysis"
        },
        {
            "quote": "An Interactive History and Geography of Mexico Using Map Objects for Java"
        },
        {
            "quote": "An Interactive Mitochondrial Database"
        },
        {
            "quote": "Analyzing Logs of Supercomputers and Data Centers for Anomaly Detection"
        },
        {
            "quote": "Analysis and Classification of Time-Series X-Ray Crystallography Image Sequences"
        },
        {
            "quote": "Analysis and Debugging Techniques of Android Platform"
        },
        {
            "quote": "Analysis of Next Generation Sequencing Data of Microbial Communities"
        },
        {
            "quote": "Analysis of Protocols for High-Assurance Networks"
        },
        {
            "quote": "Android App for School of Arts and Design"
        },
        {
            "quote": "Android Application for Library Resource Access"
        },
        {
            "quote": "Android Based Menu Ordering App"
        },
        {
            "quote": "Android Based Processor for Real-Time Image Processing in a Bionic Eye Implant"
        },
        {
            "quote": "Android Based Student Handbook"
        },
        {
            "quote": "Android Implementation of the mSpeed Mobile Application"
        },
        {
            "quote": "Android Joystick Application Using Bluetooth"
        },
        {
            "quote": "Android Mobile Quiz Game"
        },
        {
            "quote": "Android Controlled Car"
        },
        {
            "quote": "Android-Based Class Attendance Monitoring Application Using Barcode"
        },
        {
            "quote": "Answer Set Programming for Robot Control"
        },
        {
            "quote": "API Development for Application Analysis Using CLANG/LLVM"
        },
        {
            "quote": "Application Analysis for Designing Embedded Hardware"
        },
        {
            "quote": "Application Design and Measurement in Cloud Platforms"
        },
        {
            "quote": "Application Locker Android"
        },
        {
            "quote": "Application of Ant-Based Technology in Selection of Glycan Markers for Cancer Detection"
        },
        {
            "quote": "Application of Random Forest Algorithm in Biomarker Discovery for Cancer Detection"
        },
        {
            "quote": "Applying Informed Search Methods to General Single-Player Games"
        },
        {
            "quote": "Arabic Culture Course Management System"
        },
        {
            "quote": "Architecture-Driven Security Analysis"
        },
        {
            "quote": "ASIP Design"
        },
        {
            "quote": "Assorted GIS Tools"
        },
        {
            "quote": "Attendance and Monitoring System Using Barcode Technology"
        },
        {
            "quote": "Attendance System Using Barcode Technology"
        },
        {
            "quote": "Automated Business Permit Issuance System"
        },
        {
            "quote": "Automated Code Partitioning for MPSoC Architectures"
        },
        {
            "quote": "Automated Legacy Code Partitioning for Embedded Systems"
        },
        {
            "quote": "Automated Test Generation with Static Analysis"
        },
        {
            "quote": "Automated Water Dispenser with Purifier with LG Touch Screen"
        },
        {
            "quote": "Automatic Extraction of Information from Textual Financial Data"
        },
        {
            "quote": "Automatic IP Generation for ARGUS Framework in FPGAs"
        },
        {
            "quote": "Automation of Android Application and Bug Tracing Mechanism"
        },
        {
            "quote": "Availability Analysis for Applications in Public Cloud"
        },
        {
            "quote": "Bacterial Evolution Modeling the Dynamics of Antibiotic Resistance"
        },
        {
            "quote": "Belief Revision for General Game Playing"
        },
        {
            "quote": "Big Data Analytics Hadoop Performance Analysis"
        },
        {
            "quote": "Big Data Platform"
        },
        {
            "quote": "Big Data Provenance"
        },
        {
            "quote": "Bike and Running Trails on Android Based on Google Maps API"
        },
        {
            "quote": "Billing System"
        },
        {
            "quote": "Bioinformatics of the Immune System"
        },
        {
            "quote": "Bioinformatics Software Testing"
        },
        {
            "quote": "Biometric Authentication on Apple Watch"
        },
        {
            "quote": "Biometrics Projects"
        },
        {
            "quote": "Bluetooth Controlled Robot Using Android Mobile"
        },
        {
            "quote": "Book Catalog Application Using Android"
        },
        {
            "quote": "Breadcrumb Recommendation System: The Nexus of User Intuition on Conceptual and Statistical Association"
        },
        {
            "quote": "Brgy Certificate Issuance and Record Management System"
        },
        {
            "quote": "Brgy Residents Information System PHP/MySQL"
        },
        {
            "quote": "Building a Web Content Management System"
        },
        {
            "quote": "Building Change Detection Based on Remote Sensed Images"
        },
        {
            "quote": "Building Provably Secure Application"
        },
        {
            "quote": "Burrows-Wheeler Aligner: A Parallel Approach"
        },
        {
            "quote": "Business Permit Issuance System"
        },
        {
            "quote": "C-to-HDL Synthesis Using LLVM"
        },
        {
            "quote": "Cache Coherence in NoC Architecture"
        },
        {
            "quote": "Cache Memory Design in ARM Cortex A9"
        },
        {
            "quote": "Caerus - A Content-Based Web Recommender System"
        },
        {
            "quote": "Calibration of a Sensor Network"
        },
        {
            "quote": "Calibration Tool for a Visual Prosthesis"
        },
        {
            "quote": "Calorimeter Design"
        },
        {
            "quote": "Campus Location Finder"
        },
        {
            "quote": "Carbon Trading Exchange Platform"
        },
        {
            "quote": "Card-Based Attendance System"
        },
        {
            "quote": "Caronic Gas"
        },
        {
            "quote": "Caronic Gas Sensor Network"
        },
        {
            "quote": "Case Studies in Developing High-Availability Cloud Platforms"
        },
        {
            "quote": "Cataloguing Gene Expression Profiles Using Semantic Web Technologies"
        },
        {
            "quote": "CCTV Monitoring System"
        },
        {
            "quote": "Cephalopod-Inspired Robotics"
        },
        {
            "quote": "Certificate Issuance System"
        },
        {
            "quote": "Certificate of Training and Compliance System"
        },
        {
            "quote": "Certificate of Training System"
        },
        {
            "quote": "Certifying Software Quality"
        },
        {
            "quote": "Characterization of the Wireless Communication in an Indoor Environment"
        },
        {
            "quote": "Checkers Game Development Using Java"
        },
        {
            "quote": "Checklist App for Engineering Calculations"
        },
        {
            "quote": "Chromosomal Evolution"
        },
        {
            "quote": "CIM-Based Software for Sensor Network Platform"
        },
        {
            "quote": "Cisco Packet Tracer Projects"
        },
        {
            "quote": "Class Scheduling System"
        },
        {
            "quote": "Classification Algorithms for Biomedical Applications"
        },
        {
            "quote": "Classification of Breast Cancer Using Gene Expression Profiling"
        },
        {
            "quote": "Classification of Climate Variables Using Gaussian Mixture Models"
        },
        {
            "quote": "Classification of Tweets Using NLP Techniques"
        },
        {
            "quote": "Classification System Using Neural Network for Weather Prediction"
        },
        {
            "quote": "Classroom Attendance Monitoring System"
        },
        {
            "quote": "Classroom Feedback System"
        },
        {
            "quote": "Classroom Online Quiz System"
        },
        {
            "quote": "CLOAC: a Collaborative Learning Object Annotating Client"
        },
        {
            "quote": "Cloud Computing Security: Key Management in a Cloud"
        },
        {
            "quote": "Cloud Based File Sharing System Using Multiple Cloud Storage Service Providers"
        },
        {
            "quote": "Cloud Based Parking Management System"
        },
        {
            "quote": "Cloud-Based Accounting Information System"
        },
        {
            "quote": "Cloud-Based Android Application"
        },
        {
            "quote": "Cloud-Based Application Framework for Mobile Devices"
        },
        {
            "quote": "Cloud-Based Event Management System"
        },
        {
            "quote": "Cloud-Based Exam Scheduler"
        },
        {
            "quote": "Cloud-Based File Manager"
        },
        {
            "quote": "Cloud-Based Student Monitoring System"
        },
        {
            "quote": "Cloud-Based Voting System"
        },
        {
            "quote": "CMS for Research Theses"
        },
        {
            "quote": "Code Annotation System"
        },
        {
            "quote": "Code Refactoring for MPI Applications"
        },
        {
            "quote": "Code Refactoring for OpenMP Applications"
        },
        {
            "quote": "Code Review Tool"
        },
        {
            "quote": "Cognitive Computing in Robotics"
        },
        {
            "quote": "Cold Chain Logistics and Cold Chain Technologies"
        },
        {
            "quote": "Collision Avoidance System for UAVs"
        },
        {
            "quote": "Color Vision Testing in Fish"
        },
        {
            "quote": "Communication Between Swarms of Robots"
        },
        {
            "quote": "Communication Between Swarms of Robots Using Bluetooth"
        },
        {
            "quote": "Communication in a Cooperative Robot System"
        },
        {
            "quote": "Communication Protocol for Cooperative Robot Systems"
        },
        {
            "quote": "Community Detection in Social Networks"
        },
        {
            "quote": "Community Radio Database System"
        },
        {
            "quote": "Comparative Analysis of Process Scheduling Algorithms in Multiprogramming Operating Systems"
        },
        {
            "quote": "Comparative Analysis of Weather Forecasting Using Different Machine Learning Techniques"
        },
        {
            "quote": "Comparative Study of Cloud-Based Solutions for Video Hosting"
        },
        {
            "quote": "Comparative Study of Network Intrusion Detection Systems"
        },
        {
            "quote": "Comparative Study of Open Source and Commercial Database Systems"
        },
        {
            "quote": "Comparative Study of Wi-Fi and Cellular Networks"
        },
        {
            "quote": "Comparison of Algorithms for Face Recognition"
        },
        {
            "quote": "Comparison of Different Techniques for the Detection of Code Similarities"
        },
        {
            "quote": "Comparison of Machine Learning Algorithms for Medical Image Classification"
        },
        {
            "quote": "Comparison of Performance of Dynamic Web Frameworks"
        },
        {
            "quote": "Comparison of Spambot Detection Techniques on Twitter"
        },
        {
            "quote": "Compiler Design for a Custom FPGA Platform"
        },
        {
            "quote": "Compiler Optimization for Embedded Systems"
        },
        {
            "quote": "Compiler Optimizations for Cloud Computing Environments"
        },
        {
            "quote": "Compiler Verification Techniques"
        },
        {
            "quote": "Compiler/Interpreter System for Embedded Systems"
        },
        {
            "quote": "Component-Based Engineering of Business Process Solutions"
        },
        {
            "quote": "Component-Based Software Engineering"
        },
        {
            "quote": "Component-Based Software for Medical Image Processing"
        },
        {
            "quote": "Component-Based Software for Medical Image Processing: An Industry Perspective"
        },
        {
            "quote": "Component-Based Software for Medical Imaging"
        },
        {
            "quote": "Component-Based Software for Medical Imaging: A Case Study"
        },
        {
            "quote": "Component-Based Software for Medical Imaging: An Overview"
        },
        {
            "quote": "Computer Aided Design of a Smart Grid System"
        },
        {
            "quote": "Computer Based Information System for Automation of College Administrative Work"
        },
        {
            "quote": "Computer Based Information System for Computer Hardware"
        },
        {
            "quote": "Computer Based Information System for Office Automation"
        },
        {
            "quote": "Computer Based Information System for Student Information Management"
        },
        {
            "quote": "Computer Based Information System for Student Record Management"
        },
        {
            "quote": "Computer Based Management Information System for College"
        },
        {
            "quote": "Computer Based Management Information System for College: A Case Study"
        },
        {
            "quote": "Computer Based Management Information System for University"
        },
        {
            "quote": "Computer Based Management Information System for University: A Case Study"
        },
        {
            "quote": "Computer Based Test System"
        },
        {
            "quote": "Computer Based Timetable Management System"
        },
        {
            "quote": "Computer System for Rehabilitative Training"
        },
        {
            "quote": "Conception and Implementation of a Training Device for Endovascular Interventions"
        },
        {
            "quote": "Concurrency Control in Database Management Systems"
        },
        {
            "quote": "Concurrency Control in Distributed Systems"
        },
        {
            "quote": "Concurrency in Programming Languages"
        },
        {
            "quote": "Concurrent Data Structures for Cloud Computing"
        },
        {
            "quote": "Concurrent Programming for Multicore Processors"
        },
        {
            "quote": "Conditional Random Fields for Information Extraction"
        },
        {
            "quote": "Configuration and Management of a Data Center"
        },
        {
            "quote": "Configuration and Management of Virtual Machines"
        },
        {
            "quote": "Configuring VLAN in Cisco Packet Tracer"
        },
        {
            "quote": "Connecting an Arduino Board to a Computer"
        },
        {
            "quote": "Connectivity-Based Design in WSN for Smart Environments"
        },
        {
            "quote": "Construction of Distributed Database System"
        },
        {
            "quote": "Construction of Expert System for Solar Energy Design"
        },
        {
            "quote": "Content Based Image Retrieval Using Feature Extraction"
        },
        {
            "quote": "Content Management System"
        },
        {
            "quote": "Content-Based Image Retrieval Using Color and Texture"
        },
        {
            "quote": "Content-Based Image Retrieval Using Color Histograms"
        },
        {
            "quote": "Content-Based Image Retrieval Using Wavelets"
        },
        {
            "quote": "Content-Based Recommendation System"
        },
        {
            "quote": "Context-Aware Mobile Computing for Android"
        },
        {
            "quote": "Context-Aware Mobile Computing for iOS"
        },
        {
            "quote": "Context-Aware Mobile Computing Using Android Platform"
        },
        {
            "quote": "Context-Aware Mobile Computing Using iOS Platform"
        },
        {
            "quote": "Control and Optimization of Electrical Grid Systems"
        },
        {
            "quote": "Control System for Remote Operation of Unmanned Vehicles"
        },
        {
            "quote": "Control Theory in Robotics"
        },
        {
            "quote": "Controller Design for Automatic Operation of Mobile Robots"
        },
        {
            "quote": "Controller Design for Robotic Manipulators"
        },
        {
            "quote": "Controller Design for Solar Energy Systems"
        },
        {
            "quote": "Controller Design for Unmanned Aerial Vehicles"
        },
        {
            "quote": "Controller Design for Unmanned Ground Vehicles"
        },
        {
            "quote": "Controller Design for Unmanned Underwater Vehicles"
        },
        {
            "quote": "Controller Design for Unmanned Vehicles"
        },
        {
            "quote": "Controlling the Production Process Using PLC"
        },
        {
            "quote": "Controlling the Production Process Using SCADA"
        },
        {
            "quote": "Controlling the Production Process Using Supervisory Control and Data Acquisition"
        },
        {
            "quote": "Controlling Unmanned Vehicles Using AI Techniques"
        },
        {
            "quote": "Converged Networking in a University Campus"
        },
        {
            "quote": "Converged Networking in Campus Environment"
        },
        {
            "quote": "Converged Networking in University Campus"
        },
        {
            "quote": "Conversion of a Web Application to a Mobile Application"
        },
        {
            "quote": "Conversion of Network Traffic into Speech"
        },
        {
            "quote": "Conversion of Speech into Network Traffic"
        },
        {
            "quote": "Convert Student Database Management System to Online System"
        },
        {
            "quote": "Coordination of Distributed Systems"
        },
        {
            "quote": "Coordination of Robots in a Swarm"
        },
        {
            "quote": "Coordination of Robots in a Swarm Using Wireless Networks"
        },
        {
            "quote": "Coordination of Swarm Robots"
        },
        {
            "quote": "Coordination of Swarm Robots Using Wireless Networks"
        },
        {
            "quote": "Coordinating Energy Efficiency in Smart Grid Systems"
        },
        {
            "quote": "Coordinating Multiple Robots in a Factory"
        },
        {
            "quote": "Coordinating Multiple Robots in a Factory Using Wireless Networks"
        },
        {
            "quote": "Coordinating Swarm Robots"
        },
        {
            "quote": "Coordinating Swarm Robots Using Wireless Networks"
        },
        {
            "quote": "Cost-Effective Cloud Computing Solution"
        },
        {
            "quote": "Cost-Effective Web Hosting Solutions"
        },
        {
            "quote": "Coverage Optimization in Wireless Sensor Networks"
        },
        {
            "quote": "Coverage Planning for Mobile Network Systems"
        },
        {
            "quote": "Coverage Planning for Wireless Networks"
        },
        {
            "quote": "Coverage Planning for Wireless Sensor Networks"
        },
        {
            "quote": "Covering Multiple Regions Using Swarm Robots"
        },
        {
            "quote": "Medical Records Management System for Improved Patient Care"
        },
        {
            "quote": "Medicine Inventory and Patient Information Management System for Enhanced Healthcare Delivery"
        },
        {
            "quote": "Comparative Analysis of Message-Passing and Migrating Threads in Parallel Computing"
        },
        {
            "quote": "Business Card Capture Mobile Application for Efficient Contact Management"
        },
        {
            "quote": "Remote Desktop Access via Mobile Devices for Enhanced Productivity"
        },
        {
            "quote": "Mobile Educational Application for Elementary Students Using Android for Interactive Learning"
        },
        {
            "quote": "Developing a Mobile-Friendly Web App for the Computer Science Department"
        },
        {
            "quote": "Mobile Health Tips Application Using Android for Promoting Well-being"
        },
        {
            "quote": "Mobile Inventory Management System for Efficient Stock Control"
        },
        {
            "quote": "Mobile PDF Conversion Application for the Android Platform"
        },
        {
            "quote": "Pharmacy Management Through a Mobile Application in Android"
        },
        {
            "quote": "Mobile Point-Of-Sale Application with SMS Notification for Streamlined Transactions"
        },
        {
            "quote": "Real Estate Agent Mobile Application for Android"
        },
        {
            "quote": "Real Estate Agent Mobile Application for iPhone"
        },
        {
            "quote": "Mobile-Based Attendance Monitoring System Using QR Code for Efficient Tracking"
        },
        {
            "quote": "Mobile-Based Class Record Management System for Efficient Data Organization"
        },
        {
            "quote": "Mobile-Based Crime Reporting App for Enhanced Public Safety"
        },
        {
            "quote": "Mobile-Based Event Management System for Efficient Planning and Coordination"
        },
        {
            "quote": "Mobile-Based Faculty Evaluation System for Streamlined Feedback Collection"
        },
        {
            "quote": "Mobile-Based Food Ordering System for Efficient Restaurant Transactions"
        },
        {
            "quote": "Mobile-Based Grade Inquiry System for Efficient Academic Monitoring"
        },
        {
            "quote": "Mobile-Based Inventory Management System for Efficient Stock Control"
        },
        {
            "quote": "Mobile-Based Library Management System for Efficient Book Tracking"
        },
        {
            "quote": "Mobile-Based Medical Records Management System for Enhanced Patient Care"
        },
        {
            "quote": "Mobile-Based Point-Of-Sale System for Efficient Transactions"
        },
        {
            "quote": "Mobile-Based Sales and Inventory Management System for Efficient Business Operations"
        },
];