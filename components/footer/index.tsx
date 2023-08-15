import Image from "next/image"
import styles from "./Footer.module.css"

export const Footer = () => {
    return (
        <div
            className={`
                container
                rounded-xl
                ${styles.container}
                mx-auto
            `}
        >
            <div
                className={`
                    flex
                    md:flex-row
                    md:gap-10
                    gap-20
                    ${styles.subscribe}
                    flex-col
                `}
            >
                <div
                    className="flex flex-col basis-1/2 gap-7"
                >
                    <Image
                        src="/logo.png"
                        width={400}
                        height={100}
                        alt="logo"
                    />
                    <p
                    >
                        Vestibulum ante ipsum primis in faucibus luctus et ultrices posuere cubilia curae aliquam dignissim viverra dolor sit condimentum aenean sollicitudin justo eu pulvinar rutrum.
                    </p>
                </div>
                <div
                    className={`flex flex-col gap-3`}
                >
                    <h2
                        className={`${styles.heading} text-2xl`}
                    >
                        SUBSCRIBE
                    </h2>
                    <p>Aenean et tortor vitae diam cursus ornare sit amet nec mi. In tempor libero nec.</p>
                    <input
                        placeholder="Your email address..."
                        className={`rounded-xl ${styles.input}`}
                    />
                    <button
                        className={`
                            rounded-xl
                            ${styles.button}
                        `}
                    >
                        SUBSCRIBE
                    </button>
                </div>
            </div>
            <div
                className={`
                    container
                    ${styles.copyright}
                    items-center
                    flex
                    justify-center
                    rounded-xl
                `}
            >
                <p>Copyrights © 2023. All Rights Reserved.</p>
            </div>
        </div>
    )
}