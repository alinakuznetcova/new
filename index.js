function main(a = 1, b = 1) {
  try {
    return a * b;
  } catch (e) {
    console.log(e);
    return 0;
  }
}

main(2, 3);
