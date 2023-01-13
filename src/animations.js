export const characterInfoAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const galleryAnimation = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const galleyrItemAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

export const disappearCharacterCardAnimation = {
  disappearing: {
    scale: 0,
    rotate: '45deg',
  },
};

export const appearCharacterCardAnimation = {
  hover: { scale: 1.05 },
  exit: { scale: 1 },
};
