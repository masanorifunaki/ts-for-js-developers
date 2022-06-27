export {};

const error: (message: string) => never = (message: string) => {
  throw new Error(message);
};

try {
  error('test');
} catch (e) {
  console.log({ e });
}
