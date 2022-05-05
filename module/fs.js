// console.log(fs);
// Papka yaratish
// fs.mkdir(path.join(__dirname, '..', 'test', '..', 'another'),
//     (err) => {
//         if (err) {
//             console.log(err);
//         }
//     })

// file yaratish
// fs.writeFile(path.join(__dirname, '..', 'test', 'text.txt'),
//     'Second hello',
//     (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('File created');
//         }
//     })
// test // Jasd/ Hello
// 
const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'Papka'), (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Papka yaratildi');

//         fs.writeFile(path.join(__dirname, 'Papka', 'sinov.txt'), 'Hello sinov', (err) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log('File yaratildi');
//             }
//         })
//     }
// })

// Papka o'chirish // papka bo'sh bo'lishi kerak
// fs.rmdir(path.join(__dirname, 'Papka'), (err) => {
//     if (err) {
//         console.log(err);
//     }
// })

// // File o'chirish
// fs.unlink(path.join(__dirname, 'Papka', 'sinov.txt'), (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('File o`chirildi');
//     }
// })

// Rename
// fs.rename(path.join(__dirname, 'newTest'), path.join(__dirname, '..', 'yangiNom'), (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Nomi o`zgardi');
//     }
// })

// fs.rename(path.join(__dirname, '..', 'yangiNom', 'text.txt'), path.join(__dirname, '..', 'yangiNom', 'index.html'), (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Nomi o`zgardi');
//     }
// })

