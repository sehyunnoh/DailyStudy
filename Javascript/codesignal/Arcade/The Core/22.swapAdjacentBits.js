function swapAdjacentBits(n) {
    return ((n & 0xaaaaaaaa) >> 1) | ((n & 0x55555555) << 1);
  }

  console.log(swapAdjacentBits());