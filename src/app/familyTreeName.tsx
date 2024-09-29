// app/familyTree.ts
export interface FamilyMember {
    name: string;
    children?: FamilyMember[];
}

export const familyTreeName: FamilyMember = {
    name: 'جان محمد',
    children: [
        {
            name: 'ملا مراد کی بہن',
            children: [
                {
                    name: 'عصمت',
                    children: [
                        {
                            name: 'عامر',
                            children: [
                                { name: 'عمر' },
                                { name: 'عمر کی بہن' },
                                { name: 'عمیر' },
                            ],
                        },
                        { name: 'طاہر' },
                        { name: 'علی' },
                        { name: 'علی کی بہن' },
                        { name: 'بلال' },
                    ],
                },
                { name: 'مسز ناصر' },
                { name: 'غلام' },
                { name: 'عثمان' },
                { name: 'مسز نصیر' },
                { name: 'جمیل' },
            ],
        },
        {
            name: 'ملا مراد',
            children: [
                { name: 'مسز حیدر' },
                { name: 'مسز بخشیش' },
                { name: 'مسز حنیف' },
                { name: 'مسز خالد' },
                { name: 'مسز نعیم' },
                { name: 'بابو' },
                { name: 'مسز سہیل' },
                { name: 'بابو کی بہن' },
            ],
        },
        { name: 'شاہ میر' },
        { name: 'مولداد' },
        { name: 'ایوب' },
        { name: 'مسز عبداللہ' },
        { name: 'مسز کریم' },
        { name: 'مسز اسماعیل' },
        { name: 'انوار' },
    ],
};






// // app/familyTree.ts
// export interface FamilyMember {
//     name: string;
//     children?: FamilyMember[];
// }

// export const familyTree: FamilyMember = {
//     name: 'Jan Muhammad',
//     children: [
//         {
//             name: 'Mullah Murad Sister',
//             children: [
//                 {
//                     name: 'Asmat',
//                     children: [
//                         {
//                             name: 'Amir',
//                             children: [
//                                 { name: 'Umar' },
//                                 { name: 'Umar sister' },
//                                 { name: 'Umair' },
//                             ],
//                         },
//                         { name: 'Tahir' },
//                         { name: 'Ali' },
//                         { name: 'Ali sister' },
//                         { name: 'Bilal' },
//                     ],
//                 },
//                 { name: 'Mrs Nasir' },
//                 { name: 'Ghulam' },
//                 { name: 'Usman' },
//                 { name: 'Mrs Naseer' },
//                 { name: 'Jamil' },
//             ],
//         },
//         {
//             name: 'Mullah Murad',
//             children: [
//                 { name: 'Mrs. Haider' },
//                 { name: 'Mrs. Bakhshi' },
//                 { name: 'Mrs. Hanif' },
//                 { name: 'Mrs. Khalid' },
//                 { name: 'Mrs. Naeem' },
//                 { name: 'Babul' },
//                 { name: 'Mrs. Suhail' },
//                 { name: 'Babul\'s sister' },
//             ],
//         },
//         { name: 'Shahmeer' },
//         { name: 'Mauldad' },
//         { name: 'Ayoub' },
//         { name: 'Mrs. Abdullah' },
//         { name: 'Mrs. Karim' },
//         { name: 'Mrs. Ismail' },
//         { name: 'Anwar' },
//     ],
// };













// // // export interface FamilyMember {
// // //     name: string;
// // //     children?: FamilyMember[];
// // // }

// // // export const familyData: FamilyMember = {
// // //     name: 'Haji Ismael',
// // //     children: [
// // //         {
// // //             name: 'Abdul Qayyum',
// // //             children: [
// // //                 { name: 'Fahad' },
// // //                 { name: 'Fahad\'s sister' },
// // //                 { name: 'Ahmed' },
// // //                 { name: 'Asad' },
// // //                 { name: 'Asad\'s sister' },
// // //                 { name: 'Ahmed\'s sister' },
// // //             ],
// // //         },
// // //         { name: 'Abdul Rauf' },
// // //         { name: 'Abdul Naeem' },
// // //         { name: 'Mrs. Tariq' },
// // //         { name: 'Ibrahim' },
// // //         { name: 'Nadeem' },
// // //         { name: 'Salman' },
// // //         { name: 'Sohail' },
// // //         { name: 'Saud' },
// // //     ],
// // // };




// // // app/familyTree.ts
// // export interface FamilyMember {
// //     name: string;
// //     children?: FamilyMember[];
// // }

// // export const familyTree: FamilyMember = {
// //     name: 'Haji Ismael',
// //     children: [
// //         {
// //             name: 'Abdul Qayyum',
// //             children: [
// //                 {
// //                     name: 'Fahad',
// //                     children: [
// //                         { name: 'Fahad' },
// //                         { name: 'Fahad’s sister' },
// //                         { name: 'Ahmed' },
// //                         { name: 'Asad' },
// //                         { name: 'Asad’s sister' },
// //                         { name: 'Ahmed’s sister' },
// //                     ],
// //                 },
// //                 { name: 'Fahad’s sister' },
// //                 { name: 'Ahmed' },
// //                 { name: 'Asad' },
// //                 { name: 'Asad’s sister' },
// //                 { name: 'Ahmed’s sister' },
// //             ],
// //         },
// //         { name: 'Abdul Rauf' },
// //         { name: 'Abdul Naeem' },
// //         { name: 'Mrs. Tariq' },
// //         { name: 'Ibrahim' },
// //         { name: 'Nadeem' },
// //         { name: 'Salman' },
// //         { name: 'Sohail' },
// //         { name: 'Saud' },
// //     ],
// // };
