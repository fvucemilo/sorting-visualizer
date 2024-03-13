import { AnimationArrayType } from "@/lib/types";

function countingSort(array: number[], n: number, exp: number, animations: AnimationArrayType) {
  const output = new Array(n).fill(0);
  const count = new Array(10).fill(0);

  for (let i = 0; i < n; i++) {
    count[Math.floor(array[i] / exp) % 10]++;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    const index = Math.floor(array[i] / exp) % 10;
    output[count[index] - 1] = array[i];
    count[index]--;
  }

  for (let i = 0; i < n; i++) {
    animations.push([[i, output[i]], true]);
    array[i] = output[i];
  }
}

export function generateRadixSortAnimationArray(
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void
) {
  if (isSorting) return;
  if (array.length <= 1) return [];

  const animations: AnimationArrayType = [];
  const maxElement = Math.max(...array);

  for (let exp = 1; Math.floor(maxElement / exp) > 0; exp *= 10) {
    countingSort(array, array.length, exp, animations);
  }

  runAnimation(animations);
}
