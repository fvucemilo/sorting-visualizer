import { generateBubbleSortAnimationArray } from "@/algorithms/bubbleSort";
import { generateInsertionSortAnimationArray } from "@/algorithms/insertionSort";
import { generateMergeSortAnimationArray } from "@/algorithms/mergeSort";
import { generateQuickSortAnimationArray } from "@/algorithms/quickSort";
import { generateSelectionSortAnimationArray } from "@/algorithms/selectionSort";
import { SortingAlgorithmType } from "./types";
import { generateHeapSortAnimationArray } from "@/algorithms/heapSort";
import { generateRadixSortAnimationArray } from "@/algorithms/radixSort";

export function generateRandomNumberFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const MNI_ANIMATION_SPEED = 100;
export const MAX_ANIMATION_SPEED = 400;

export const algorithmOptions = [
  { label: "Bubble", value: "bubble" },
  { label: "Quick", value: "quick" },
  { label: "Merge", value: "merge" },
  { label: "Insertion", value: "insertion" },
  { label: "Selection", value: "selection" },
  { label: "Heap", value: "heap" },
  { label: "Radix", value: "radix" },
];

export function generateAnimationArray(
  selectedAlgorithm: SortingAlgorithmType,
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: [number[], boolean][]) => void
) {
  switch (selectedAlgorithm) {
    case "bubble":
      generateBubbleSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "quick":
      generateQuickSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "merge":
      generateMergeSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "insertion":
      generateInsertionSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "selection":
      generateSelectionSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "heap":
      generateHeapSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "radix":
      generateRadixSortAnimationArray(isSorting, array, runAnimation);
      break;
    default:
      break;
  }
}

export const sortingAlgorithmsData = {
  bubble: {
    title: "Bubble Sort",
    description:
      "A simple comparison-based sorting algorithm. Bubble sort repeatedly compares and swaps adjacent elements if they are in the wrong order, moving larger elements towards the end with each pass through the list. This process continues until the list is sorted and no more swaps are needed.",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n)",
  },
  insertion: {
    title: "Insertion Sort",
    description:
      "Insertion sort builds the final sorted array one element at a time, by repeatedly taking the next unsorted element and inserting it into its correct position among the previously sorted elements. This process continues until all elements have been inserted into their proper place, resulting in a sorted list.",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n)",
  },
  selection: {
    title: "Selection Sort",
    description:
      "Selection sort works by repeatedly finding the minimum element from the unsorted portion of the list and swapping it with the element at the current position. This process is continued for each position in the list, moving the boundary of the sorted and unsorted portions one element forward each time until the entire list is sorted.",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n²)",
  },
  merge: {
    title: "Merge Sort",
    description:
      "Merge sort divides the unsorted list into n sublists, each containing one element (a list of one element is considered sorted), and then repeatedly merges these sublists to produce new sorted sublists until there is only one sublist remaining, which is the sorted list. This algorithm uses a divide-and-conquer approach, splitting the list in half recursively and merging the sorted halves back together.",
    worstCase: "O(n log n)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
  },
  quick: {
    title: "Quick Sort",
    description:
      "Quick sort selects a 'pivot' element from the array and partitions the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively, and the sorted sub-arrays are combined with the pivot to form the sorted array.",
    worstCase: "O(n²)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
  },
  heap: {
    title: "Heap Sort",
    description: 
      "Heap sort is a comparison-based sorting algorithm. It transforms the input array into a heap, a specialized binary tree. It then repeatedly extracts the maximum (for ascending order) or minimum (for descending order) element from the heap and reconstructs the heap until the original array is sorted. Heap sort has a time complexity of O(n log n) in the worst, average, and best cases.",
    worstCase: "O(n log n)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
  },
  radix: {
    title: "Radix Sort",
    description: 
      "Radix sort is a non-comparative integer sorting algorithm that sorts numbers by their digits. It operates by sorting numbers digit by digit, starting from the least significant digit (LSD) to the most significant digit (MSD). Radix sort can be performed using different digit-by-digit methods, such as LSD radix sort and MSD radix sort. It has a time complexity of O(nk) in the worst, average, and best cases, where n is the number of elements to be sorted and k is the maximum number of digits in the input numbers.",
    worstCase: "O(nk)",
    averageCase: "O(nk)",
    bestCase: "O(nk)",
  },
};
