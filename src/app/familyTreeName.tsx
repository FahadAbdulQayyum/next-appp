// app/familyTree.ts
export interface FamilyMember {
    name: string;
    children?: FamilyMember[];
}

export const familyTreeName: FamilyMember = {
    name: 'طاہر',
    children: [{
        name: 'ڈگار',
        children: [{
            name: 'ولی',
            children: [{
                name: 'دل مراد',
                children: [{
                    name: 'شیران',
                    children: [{
                        name: 'شاہ دوست',
                        children: [
                            {
                                name: 'درہ',
                                children: [
                                    {
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
                                                    { name: 'بابلَ کی بہن' },
                                                ],
                                            },
                                            {
                                                name: 'شاہ میر',
                                                children: [
                                                    { name: ' حیدر' },
                                                    { name: 'مسز ابراہیم' },
                                                    { name: 'مسز دوستین' },
                                                    { name: 'شعیب' },
                                                ],
                                            },
                                            {
                                                name: 'مولداد',
                                                children: [
                                                    { name: 'نصیر' },
                                                    { name: 'منصور' },
                                                    { name: 'مسز غنی' },
                                                    { name: 'مسز عثمان' },
                                                    { name: 'مسز فضل' },
                                                    { name: 'ناصر بہن' },
                                                    { name: 'منصور بہن' },
                                                ],
                                            },
                                            {
                                                name: 'ایوب',
                                                children: [
                                                    { name: 'فضل بہن' },
                                                    { name: 'فضل' },
                                                    {
                                                        name: 'ام فہد',
                                                        children: [
                                                            { name: 'فہد' },
                                                            { name: 'فہد کی بہن' },
                                                            { name: 'احمد' },
                                                            { name: 'اسد' },
                                                            { name: 'اسد کی بہن' },
                                                            { name: 'احمد کی بہن' },
                                                        ],
                                                    },
                                                    { name: 'حنیف' },
                                                    { name: 'مسعود' },
                                                    { name: 'مسعود بہن' },
                                                    { name: 'یحییٰ' },
                                                ],
                                            },
                                            {
                                                name: 'مسز عبداللہ',
                                                children: [
                                                    { name: 'رزاق بہن 1' },
                                                    { name: 'رزاق بہن 2' },
                                                    { name: 'رزاق بہن 3' },
                                                    { name: 'رزاق' },
                                                ],
                                            },
                                            {
                                                name: 'مسز کریم',
                                                children: [
                                                    { name: 'ام لقمان' },
                                                    { name: 'سلام' },
                                                    { name: 'طارق' },
                                                    { name: 'عارف' },
                                                    { name: 'عزیز' },
                                                    { name: 'مسعود بہن' },
                                                    { name: 'عارف بہن' },
                                                    { name: 'عزیز بہن' },
                                                    { name: 'خلیل بہن 1' },
                                                    { name: 'خلیل بہن 2' },
                                                    { name: 'خلیل' },
                                                ],
                                            },
                                            {
                                                name: 'مسز اسماعیل',
                                                // name: 'حاجی اسماعیل',
                                                children: [
                                                    {
                                                        name: 'عبدالقیوم',
                                                        children: [
                                                            { name: 'فہد' },
                                                            { name: 'فہد کی بہن' },
                                                            { name: 'احمد' },
                                                            { name: 'اسد' },
                                                            { name: 'اسد کی بہن' },
                                                            { name: 'احمد کی بہن' },
                                                        ],
                                                    },
                                                    { name: 'عبدالرؤف' },
                                                    { name: 'عبدالنعیم' },
                                                    { name: 'مسز طارق' },
                                                    { name: 'ابراہیم' },
                                                    { name: 'ندیم' },
                                                    { name: 'سلمان' },
                                                    { name: 'سہیل' },
                                                    { name: 'سعود' },
                                                ],

                                            },
                                            { name: 'انوار' },
                                        ]
                                    },
                                ],
                            }],
                    }]
                }],
            }],
        }],
    }],
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
