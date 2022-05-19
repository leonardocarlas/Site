import styles from './Services.module.scss';

export default function Services() {
    
    return (
        <>
            <div className={styles.bannerRed}>
                <p>SERVICES</p>
                
            </div>
            
            <div className={styles.bannerBlue}>
                <div className={styles.container}>
                    <div className={styles.box}>CIAO</div>
                    <div className={styles.box}>CIAO</div>
                    <div className={styles.box}>CIAO</div>
                </div>
            </div>
        
        </>
    );
}
