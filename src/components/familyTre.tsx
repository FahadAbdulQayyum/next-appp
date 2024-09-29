'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FamilyMember } from '../app/familyTreeName';

import '../app/globals.css';

interface FamilyMemberProps {
    member: FamilyMember;
    index?: number;
    siblingsCount?: number;
}

const FamilyMemberComponent: React.FC<FamilyMemberProps> = ({ member, index = 0, siblingsCount = 1 }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Define line colors for children based on index
    const lineColors = ['red', 'blue', 'green', 'orange', 'purple'];
    const lineColor = lineColors[index % lineColors.length];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            {/* Parent node with click */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    color: isOpen ? 'blue' : 'black',
                    marginBottom: '10px',
                }}
            >
                {member && member.name}
            </div>

            {/* Vertical line from the parent */}
            {member && member.children && (
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: isOpen ? '40px' : '0' }}
                    transition={{ duration: 0.5 }}
                    style={{
                        width: '2px',
                        backgroundColor: 'black',
                        position: 'absolute',
                        top: '100%', // Position below the parent node
                        left: '50%', // Center the line
                        transform: 'translateX(-50%)',
                    }}
                />
            )}

            {/* Horizontal line connecting all siblings */}
            {siblingsCount > 1 && (
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: isOpen ? '100%' : '0' }}
                    transition={{ duration: 0.5 }}
                    style={{
                        height: '2px',
                        backgroundColor: 'black',
                        position: 'relative',
                        top: '20px', // To position it slightly below the parent node
                        left: '0', // Start from the first sibling
                    }}
                />
            )}

            {/* Horizontal line to connect to children */}
            {member && member.children && (
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: isOpen ? `${member.children.length * 100}px` : '0' }}
                    transition={{ duration: 0.5 }}
                    style={{
                        height: '2px',
                        backgroundColor: lineColor,
                        marginBottom: '10px',
                        position: 'relative',
                        top: '40px',
                    }}
                />
            )}

            {/* Children rendered horizontally with animation */}
            <AnimatePresence>
                {isOpen && member.children && (
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        style={{
                            display: 'flex', // Children laid out horizontally
                            flexDirection: 'row', // Horizontal alignment
                            gap: '20px', // Space between children
                            marginTop: '10px',
                            alignItems: 'center',
                        }}
                    >
                        {member.children.map((child, childIndex) => (
                            <FamilyMemberComponent key={childIndex} member={child} index={childIndex} siblingsCount={member.children?.length || 1} />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

interface FamilyTreeProps {
    data: FamilyMember;
}

const FamilyTre: React.FC<FamilyTreeProps> = ({ data }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <FamilyMemberComponent member={data} siblingsCount={data.children?.length || 1} />
        </div>
    );
};

export default FamilyTre;










// 'use client';

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FamilyMember } from '../app/familyTreeName';

// import '../app/globals.css';

// interface FamilyMemberProps {
//     member: FamilyMember;
//     index?: number; // Index for child differentiation
// }

// const FamilyMemberComponent: React.FC<FamilyMemberProps> = ({ member, index = 0 }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     // Define line colors for children based on index
//     const lineColors = ['red', 'blue', 'green', 'orange', 'purple'];
//     const lineColor = lineColors[index % lineColors.length];

//     return (
//         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
//             {/* Parent node with click */}
//             <div
//                 onClick={() => setIsOpen(!isOpen)}
//                 style={{
//                     cursor: 'pointer',
//                     fontWeight: 'bold',
//                     color: isOpen ? 'blue' : 'black',
//                     marginBottom: '10px',
//                 }}
//             >
//                 {member && member.name}
//             </div>

//             {/* Vertical line from the parent */}
//             {member && member.children && (
//                 <motion.div
//                     initial={{ height: 0 }}
//                     animate={{ height: isOpen ? '40px' : '0' }}
//                     transition={{ duration: 0.5 }}
//                     style={{
//                         width: '2px',
//                         backgroundColor: 'black',
//                         position: 'absolute',
//                         top: '100%', // Position below the parent node
//                         left: '50%', // Center the line
//                         transform: 'translateX(-50%)',
//                     }}
//                 />
//             )}

//             {/* Horizontal line to connect to children */}
//             {member && member.children && (
//                 <motion.div
//                     initial={{ width: 0 }}
//                     animate={{ width: isOpen ? `${member.children.length * 100}px` : '0' }}
//                     transition={{ duration: 0.5 }}
//                     style={{
//                         height: '2px',
//                         backgroundColor: lineColor,
//                         marginBottom: '10px',
//                         position: 'relative',
//                         top: '40px',
//                     }}
//                 />
//             )}

//             {/* Children rendered horizontally with animation */}
//             <AnimatePresence>
//                 {isOpen && member.children && (
//                     <motion.div
//                         initial={{ opacity: 0, x: -50 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         exit={{ opacity: 0, x: -50 }}
//                         transition={{ duration: 0.5 }}
//                         style={{
//                             display: 'flex', // Children laid out horizontally
//                             flexDirection: 'row', // Horizontal alignment
//                             gap: '20px', // Space between children
//                             marginTop: '10px',
//                             alignItems: 'center',
//                         }}
//                     >
//                         {member.children.map((child, childIndex) => (
//                             <FamilyMemberComponent key={childIndex} member={child} index={childIndex} />
//                         ))}
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </div>
//     );
// };

// interface FamilyTreeProps {
//     data: FamilyMember;
// }

// const FamilyTre: React.FC<FamilyTreeProps> = ({ data }) => {
//     return (
//         <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
//             <FamilyMemberComponent member={data} />
//         </div>
//     );
// };

// export default FamilyTre;







// // 'use client';

// // import { useState } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { FamilyMember } from '../app/familyTreeName';

// // import '../app/globals.css';

// // interface FamilyMemberProps {
// //     member: FamilyMember;
// //     index?: number; // Pass down the index to differentiate lines
// // }

// // const FamilyMemberComponent: React.FC<FamilyMemberProps> = ({ member, index = 0 }) => {
// //     const [isOpen, setIsOpen] = useState(false);

// //     // Define different line colors for children based on the index
// //     const lineColors = ['red', 'blue', 'green', 'orange', 'purple'];
// //     const lineColor = lineColors[index % lineColors.length]; // Cycle through colors

// //     return (
// //         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
// //             {/* Parent node with click */}
// //             <div
// //                 onClick={() => setIsOpen(!isOpen)}
// //                 style={{
// //                     cursor: 'pointer',
// //                     fontWeight: 'bold',
// //                     color: isOpen ? 'blue' : 'black',
// //                     marginBottom: '10px',
// //                 }}
// //             >
// //                 {member && member.name}
// //             </div>

// //             {/* Horizontal line to connect to children */}
// //             {member && member.children && (
// //                 <motion.div
// //                     initial={{ width: 0 }}
// //                     animate={{ width: isOpen ? '100px' : '0' }}
// //                     transition={{ duration: 0.5 }}
// //                     style={{
// //                         height: '2px',
// //                         backgroundColor: lineColor, // Use the color based on index
// //                         marginBottom: '10px',
// //                     }}
// //                 />
// //             )}

// //             {/* Children rendered horizontally with animation */}
// //             <AnimatePresence>
// //                 {isOpen && member.children && (
// //                     <motion.div
// //                         initial={{ opacity: 0, x: -50 }}
// //                         animate={{ opacity: 1, x: 0 }}
// //                         exit={{ opacity: 0, x: -50 }}
// //                         transition={{ duration: 0.5 }}
// //                         style={{
// //                             display: 'flex', // Ensures children are laid out horizontally
// //                             flexDirection: 'row', // Horizontal alignment
// //                             gap: '20px', // Space between children
// //                             marginTop: '10px',
// //                             alignItems: 'center',
// //                         }}
// //                     >
// //                         {member.children.map((child, childIndex) => (
// //                             <FamilyMemberComponent key={childIndex} member={child} index={childIndex} />
// //                         ))}
// //                     </motion.div>
// //                 )}
// //             </AnimatePresence>
// //         </div>
// //     );
// // };

// // interface FamilyTreeProps {
// //     data: FamilyMember;
// // }

// // const FamilyTre: React.FC<FamilyTreeProps> = ({ data }) => {
// //     return (
// //         <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
// //             <FamilyMemberComponent member={data} />
// //         </div>
// //     );
// // };

// // export default FamilyTre;







// // // 'use client';

// // // import { useState } from 'react';
// // // import { motion, AnimatePresence } from 'framer-motion';
// // // import { FamilyMember } from '../app/familyTreeName';

// // // import '../app/globals.css';

// // // interface FamilyMemberProps {
// // //     member: FamilyMember;
// // // }

// // // const FamilyMemberComponent: React.FC<FamilyMemberProps> = ({ member }) => {
// // //     const [isOpen, setIsOpen] = useState(false);

// // //     return (
// // //         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
// // //             {/* Parent node with click */}
// // //             <div
// // //                 onClick={() => setIsOpen(!isOpen)}
// // //                 style={{
// // //                     cursor: 'pointer',
// // //                     fontWeight: 'bold',
// // //                     color: isOpen ? 'blue' : 'black',
// // //                     marginBottom: '10px',
// // //                 }}
// // //             >
// // //                 {member && member.name}
// // //                 {/* {member !== undefined ? member.name : 'sad...'} */}
// // //             </div>

// // //             {/* Horizontal line to connect to children */}
// // //             {/* {member !== undefined && member.children && ( */}
// // //             {member && member.children && (
// // //                 <motion.div
// // //                     initial={{ width: 0 }}
// // //                     animate={{ width: isOpen ? '100px' : '0' }}
// // //                     transition={{ duration: 0.5 }}
// // //                     style={{
// // //                         height: '2px',
// // //                         backgroundColor: 'black',
// // //                         marginBottom: '10px',
// // //                     }}
// // //                 />
// // //             )}

// // //             {/* Children rendered horizontally with animation */}
// // //             <AnimatePresence>
// // //                 {isOpen && member.children && (
// // //                     <motion.div
// // //                         initial={{ opacity: 0, x: -50 }}
// // //                         animate={{ opacity: 1, x: 0 }}
// // //                         exit={{ opacity: 0, x: -50 }}
// // //                         transition={{ duration: 0.5 }}
// // //                         style={{
// // //                             display: 'flex', // Ensures children are laid out horizontally
// // //                             flexDirection: 'row', // Horizontal alignment
// // //                             gap: '20px', // Space between children
// // //                             marginTop: '10px',
// // //                             alignItems: 'center',
// // //                         }}
// // //                     >
// // //                         {member.children.map((child, index) => (
// // //                             <FamilyMemberComponent key={index} member={child} />
// // //                         ))}
// // //                     </motion.div>
// // //                 )}
// // //             </AnimatePresence>
// // //         </div>
// // //     );
// // // };

// // // interface FamilyTreeProps {
// // //     data: FamilyMember;
// // // }

// // // const FamilyTre: React.FC<FamilyTreeProps> = ({ data }) => {
// // //     return (
// // //         <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
// // //             <FamilyMemberComponent member={data} />
// // //         </div>
// // //     );
// // // };

// // // export default FamilyTre;









// // // // 'use client';

// // // // import { useState } from 'react';
// // // // import { motion, AnimatePresence } from 'framer-motion';
// // // // import { FamilyMember } from '../app/familyTree';

// // // // interface FamilyMemberProps {
// // // //     member: FamilyMember;
// // // // }

// // // // const FamilyMemberComponent: React.FC<FamilyMemberProps> = ({ member }) => {
// // // //     const [isOpen, setIsOpen] = useState(false);

// // // //     return (
// // // //         <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
// // // //             {/* Parent node with click */}
// // // //             <div
// // // //                 onClick={() => setIsOpen(!isOpen)}
// // // //                 style={{
// // // //                     cursor: 'pointer',
// // // //                     fontWeight: 'bold',
// // // //                     color: isOpen ? 'blue' : 'black',
// // // //                     marginBottom: '10px',
// // // //                     display: 'flex',
// // // //                     alignItems: 'center',
// // // //                 }}
// // // //             >
// // // //                 {/* Parent's name */}
// // // //                 <span>{member.name}</span>
// // // //             </div>

// // // //             {/* Horizontal line to connect to children */}
// // // //             {member.children && (
// // // //                 <motion.div
// // // //                     initial={{ width: 0 }}
// // // //                     animate={{ width: isOpen ? '100px' : '0' }}
// // // //                     transition={{ duration: 0.5 }}
// // // //                     style={{
// // // //                         height: '2px',
// // // //                         backgroundColor: 'black',
// // // //                         marginBottom: '10px',
// // // //                     }}
// // // //                 />
// // // //             )}

// // // //             {/* Children rendered horizontally with animation */}
// // // //             <AnimatePresence>
// // // //                 {isOpen && member.children && (
// // // //                     <motion.div
// // // //                         initial={{ opacity: 0, x: -50 }}
// // // //                         animate={{ opacity: 1, x: 0 }}
// // // //                         exit={{ opacity: 0, x: -50 }}
// // // //                         style={{
// // // //                             display: 'flex',
// // // //                             gap: '20px',
// // // //                             marginTop: '10px',
// // // //                             alignItems: 'center',
// // // //                         }}
// // // //                     >
// // // //                         {member.children.map((child, index) => (
// // // //                             <FamilyMemberComponent key={index} member={child} />
// // // //                         ))}
// // // //                     </motion.div>
// // // //                 )}
// // // //             </AnimatePresence>
// // // //         </div>
// // // //     );
// // // // };

// // // // interface FamilyTreeProps {
// // // //     data: FamilyMember;
// // // // }

// // // // const FamilyTree: React.FC<FamilyTreeProps> = ({ data }) => {
// // // //     return (
// // // //         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
// // // //             <FamilyMemberComponent member={data} />
// // // //         </div>
// // // //     );
// // // // };

// // // // export default FamilyTree;




// // // // // 'use client';

// // // // // import { useState } from 'react';
// // // // // import { motion, AnimatePresence } from 'framer-motion';
// // // // // import { FamilyMember } from '../app/familyTree';

// // // // // interface FamilyMemberProps {
// // // // //     member: FamilyMember;
// // // // // }

// // // // // const FamilyMemberComponent: React.FC<FamilyMemberProps> = ({ member }) => {
// // // // //     const [isOpen, setIsOpen] = useState(false);

// // // // //     return (
// // // // //         <div style={{ marginLeft: '20px', position: 'relative' }}>
// // // // //             {/* The Family Member Name */}
// // // // //             <div
// // // // //                 style={{
// // // // //                     cursor: 'pointer',
// // // // //                     fontWeight: 'bold',
// // // // //                     color: isOpen ? 'blue' : 'black',
// // // // //                 }}
// // // // //                 onClick={() => setIsOpen(!isOpen)}
// // // // //             >
// // // // //                 {member.name}
// // // // //             </div>

// // // // //             {/* Horizontal Line */}
// // // // //             {member.children && (
// // // // //                 <motion.div
// // // // //                     initial={{ width: 0 }}
// // // // //                     animate={{ width: isOpen ? '100px' : '0' }}
// // // // //                     exit={{ width: 0 }}
// // // // //                     transition={{ duration: 0.5 }}
// // // // //                     style={{
// // // // //                         height: '2px',
// // // // //                         backgroundColor: 'black',
// // // // //                         position: 'absolute',
// // // // //                         top: '10px',
// // // // //                         left: '110px',
// // // // //                     }}
// // // // //                 />
// // // // //             )}

// // // // //             {/* Children appear horizontally */}
// // // // //             <AnimatePresence>
// // // // //                 {isOpen && member.children && (
// // // // //                     <motion.div
// // // // //                         initial={{ opacity: 0, x: -50 }}
// // // // //                         animate={{ opacity: 1, x: 0 }}
// // // // //                         exit={{ opacity: 0, x: -50 }}
// // // // //                         style={{
// // // // //                             display: 'flex',
// // // // //                             justifyContent: 'flex-start',
// // // // //                             marginTop: '20px',
// // // // //                         }}
// // // // //                     >
// // // // //                         {member.children.map((child: any, index: any) => (
// // // // //                             <FamilyMemberComponent key={index} member={child} />
// // // // //                         ))}
// // // // //                     </motion.div>
// // // // //                 )}
// // // // //             </AnimatePresence>
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // interface FamilyTreeProps {
// // // // //     data: FamilyMember;
// // // // // }

// // // // // const FamilyTree: React.FC<FamilyTreeProps> = ({ data }) => {
// // // // //     return (
// // // // //         <div>
// // // // //             <FamilyMemberComponent member={data} />
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default FamilyTree;













// // // // // // // app/components/FamilyTree.tsx
// // // // // // 'use client'; // This is needed because we'll be using interactivity (state, events)

// // // // // // import { useState } from 'react';
// // // // // // import { motion, AnimatePresence } from 'framer-motion';
// // // // // // // import { FamilyMember } from '../familyMember';
// // // // // // import { FamilyMember } from '../app/familyTree';

// // // // // // interface FamilyMemberProps {
// // // // // //     member: FamilyMember;
// // // // // // }

// // // // // // const FamilyMemberComponent: React.FC<FamilyMemberProps> = ({ member }) => {
// // // // // //     const [isOpen, setIsOpen] = useState(false);

// // // // // //     return (
// // // // // //         <div style={{ marginLeft: '20px' }}>
// // // // // //             <div
// // // // // //                 style={{
// // // // // //                     cursor: 'pointer',
// // // // // //                     fontWeight: 'bold',
// // // // // //                     color: isOpen ? 'blue' : 'black',
// // // // // //                 }}
// // // // // //                 onClick={() => setIsOpen(!isOpen)}
// // // // // //             >
// // // // // //                 {member.name}
// // // // // //             </div>
// // // // // //             <AnimatePresence>
// // // // // //                 {isOpen && member.children && (
// // // // // //                     <motion.div
// // // // // //                         initial={{ height: 0, opacity: 0 }}
// // // // // //                         animate={{ height: 'auto', opacity: 1 }}
// // // // // //                         exit={{ height: 0, opacity: 0 }}
// // // // // //                         style={{ overflow: 'hidden' }}
// // // // // //                     >
// // // // // //                         {member.children.map((child, index) => (
// // // // // //                             <FamilyMemberComponent key={index} member={child} />
// // // // // //                         ))}
// // // // // //                     </motion.div>
// // // // // //                 )}
// // // // // //             </AnimatePresence>
// // // // // //         </div>
// // // // // //     );
// // // // // // };

// // // // // // interface FamilyTreeProps {
// // // // // //     data: FamilyMember;
// // // // // // }

// // // // // // const FamilyTree: React.FC<FamilyTreeProps> = ({ data }) => {
// // // // // //     return (
// // // // // //         <div>
// // // // // //             <FamilyMemberComponent member={data} />
// // // // // //         </div>
// // // // // //     );
// // // // // // };

// // // // // // export default FamilyTree;















// // // // // // // // components/FamilyTree.js
// // // // // // // import { useState } from 'react';
// // // // // // // import { motion } from 'framer-motion';

// // // // // // // const FamilyMember = ({ member }) => {
// // // // // // //     const [isOpen, setIsOpen] = useState(false);

// // // // // // //     return (
// // // // // // //         <div style={{ marginLeft: '20px' }}>
// // // // // // //             <div
// // // // // // //                 style={{ cursor: 'pointer', fontWeight: 'bold' }}
// // // // // // //                 onClick={() => setIsOpen(!isOpen)}
// // // // // // //             >
// // // // // // //                 {member.name}
// // // // // // //             </div>
// // // // // // //             {isOpen && member.children && (
// // // // // // //                 <motion.div
// // // // // // //                     initial={{ height: 0, opacity: 0 }}
// // // // // // //                     animate={{ height: 'auto', opacity: 1 }}
// // // // // // //                     exit={{ height: 0, opacity: 0 }}
// // // // // // //                 >
// // // // // // //                     {member.children.map((child, index) => (
// // // // // // //                         <FamilyMember key={index} member={child} />
// // // // // // //                     ))}
// // // // // // //                 </motion.div>
// // // // // // //             )}
// // // // // // //         </div>
// // // // // // //     );
// // // // // // // };

// // // // // // // const FamilyTree = ({ data }) => {
// // // // // // //     return (
// // // // // // //         <div>
// // // // // // //             <FamilyMember member={data} />
// // // // // // //         </div>
// // // // // // //     );
// // // // // // // };

// // // // // // // export default FamilyTree;
