// import { useState } from 'react';
// import Chevron from '@/components/common/icons/Chevron';
// import styles from './InstallationInstructions.module.sass';
// import Logo from "@/components/common/icons/Logo";
// import Android from "@/components/common/icons/Platforms/Android";
// import Apple from "@/components/common/icons/Platforms/Apple";
// import Huawei from "@/components/common/icons/Platforms/Huawei";
// import useApi from '@/hooks/useApi';

// interface InstallationStep {
//     header: string;
//     image: string;
//     qr_code: string | null;
//     footer: string | null;
// }

// interface InstallationInstructionsAPI {
//     title: string;
//     description: string;
//     image: string;
//     platforms: {
//         android?: InstallationStep;
//         apple?: InstallationStep;
//         huawei?: InstallationStep;
//     };
// }

// export default function InstallationInstructions() {
//     const [isExpanded, setIsExpanded] = useState(false);
//     const toggleExpansion = () => setIsExpanded(!isExpanded);

//     const { data: manual, isLoading, error } = useApi<InstallationInstructionsAPI[]>('/instructions');

//     if (isLoading) return <div>Loading...</div>;
//     if (error) return <div>Error fetching manual: {error.message}</div>;
//     if (!manual) return <div>No manual found.</div>;

//     console.log(manual)

//     return (
//         <div>
//             <div className={styles.installation_instructions}>
//                 <div>
//                     <Logo />
//                     <p>Приложение для смартфона</p>
//                     <div className={styles.platforms}>
//                         <div className={styles.apple}><Apple /></div>
//                         <div><Android /></div>
//                         <div><Huawei /></div>
//                     </div>

//                     <p>{manual.description}</p>
//                     <div className={styles.roll_up} onClick={toggleExpansion}>
//                         <p>Инструкция по установке</p>
//                         <div className={isExpanded ? `${styles.chevron} ${styles.rotate}` : styles.chevron}>
//                             <Chevron />
//                         </div>
//                     </div>
//                 </div>
//                 <img src={manual.image} alt="Device mockup" />
//             </div>

//             {isExpanded && (
//                 <div>
//                     {Object.entries(manual.platforms).map(([platform, steps]) => (
//                         <div key={platform}>
//                             <h3>{platform.toUpperCase()}</h3>
//                             {Object.entries(steps).map(([stepKey, stepDetails]) => (
//                                 <div key={stepKey}>
//                                     <h4>{stepDetails.header}</h4>
//                                     {stepDetails.qr_code && <img src={stepDetails.qr_code} alt="QR Code" />}
//                                     {stepDetails.image && <img src={stepDetails.image} alt={`${platform} step`} />}
//                                     {stepDetails.footer && <p>{stepDetails.footer}</p>}
//                                 </div>
//                             ))}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }
