---
layout: page
title: Education
subtitle: What all have I done so far?
---
  <style>
    /* Basic timeline styles */
/* Timeline container */
.timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  padding-left: 30px; /* Space for the line */
  font-family: Arial, sans-serif;
}


/* Timeline item structure */
.timeline-item {
  display: flex;
  align-items: center;
  margin: 20px 0;
  position: relative;
}

/* Default Circle Styling - Hollow */
.timeline-item .circle {
  width: 20px;
  height: 20px;
  border: 2px solid #3498db; /* Border for hollow circles */
  background-color: transparent; /* Transparent background for hollow circles */
  border-radius: 50%;
  position: absolute;
  left: 20px; /* Position circle to the left */
  z-index: 2;
}

/* Filled Circle Styling for IIT Kanpur */
.timeline-item:first-child .circle {
  background-color: #3498db; /* Filled circle for the first item */
  border: none; /* Remove border for filled circle */
}

/* Content block styling for all boxes */
.timeline-item .content {
  margin-left: 60px; /* Offset content to the right */
  padding: 20px;
  background-color: rgba(245, 245, 245, 0.1); /* Light grey for light themes */
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 1000px; /* Fixed width for the content box */
  transition: background-color 0.3s, box-shadow 0.3s;
}

/* Adaptive background for dark themes */
@media (prefers-color-scheme: dark) {
  .timeline-item .content {
    background-color: rgba(90, 90, 90, 0.3); /* Soft grey for dark themes */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  }
}


/* Special styling for the current IIT Kanpur box */
.timeline-item.current .content {
  background-color: #ffffff; /* White background */
  border: 2px solid #3498db; /* Optional: Add a subtle border for emphasis */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Stronger shadow for prominence */
}

/* Date styling */
.timeline-item .date {
  font-weight: bold;
  font-size: 1.0em;
  color: #555;
}

/* School name styling */
.timeline-item .school-name {
  font-size: 1.3em;
  color: #777;
  margin-top: 10px;
}

/* Description styling */
.timeline-item .description {
  font-size: 0.9em;
  color: #999;
  margin-top: 5px;
}

/* Hover effect for content */
.timeline-item:hover .content {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  background-color: #f7f7f7;
  transition: background-color 0.3s, box-shadow 0.3s;
}



  </style>
<body> 

   <div class="timeline">
  <div class="timeline-item current"> <!-- Add the "current" class here -->
    <div class="circle"></div>
    <div class="line"></div>
    <div class="content">
      <div class="date">2022 - Present</div>
      <div class="school-name">IIT Kanpur</div>
      <div class="description">Pursuing undergraduate studies in Computer Science Engineering at IIT Kanpur.</div>
      <div class="description"> Current Grade: 9.7 </div>
    </div>
  </div>

  <div class="timeline-item">
    <div class="circle"></div>
    <div class="line"></div>
    <div class="content">
      <div class="date">2018 - 2022</div>
      <div class="school-name">Academic Global School (CBSE Board)</div>
      <div class="description">Completed secondary and senior secondary education with a focus on science subjects.</div>
      <div class="description"> Grade: 99.4% (XII)</div>
    </div>
  </div>

  <div class="timeline-item">
    <div class="circle"></div>
    <div class="line"></div>
    <div class="content">
      <div class="date">2006 - 2018</div>
      <div class="school-name">The Pillars Public School (CBSE board)</div>
      <div class="description">Attended elementary and middle school education.</div>
    </div>
  </div>
</div>
<p>For resources related to IITK academia, please refer to my GitHub repos. I have created repositories for all of my course assignments and projects, and have also included notes for some of the courses.</p>

</body>

