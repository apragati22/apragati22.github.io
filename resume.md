---
layout: page
title: Resume
---

<!-- https://drive.google.com/file/d/1M2wFoXgK_QE589Mh77EjwG-BxGL7YUyG/view?usp=sharing -->

<div class="cv-container">
    <div class="iframe-wrapper">
        <iframe src="https://drive.google.com/file/d/1M2wFoXgK_QE589Mh77EjwG-BxGL7YUyG/preview" width="100%" height="600px">
            This browser does not support PDFs. Please download the resume to view it: 
            <a href="https://drive.google.com/file/d/1M2wFoXgK_QE589Mh77EjwG-BxGL7YUyG/view?usp=sharing">Download Resume</a>
        </iframe>
    </div>
</div>

<!-- CSS for iframe wrapper and custom scrollbar -->
<style>
    .cv-container {
        text-align: center;
        margin: 20px; /* Adds margin to the entire container */
    }

    .iframe-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 600px; /* Adjust the height as needed */
        margin: 20px auto; /* Adds margin around the iframe */
        padding: 10px; /* Adds padding inside the wrapper */
        border: 2px solid #ccc; /* Thin border around the iframe */
        border-radius: 8px; /* Optional: Adds rounded corners to the border */
        overflow: hidden; /* Prevents unwanted overflow */
        overflow-y: scroll; /* Enables vertical scrolling */
    }

    iframe {
        border: none; /* Removes default iframe border */
        width: 150%; /* Ensure it fills the iframe wrapper */
        height: 100%; /* Ensure it fills the iframe wrapper */
    }

    /* Custom scrollbar for iframe container */
    .iframe-wrapper::-webkit-scrollbar {
        width: 8px; /* Width of the scrollbar */
    }

    .iframe-wrapper::-webkit-scrollbar-thumb {
        background-color: #fff; /* White color for the scrollbar thumb */
        border-radius: 10px; /* Optional: Rounds the corners of the scrollbar */
    }

    .iframe-wrapper::-webkit-scrollbar-track {
        background: transparent; /* Makes the scrollbar track transparent */
    }
</style>
