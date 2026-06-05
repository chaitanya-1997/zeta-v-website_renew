export const fadeUp = {

    hidden: {

        opacity: 0,
        y: 40,
    },

    show: {

        opacity: 1,
        y: 0,

        transition: {

            duration: 0.55,

            ease: [0.25, 0.1, 0.25, 1],
        },
    },
}

export const slideLeft = {

    hidden: {

        opacity: 0,
        x: -80,
    },

    show: {

        opacity: 1,
        x: 0,

        transition: {

            duration: 0.7,
            ease: 'easeOut',
        },
    },
}

export const slideRight = {

    hidden: {

        opacity: 0,
        x: 80,
    },

    show: {

        opacity: 1,
        x: 0,

        transition: {

            duration: 0.7,
            ease: 'easeOut',
        },
    },
}

export const staggerContainer = {

    hidden: {},

    show: {

        transition: {

            staggerChildren: 0.12,
        },
    },
}