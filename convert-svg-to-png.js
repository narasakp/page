const fs = require('fs');
const { createCanvas } = require('canvas');

// Create canvas with exact dimensions for social media
const canvas = createCanvas(1200, 630);
const ctx = canvas.getContext('2d');

// Background gradient
const bgGradient = ctx.createLinearGradient(0, 0, 1200, 630);
bgGradient.addColorStop(0, '#ffffff');
bgGradient.addColorStop(0.5, '#f8fafc');
bgGradient.addColorStop(1, '#f1f5f9');
ctx.fillStyle = bgGradient;
ctx.fillRect(0, 0, 1200, 630);

// Floating shapes
ctx.fillStyle = 'rgba(14, 165, 233, 0.05)';
ctx.beginPath();
ctx.arc(120, 120, 45, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = 'rgba(16, 185, 129, 0.04)';
ctx.beginPath();
ctx.arc(1080, 180, 35, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(180, 480, 30, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(1000, 450, 25, 0, 2 * Math.PI);
ctx.fill();

// Main card
ctx.fillStyle = 'rgba(255, 255, 255, 0.98)';
ctx.roundRect(80, 80, 1040, 470, 25);
ctx.fill();

// Robot head
const robotGradient = ctx.createLinearGradient(120, 140, 210, 230);
robotGradient.addColorStop(0, '#0ea5e9');
robotGradient.addColorStop(1, '#10b981');
ctx.fillStyle = robotGradient;
ctx.roundRect(120, 140, 90, 90, 15);
ctx.fill();

// Robot eyes
ctx.fillStyle = '#ffffff';
ctx.beginPath();
ctx.arc(145, 170, 10, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(185, 170, 10, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = '#0ea5e9';
ctx.beginPath();
ctx.arc(145, 170, 6, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = '#10b981';
ctx.beginPath();
ctx.arc(185, 170, 6, 0, 2 * Math.PI);
ctx.fill();

// Robot smile
ctx.strokeStyle = '#ffffff';
ctx.lineWidth = 4;
ctx.lineCap = 'round';
ctx.beginPath();
ctx.quadraticCurveTo(165, 215, 180, 200);
ctx.stroke();

// Robot body
ctx.fillStyle = 'rgba(14, 165, 233, 0.6)';
ctx.roundRect(130, 240, 70, 50, 8);
ctx.fill();

// Robot arms
ctx.fillStyle = 'rgba(16, 185, 129, 0.6)';
ctx.roundRect(115, 260, 25, 35, 5);
ctx.fill();
ctx.roundRect(190, 260, 25, 35, 5);
ctx.fill();

// Code brackets
ctx.fillStyle = 'rgba(14, 165, 233, 0.25)';
ctx.font = '300 140px monospace';
ctx.fillText('</>', 880, 300);

// Title
ctx.fillStyle = '#0ea5e9';
ctx.font = 'bold 52px Arial, sans-serif';
ctx.fillText('การสอนเขียนโค้ดในยุค AI', 280, 200);

// Subtitle
ctx.fillStyle = '#374151';
ctx.font = '500 36px Arial, sans-serif';
ctx.fillText('คู่มือสำหรับอาจารย์', 280, 250);

// Key points
ctx.font = '26px Arial, sans-serif';

// Point 1
ctx.fillStyle = 'rgba(14, 165, 233, 0.2)';
ctx.beginPath();
ctx.arc(295, 292, 12, 0, 2 * Math.PI);
ctx.fill();
ctx.fillStyle = '#374151';
ctx.fillText('เปลี่ยนจาก "เขียนโค้ด" สู่ "แก้ปัญหาด้วยเทคโนโลยี"', 320, 300);

// Point 2
ctx.fillStyle = 'rgba(16, 185, 129, 0.2)';
ctx.beginPath();
ctx.arc(295, 337, 12, 0, 2 * Math.PI);
ctx.fill();
ctx.fillStyle = '#374151';
ctx.fillText('ใช้ AI เป็นเครื่องมือช่วยสอน', 320, 345);

// Point 3
ctx.fillStyle = 'rgba(14, 165, 233, 0.15)';
ctx.beginPath();
ctx.arc(295, 382, 12, 0, 2 * Math.PI);
ctx.fill();
ctx.fillStyle = '#374151';
ctx.fillText('หลักสูตร 4 ปี พร้อมเครื่องมือและวิธีการ', 320, 390);

// Bottom accent
const bottomGradient = ctx.createLinearGradient(0, 570, 1200, 630);
bottomGradient.addColorStop(0, 'rgba(14, 165, 233, 0.1)');
bottomGradient.addColorStop(1, 'rgba(16, 185, 129, 0.1)');
ctx.fillStyle = bottomGradient;
ctx.fillRect(0, 570, 1200, 60);

// Author
ctx.font = '500 20px Arial, sans-serif';
ctx.textAlign = 'center';
ctx.fillStyle = '#374151';
ctx.fillText('จัดทำโดย: อาจารย์ผู้สอนคอมพิวเตอร์ | สิงหาคม 2568', 600, 605);

// Decorative elements
ctx.fillStyle = 'rgba(14, 165, 233, 0.15)';
ctx.beginPath();
ctx.arc(50, 50, 3, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = 'rgba(16, 185, 129, 0.15)';
ctx.beginPath();
ctx.arc(1150, 580, 4, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = 'rgba(14, 165, 233, 0.1)';
ctx.beginPath();
ctx.arc(70, 580, 2, 0, 2 * Math.PI);
ctx.fill();

// Save PNG
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('./images/ai-coding-guide-featured.png', buffer);
console.log('PNG created successfully!');
