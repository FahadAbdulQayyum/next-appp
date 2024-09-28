// export interface FamilyMember {
//     name: string;
//     children?: FamilyMember[];
// }

// export const familyData: FamilyMember = {
//     name: 'Haji Ismael',
//     children: [
//         {
//             name: 'Abdul Qayyum',
//             children: [
//                 { name: 'Fahad' },
//                 { name: 'Fahad\'s sister' },
//                 { name: 'Ahmed' },
//                 { name: 'Asad' },
//                 { name: 'Asad\'s sister' },
//                 { name: 'Ahmed\'s sister' },
//             ],
//         },
//         { name: 'Abdul Rauf' },
//         { name: 'Abdul Naeem' },
//         { name: 'Mrs. Tariq' },
//         { name: 'Ibrahim' },
//         { name: 'Nadeem' },
//         { name: 'Salman' },
//         { name: 'Sohail' },
//         { name: 'Saud' },
//     ],
// };




// app/familyTree.ts
export interface FamilyMember {
    name: string;
    children?: FamilyMember[];
}

export const familyTree: FamilyMember = {
    name: 'Haji Ismael',
    children: [
        {
            name: 'Abdul Qayyum',
            children: [
                {
                    name: 'Fahad',
                    children: [
                        { name: 'Fahad' },
                        { name: 'Fahad’s sister' },
                        { name: 'Ahmed' },
                        { name: 'Asad' },
                        { name: 'Asad’s sister' },
                        { name: 'Ahmed’s sister' },
                    ],
                },
                { name: 'Fahad’s sister' },
                { name: 'Ahmed' },
                { name: 'Asad' },
                { name: 'Asad’s sister' },
                { name: 'Ahmed’s sister' },
            ],
        },
        { name: 'Abdul Rauf' },
        { name: 'Abdul Naeem' },
        { name: 'Mrs. Tariq' },
        { name: 'Ibrahim' },
        { name: 'Nadeem' },
        { name: 'Salman' },
        { name: 'Sohail' },
        { name: 'Saud' },
    ],
};
