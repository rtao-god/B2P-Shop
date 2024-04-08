import React, { useEffect, useRef, useState } from 'react';
import Chevron from '@/components/common/icons/Chevron';
import styles from './InstallationInstructions.module.sass';
import LogoBlack from "@/components/common/icons/Logos/LogoBlack";
import Android from "@/components/common/icons/Platforms/Android";
import Apple from "@/components/common/icons/Platforms/Apple";
import Huawei from "@/components/common/icons/Platforms/Huawei";
import useApi from '@/hooks/useApi';

interface InstallationStep {
    header: string;
    image: string;
    qr_code: string | null;
    footer: string | null;
}

interface PlatformSteps {
    [key: string]: InstallationStep;
}

interface InstallationInstructionsAPI {
    title: string;
    description: string;
    image: string;
    platforms: {
        android?: PlatformSteps;
        apple?: PlatformSteps;
        huawei?: PlatformSteps;
    };
}

const InstallationInstructions: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [selectedDevice, setSelectedDevice] = useState<string>('iphone');
    const instructionsRef = useRef<HTMLDivElement>(null);

    const toggleExpansion = () => setIsExpanded(!isExpanded);

    const topRef = useRef<HTMLDivElement>(null);

    const smoothScrollTo = (targetY: number) => {
        const startPosition = window.scrollY;
        const distance = targetY - startPosition;
        const duration = 500;
        let startTime: number | null = null;

        const ease = (t: number, b: number, c: number, d: number) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        const animation = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
            else startTime = null;
        };

        requestAnimationFrame(animation);
    };

    useEffect(() => {
        if (isExpanded && instructionsRef.current) {
            const targetPosition = instructionsRef.current.getBoundingClientRect().top + window.pageYOffset;
            smoothScrollTo(targetPosition);
        } else if (!isExpanded && topRef.current) {
            const targetPosition = topRef.current.getBoundingClientRect().top + window.pageYOffset;
            smoothScrollTo(targetPosition);
        }
    }, [isExpanded])

    const { data: manual, isLoading, error } = useApi<InstallationInstructionsAPI>('/instructions');

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching manual: {error.message}</div>;
    if (!manual) return <div>No manual found.</div>;

    const renderStepsInPairs = (steps: PlatformSteps) => {
        const stepEntries = Object.entries(steps);
        const pairs: JSX.Element[] = [];

        for (let i = 0; i < stepEntries.length; i += 2) {
            pairs.push(
                <div key={`pair-${i}`} className={styles.stepPair}>
                    <div className={styles.step}>
                        <div>
                            <h4>{(i + 1)}</h4>
                            {stepEntries[i][1].image && <>
                                <img src={stepEntries[i][1].image} alt={`Step ${i + 1}`} className={styles.stepImage} />
                            </>}
                            {/* <p>{stepEntries[i][1].header}</p> */}
                            {/*   {stepEntries[i][1].qr_code && <>
                                <img src={stepEntries[i][1].qr_code || undefined} alt="QR Code" className={styles.qrImage} />
                                <p>{stepEntries[i][1].footer}</p>
                            </>} */}
                        </div>
                        {/*   {stepEntries[i][1].image && <>
                            <img src={stepEntries[i][1].image || undefined} alt={`Step ${i + 1}`} className={styles.stepImage} />
                        </>} */}
                        {/* {!stepEntries[i][1].qr_code && !stepEntries[i][1].image && stepEntries[i][1].footer &&
                            <p>{stepEntries[i][1].footer}</p>
                        } */}
                    </div>
                    {stepEntries[i + 1] && (
                        <div className={styles.step}>
                            <div>
                                <h4>{(i + 2)}</h4>
                                {/*     <p>{stepEntries[i + 1][1].header}</p>
                                {stepEntries[i + 1][1].qr_code && <>
                                    <img src={stepEntries[i + 1][1].qr_code || undefined} alt="QR Code" className={styles.qrImage} />
                                    <p>{stepEntries[i + 1][1].footer}</p>
                                </>} */}
                            </div>
                            {stepEntries[i + 1][1].image && <>
                                <img src={stepEntries[i + 1][1].image} alt={`Step ${i + 2}`} className={styles.stepImage} />
                            </>}
                            {/*  {!stepEntries[i + 1][1].qr_code && !stepEntries[i + 1][1].image && stepEntries[i + 1][1].footer &&
                                <p>{stepEntries[i + 1][1].footer}</p>
                            } */}
                        </div>
                    )}
                </div>
            );
        }

        return pairs;
    };

    const handleDeviceSelection = (device: string) => {
        setSelectedDevice(device);
        setIsExpanded(true);
    };

    return (
        <div>
            <div className={styles.installation_instructions}>
                <div>
                    <LogoBlack />
                    <p>Приложение для смартфона</p>
                    <div className={styles.platforms}>
                        <div className={styles.apple}><Apple /></div>
                        <div><Android /></div>
                        <div><Huawei /></div>
                    </div>
                </div>
                <img className={styles.device_mockup} src={manual.image} alt="Device mockup" />
            </div>

            <p className={styles.description}>{manual.description}</p>

            <div className={styles.roll_up} onClick={toggleExpansion}>
                <p>Инструкция по установке</p>
                <div className={isExpanded ? `${styles.chevron} ${styles.rotate}` : styles.chevron}>
                    <Chevron />
                </div>
            </div>

            {isExpanded && selectedDevice && (
                <div className={styles.device_selection_btn}>
                    <button className={selectedDevice == "android" ? styles.acitve : ""} onClick={() => handleDeviceSelection('android')}> Android </button>
                    <button className={selectedDevice == "iphone" ? styles.acitve : ""} onClick={() => handleDeviceSelection('iphone')}> Iphone </button>
                </div>
            )}

            {isExpanded && selectedDevice && (
                <div ref={instructionsRef}>
                    {Object.entries(manual.platforms).filter(([platform]) => platform === selectedDevice).map(([platform, steps]) => (
                        <div key={platform}>
                            {renderStepsInPairs(steps)}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default InstallationInstructions;
