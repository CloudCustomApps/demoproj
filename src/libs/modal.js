const SIZES = ['lg', 'md', 'sm', 'xl', 'xs', false];
const COLORS = ['red', 'yellow', 'blue', 'indigo', 'purple', 'gray'];

export const getRandomModalConfig = () => {
  const size = getRandomItemFromArray(SIZES);
  const color = getRandomItemFromArray(COLORS);

  // This config is based on the props in designops/CustomModal
  return {
    size,
    dialogClasses: '',
    dialogTitleClasses: {
      root: `bg-${color}-700 text-white`,
    },
    dialogContentClasses: `bg-gray-50 text-lg text-gray-700`,
    dialogActionClasses: `bg-gray-50`,
    buttonClasses: '',
  };
};

const getRandomItemFromArray = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};
